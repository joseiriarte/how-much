import { categories } from '../constants';
import { Card } from './Card';

export const Categories = ({ handleSubcategory }) => {
  return (
    <div className='flex justify-center items-center w-full py-8'>
      <section className='bg-neutral-900 w-4/5 max-w-md py-8 px-8 rounded-2xl shadow-lg'>
        <h2 className='text-center text-xl text-neutral-50 font-semibold'>Select from a list of categories</h2>

        <div className=''>
          {categories.map((category) => (
            <div
              key={category.title}
              className='mt-8 pt-4 border-t'
            >
              <h3
                key={category.title}
                className='font-medium text-lg text-emerald-400 opacity-90 mb-4'
              >
                {category.title}
              </h3>
              <ul>
                {category.subcategories.map((subcategory) => (
                  <Card
                    key={subcategory.title}
                    title={subcategory.title}
                    img={subcategory.img}
                    amount={subcategory.amount}
                    handleSubcategory={handleSubcategory}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
