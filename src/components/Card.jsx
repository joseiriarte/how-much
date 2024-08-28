import { remove } from '../assets/icons';

export const Card = ({ id, title, img, amount, handleSubcategory, totalSection, deleteSubtotal }) => {
  return (
    <div
      onClick={() => handleSubcategory(title, img, amount)}
      className={`flex justify-between items-center gap-4 border border-neutral-800 rounded-lg p-3 mb-2 cursor-pointer
        transition hover:duration-300 hover:border-emerald-400 hover:bg-neutral-700 active:bg-neutral-800
        ${totalSection && 'max-sm:flex-col cursor-default'}`}
    >
      <div className='flex items-center gap-4'>
        <div>
          <img
            src={img}
            alt={title}
            width={30}
          />
        </div>
        <li className='py-2'>{title}</li>
      </div>
      {totalSection && (
        <div className='flex justify-between items-center gap-8'>
          <p>{amount}</p>
          <div
            onClick={() => deleteSubtotal(id)}
            className='cursor-pointer'
          >
            <img
              src={remove}
              alt='Remove'
              width={20}
            />
          </div>
        </div>
      )}
    </div>
  );
};
