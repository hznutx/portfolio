'use client'
import { AnimateWindowBox, Button } from '../elements';
import { TextHeader, Typography } from '../elements/Typography';
import { AnimateCursorTextSelected } from '../elements/AnimateDisplay';

const header = {
  name: 'Nuttakarn P.',
  front: ' Frontend Developer',
  subtitleFront: 'Typescript - NextJs - React - Javascript',
  description: 'since 2016, The winner prize of Graphic Design and Web Editor Arts And Crafts Competition 57th.',
  button: 'Lets get started'
}

const backendStack = ['Node.js',
  'NestJS',
  'ProgresSQL',
  'DBeaver',
  'Docker',
  'Lens']

const HeroSection: React.FC = () => {

  const handleNavigate = () => {
    window.scrollTo({ behavior: 'smooth', top: 500 })
  }

  return <>
    <section className='py-10 sm:py-16 lg:py-24'>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='grid items-center grid-cols-1 gap-12 lg:grid-cols-2'>
          <div>
            <TextHeader title={header.front} subtitle={header.subtitleFront} />
            <div className='pt-3 lg:pt-0 relative pr-[40%] lg:pr-10 inline-flex'>
              <div className='absolute inset-x-0 bottom-0 h-10 md:h-16 w-[100%] lg:w-auto bg-gradient-to-r from-yellow-200 dark:h-3 transition-all dark:-bottom-6 to-pink-500' />
              <h1 className='relative text-4xl font-bold sm:text-6xl lg:text-7xl'>{header.name}</h1>
            </div>
            <Typography className='mt-8' text={header.description} />
            {/* <div className='md:mt-10 mt-5 sm:flex sm:items-center sm:space-x-8'>
              <Button onClick={handleNavigate}
                text={header.button}
                arrow
              />
            </div> */}
          </div>

          <div className='relative md:flex-row flex-col  flex max-w-screen-md'>
              <AnimateWindowBox width={280} title='Backend Knowledge' typing='Active learning...' detail={<div>{backendStack.map((tool, i) => <p key={i}>{tool}</p>)}
              </div>} />
            <div className="absolute lg:w-[390px] lg:-bottom-[210] -bottom-[320] right-0">
              <AnimateCursorTextSelected />
            </div>
          </div>
        </div>
      </div>
    </section>
  </ >
};

export { HeroSection };
