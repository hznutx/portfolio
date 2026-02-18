'use client';

import {useEffect, useState} from 'react';
import {createBrowserClient} from '@supabase/ssr';
import {CardSnippet, IComponentDisplay} from '../elements/Card';
import {Pagination, Input, Select, SelectItem} from '@heroui/react';
import {IoSearch} from 'react-icons/io5';

const supabase = createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

interface FilterState {
  page: number;
  search: string;
  limit: number;
}

export default function ComponentsOverview() {
  const [data, setData] = useState<IComponentDisplay[]>([]);
  const [total, setTotal] = useState(0);

  const [filter, setFilter] = useState<FilterState>({
    page: 1,
    search: '',
    limit: 2,
  });

  const [debouncedSearch, setDebouncedSearch] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(filter.search);
      setFilter((prev) => ({...prev, page: 1}));
    }, 500);

    return () => clearTimeout(timeout);
  }, [filter.search]);

  const fetchData = async () => {
    const from = (filter.page - 1) * filter.limit;
    const to = from + filter.limit - 1;

    let query = supabase.from('components').select('*', {count: 'exact'});

    if (debouncedSearch) {
      query = query.ilike('name', `%${debouncedSearch}%`);
    }

    const {data, count, error} = await query.range(from, to);

    if (!error) {
      setData(data ?? []);
      setTotal(count ?? 0);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filter.page, filter.limit, debouncedSearch]);

  return (
    <div className='flex flex-col gap-6'>
      <Input
        variant='flat'
        classNames={{input: 'bg-transparent !outline-none '}}
        startContent={<IoSearch className='text-default-400 pointer-events-none shrink-0' />}
        placeholder='Search components...'
        value={filter.search}
        onChange={(e) =>
          setFilter((prev) => ({
            ...prev,
            search: e.target.value,
          }))
        }
        isClearable
        onClear={() =>
          setFilter((prev) => ({
            ...prev,
            search: '',
          }))
        }
      />
      <div className='flex flex-col mb-10 gap-8'>
        {data.map((props, i) => (
          <CardSnippet
            key={i}
            {...props}
          />
        ))}
      </div>

      <div className='flex w-full  justify-center items-center space-x-4'>
        <Pagination
          variant='light'
          showControls
          page={filter.page}
          total={Math.ceil(total / filter.limit)}
          onChange={(newPage) =>
            setFilter((prev) => ({
              ...prev,
              page: newPage,
            }))
          }
        />

        <Select
          variant='faded'
          label='items:'
          labelPlacement='outside-left'
          selectedKeys={new Set([String(filter.limit)])}
          onSelectionChange={(keys) => {
            const value = Number(Array.from(keys)[0]);
            setFilter((prev) => ({
              ...prev,
              limit: value,
              page: 1,
            }));
          }}
          className='w-full md:w-1/6'
        >
          {[2, 5, 10, 15, 20].map((count, i) => (
            <SelectItem
              key={String(count)}
              textValue={String(count)}
            >
              {count}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
}
