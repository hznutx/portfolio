'use client';
import {Card, Skeleton} from '@heroui/react';

export const CardSkeleton = ({className}: {className: string}) => {
  return (
    <Card
      className={`space-y-4 p-4 ${className}`}
      radius='lg'
    >
      <Skeleton className='rounded-lg h-1/2 mb-4'>
        <div className='h-full rounded-lg bg-default-300' />
      </Skeleton>
      <div className='space-y-4'>
        <Skeleton className='w-3/5 rounded-lg'>
          <div className='h-3 w-3/5 rounded-lg bg-default-200' />
        </Skeleton>
        <Skeleton className='w-4/5 rounded-lg'>
          <div className='h-3 w-4/5 rounded-lg bg-default-200' />
        </Skeleton>
        <Skeleton className='w-2/5 rounded-lg'>
          <div className='h-3 w-2/5 rounded-lg bg-default-300' />
        </Skeleton>
      </div>
    </Card>
  );
};

export default function Loading() {
  return (
    <div className='flex w-dvw h-dvh justify-center items-center flex-row gap-2'>
      <div className='w-4 h-4 rounded-full bg-pink-300 animate-bounce [animation-delay:.7s]'></div>
      <div className='w-4 h-4 rounded-full bg-blue-300 animate-bounce [animation-delay:.3s]'></div>
      <div className='w-4 h-4 rounded-full bg-teal-300 animate-bounce [animation-delay:.7s]'></div>
    </div>
  );
}
