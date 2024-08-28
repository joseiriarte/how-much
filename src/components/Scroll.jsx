import { up } from '../assets/icons';

export const Scroll = ({ scroll }) => {
  return (
    <div
      onClick={scroll}
      className='button w-auto rounded-full p-4 sticky bottom-[7%] left-[85%] max-sm:left-[80%]'
    >
      <img
        src={up}
        alt='Scroll to the top'
        className='w-[40px] max-sm:w-[25px]'
      />
    </div>
  );
};
