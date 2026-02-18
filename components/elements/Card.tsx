'use client';
import Image from 'next/image';
import {SnipText} from './Snippet';
import {ArrowIcon} from '../svg';
import {Button, Card, CardFooter, Chip, useDisclosure} from '@heroui/react';
import {ModalPopup} from './Modal';
import {codeTypeMatch, htmlClassToClassName} from '@/utils';

export enum ECodeType {
  TAILWIND = 'TAILWIND',
  CSS = 'CSS',
  JAVASCRIPT = 'JAVASCRIPT',
  TYPESCRIPT = 'TYPESCRIPT',
}

export interface IComponentDisplay {
  id?: number;
  name: string;
  code: string;
  codeType: ECodeType;
}
export interface IDocsMenu {
  id?: number;
  submenu: string;
  description: string;
  url: string;
}

export interface ICard {
  title: string;
  content: string;
  src: string;
  button?: string;
  onClick?: () => void;
}

export function CardProject({title, content, src, button = 'Read More', onClick}: ICard) {
  const {onOpen, onClose, isOpen} = useDisclosure();
  const getModalProps = {content, title, src, onOpen, onClose, isOpen, onClick};
  return (
    <>
      <Card
        isFooterBlurred
        className='zoom-in relative aspect-[1.6/1] bg-clip-border border-none'
        radius='lg'
      >
        <Image
          src={src}
          alt={title}
          fill
          className='object-cover'
        />
        <CardFooter className='justify-between bg-black/20 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
          <p className='convert-text text-sm w-full'>{title}</p>
          <Button
            className='text-tiny px-4 py-1 text-white bg-black/20'
            color='default'
            radius='lg'
            size='sm'
            variant='flat'
            onPress={onOpen}
          >
            {button}
          </Button>
        </CardFooter>
      </Card>
      <ModalPopup {...getModalProps} />
    </>
  );
}

export const CardSnippet: React.FC<IComponentDisplay> = ({code, name, codeType}) => {
  const codeSet = htmlClassToClassName(code);
  const {tagCode, bgColor, textColor, CodeIcon} = codeTypeMatch(codeType);

  return (
    <div
      id='components-sandbox'
      className='max-w-4xl mx-auto w-full'
    >
      <div className='mb-3 inline-flex items-center w-full justify-between xl:pr-[65px] gap-2'>
        <p>{name}</p>
        <Chip
          size='sm'
          style={{backgroundColor: bgColor, color: textColor}}
          endContent={<CodeIcon />}
        >
          {tagCode}
        </Chip>
      </div>
      <div className='w-auto rounded-xl grid container mx-auto grid-cols-1 gap-3 place-content-center md:grid-cols-2 max-w-5xl'>
        <div
          id='ui-preview'
          className='h-80 relative w-full max-w-5xl flex justify-center items-center border border-default-50 rounded-2xl p-[10%]'
        >
          <div
            className='relative scale-75 m-[5%] group'
            dangerouslySetInnerHTML={{__html: code}}
          />
        </div>
        <div className='w-full md:w-96'>
          <SnipText code={codeSet} />
        </div>
      </div>
    </div>
  );
};

export const CardDocument: React.FC<IDocsMenu> = ({description, submenu, url}) => {
  return (
    <div className='cursor-pointer w-full border-gray-300/20 border aspect-[4/2] bg-background hover:shadow-lg shadow m-auto rounded-[1em] overflow-hidden relative group p-2 z-0'>
      <div className='circle absolute h-[6em] aspect-square -top-[2.5em] -right-[2.5em] rounded-full bg-primary group-hover:scale-[1200%] duration-500 z-[-1] op' />

      <button
        onClick={() => window.open(url, '_self')}
        className='absolute bottom-[1em] px-3 font-light group-hover:text-[white] duration-500'
      >
        <p className='relative text-[0.8em] duration-300 text-left line-clamp-2 h-14 leading-6 mb-4'>{description}</p>
        <p className='hover:font-normal w-full inline-flex gap-1 items-center'>
          more info <ArrowIcon />
        </p>
      </button>

      <h1 className='z-20 px-2 font-bold group-hover:text-[white] duration-500 text-[1.4em]'>{submenu}</h1>
    </div>
  );
};
