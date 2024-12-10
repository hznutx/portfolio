import React from 'react';
import Button from '../elements/Button';

export const AnimateHeader = () => {
  return (
    <div>
      <div className='bg-gradient-to-b from-transparent to-none'>
        <section className='py-10 sm:py-16 lg:pt-24'>
          <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='grid items-center grid-cols-1 gap-12 lg:grid-cols-2'>
              <div>
                <h1 className='text-4xl font-bold sm:text-6xl'>
                  Frontend Developer
                  <p className='text-gray-400 text-xl'>Typescript - NextJs - React - Javascript</p>
                  <div className='relative pr-4 inline-flex'>
                    <span className='absolute inset-x-0 bottom-0 h-16 bg-gradient-to-r from-yellow-200 dark:h-3 transition-all dark:-bottom-6 to-pink-500'></span>
                    <h1 className='relative text-4xl font-bold sm:text-6xl lg:text-7xl'>Nuttakarn P.</h1>
                  </div>
                </h1>

                <p className='mt-8 text-base sm:text-xl'> 2016 The winner prize of Graphic Design and Web Editor skills from Samutprakan in the Student Arts And Crafts Competition 57th.</p>

                <div className='mt-10 sm:flex sm:items-center sm:space-x-8'>
                  <Button
                    text='Lets get started'
                    arrow
                  />
                </div>
              </div>

              <div className='relative'>
                <div className='absolute to-2 left-5 z-10 border shadow border-slate-100 bg-white w-48 h-64 rounded-lg'>
                  <div className='flex p-2 gap-1'>
                    <div className=''>
                      <span className='bg-blue-500 inline-block center w-3 h-3 rounded-full'></span>
                    </div>
                    <div className='circle'>
                      <span className='bg-purple-500 inline-block center w-3 h-3 rounded-full'></span>
                    </div>
                    <div className='circle'>
                      <span className='bg-pink-500 box inline-block center w-3 h-3 rounded-full'></span>
                    </div>
                  </div>
                  <div className='card__content'></div>
                </div>

                <img
                  className='w-full'
                  src='https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png'
                  alt=''
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
