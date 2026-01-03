'use client'
import { ArrowIcon } from "../svg";

export interface IButtonProps {
  name?:string
  text: string;
  arrow?: boolean;
  onClick?: () => void
}

export const Button: React.FC<IButtonProps> = ({ text, arrow, onClick }) => {
  return (
    <div className='relative group'>
      <button onClick={onClick} className='relative inline-block p-1 font-light leading-6 dark:text-white cursor-pointer rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95'>
        <span className='absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-300 via-blue-300 to-purple-300 p-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

        <span className='relative z-10 block px-6 py-3 rounded-xl dark:bg-gray-950 bg-gray-50 hover:bg-white'>
          <div className='relative z-10 flex items-center space-x-2'>
            <span className='transition-all duration-500 group-hover:translate-x-1'>{text}</span>

            {arrow && (
              <ArrowIcon />
            )}
          </div>
        </span>
      </button>
    </div>
  );
};


export const LinkedinButton: React.FC<IButtonProps> = ({ text ,name,onClick}) => {
  return (
    <button onClick={onClick}
      className="group hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-500 font-bold flex justify-start gap-2 items-center p-2 pr-6"
    >
      <svg
        className="w-8 h-8 fill-neutral-50"
        height="100"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 100 100"
        width="100"
        x="0"
        xmlns="http://www.w3.org/2000/svg"
        y="0"
      >
        <path
          d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"
        ></path>
      </svg>
      <span className="border-l-2 px-1">{name}</span>
      <div
        className="group-hover:opacity-100 opacity-0 top-16 absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-500 bg-sky-600 rounded-lg shadow-sm before:w-3 before:h-3 before:rotate-45 before:-top-1 before:left-20 before:bg-sky-600 before:absolute"
      >
        {text}
      </div>
    </button>

  );
};

