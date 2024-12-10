export interface IButtonProps {
  text: string;
  arrow: boolean;
}

const Button: React.FC<IButtonProps> = ({text, arrow}) => {
  return (
    <div className='relative group'>
      <button className='relative inline-block p-1 font-semibold leading-6 text-white cursor-pointer rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95'>
        <span className='absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-300 via-blue-300 to-purple-300 p-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

        <span className='relative z-10 block px-6 py-3 rounded-xl bg-gray-950'>
          <div className='relative z-10 flex items-center space-x-2'>
            <span className='transition-all duration-500 group-hover:translate-x-1'>{text}</span>

            {arrow && (
              <svg
                className='w-6 h-6 transition-transform duration-500 group-hover:translate-x-1'
                data-slot='icon'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  clip-rule='evenodd'
                  d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z'
                  fill-rule='evenodd'></path>
              </svg>
            )}
          </div>
        </span>
      </button>
    </div>
  );
};

export default Button;
