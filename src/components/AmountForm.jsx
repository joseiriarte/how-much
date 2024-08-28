export const AmountForm = ({ amountForm, handleAmountForm, handleAmountSubmit, subcategory }) => {
  return (
    <section
      id='amount-form-section'
      className='w-full flex flex-col justify-center items-center py-8 border-t border-neutral-900'
    >
      <h2 className='w-4/5 text-center text-xl text-neutral-50 font-semibold'>How much did you spend?</h2>
      <div className='flex justify-center items-center w-4/5 max-w-md mb-4 py-4 px-8'>
        <form
          onSubmit={handleAmountSubmit}
          className='form'
        >
          <input
            id='amount-form-input'
            type='text'
            placeholder={subcategory === '' ? '$' : subcategory}
            pattern='^([0-9]+(\.?[0-9]?[0-9]?)?)'
            className='input'
            value={amountForm}
            onChange={handleAmountForm}
          />
          <input
            type='submit'
            value='Add'
            className='button'
          />
        </form>
      </div>
    </section>
  );
};
