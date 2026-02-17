'use client';
import {Breadcrumbs, BreadcrumbItem} from '@heroui/react';
import {usePathname} from 'next/navigation';
import {FaHome} from 'react-icons/fa';

interface IDisplayPathProps {}

export const PathDisplay: React.FC<IDisplayPathProps> = () => {
  const urlFullPath = usePathname();
  return (
    <Breadcrumbs className='mb-10'>
      <BreadcrumbItem
        hideSeparator
        href='/'
      >
        <FaHome size={18} />
      </BreadcrumbItem>
      {urlFullPath.split('/').map((path, i) => (
        <BreadcrumbItem
          key={i + 1}
          href={'/' + path}
        >
          <span className='capitalize'>{path}</span>
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
};
