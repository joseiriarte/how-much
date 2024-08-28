import { logo } from '../assets/icons';

export const Header = () => {
  return (
    <div className='w-full border-b border-neutral-900'>
      <header className='flex flex-col items-center justify-center my-8'>
        <div className='flex justify-center items-center gap-1'>
          <img
            src={logo}
            alt='logo'
          />
          <h1 className='text-4xl font-bold'>howmuch</h1>
        </div>
        <p className='max-sm:w-4/5 mt-4 opacity-75 text-sm text-center'>
          Keep track of how much you spend and split the amount among your friends!
        </p>
      </header>
    </div>
  );
};
