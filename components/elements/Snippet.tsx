'use client';
import {Snippet} from '@heroui/react';

export const SnipText = ({code}: {code: string}) => {
  return (
    <Snippet
      hideSymbol
      variant='bordered'
      size='sm'
      classNames={{base: 'text-foreground p-2 h-80 w-full max-w-96 m-0 items-start border border-gray-400/30', content: 'm-0 p-0', pre: 'truncate mt-0 pt-0 flex flex-wrap text-wrap whitespace-break-spaces text-balance h-72'}}
    >
      <span>{code}</span>
    </Snippet>
  );
};
