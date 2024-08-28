import { github } from '../assets/icons';

export const Footer = () => {
  return (
    <footer className='w-full flex flex-col justify-center items-center mt-8 py-8 gap-4 border-t border-neutral-900'>
      <p>Made with &#60;3 by Jose Iriarte.</p>
      <div>
        <a href='https://github.com/joseiriarte'>
          <img
            src={github}
            alt='GitHub logo'
            width={35}
          />
        </a>
      </div>
    </footer>
  );
};
