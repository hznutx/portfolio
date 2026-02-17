'use client';

import {Suspense, useEffect, useState} from 'react';
import {createBrowserClient} from '@supabase/ssr';
import {Spinner} from '@heroui/react';
import {CardSkeleton, CardProject, Loading, PathDisplay} from '../elements';
import {usePathname} from 'next/navigation';

const supabase = createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default function Spotlight() {
  const [data, setData] = useState<any[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    supabase
      .from('projects')
      .select('*')
      .then(({data}) => {
        setData(data ?? []);
      });
  }, []);

  return (
    <div className='relative p-5 xl:px-0 container mx-auto max-w-6xl w-full space-y-4'>
      <PathDisplay />
      {!data ? (
        <Loading />
      ) : (
        <div className='w-auto grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20'>
          {data?.map((item) => (
            <Suspense
              key={item?.id}
              fallback={<CardSkeleton className='aspect-[1.6/1]' />}
            >
              <CardProject
                title={item?.name}
                src={item?.image}
                content={item?.description}
                onClick={() => window.open(item?.url, '_blank')}
              />
            </Suspense>
          ))}
        </div>
      )}
    </div>
  );
}
