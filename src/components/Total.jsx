import { Card } from './Card';

export const Total = ({ total, each, subtotals, initialSubtotals, deleteSubtotal, calculate }) => {
  const totalSection = true;

  if (subtotals !== initialSubtotals) {
    return (
      <section
        id='total-section'
        className='flex flex-col items-center w-4/5 max-w-md text-center mt-4 mb-8 p-8 bg-neutral-900 border border-emerald-400 rounded-2xl shadow-lg'
      >
        <ul className='mb-4 w-full'>
          {subtotals ? (
            subtotals.map((subtotal) => (
              <Card
                key={subtotal.id}
                id={subtotal.id}
                title={subtotal.title}
                img={subtotal.img}
                amount={subtotal.amount}
                totalSection={totalSection}
                deleteSubtotal={deleteSubtotal}
              />
            ))
          ) : (
            <></>
          )}
        </ul>

        <button
          onClick={() => calculate()}
          className='button w-[50%] mb-8'
        >
          Calculate
        </button>

        <h2 className='text-2xl font-semibold mb-4'>Total:</h2>
        <p className='text-3xl font-bold'>${total}</p>

        <h2 className='text-2xl font-semibold mt-8 mb-4'>Each of you should pay:</h2>
        <p className='text-3xl font-bold'>${each}</p>
      </section>
    );
  } else {
    return <></>;
  }
};
