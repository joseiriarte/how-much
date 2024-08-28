export const PeopleForm = ({ peopleForm, handlePeopleForm, handlePeopleSubmit }) => {
  return (
    <section className='w-full flex flex-col justify-center items-center'>
      <h2 className='w-4/5 text-center text-xl text-neutral-50 font-semibold'>
        How many people are going to pay for it?
      </h2>
      <div className='flex justify-center items-center w-4/5 max-w-md mb-4 py-4 px-8'>
        <form
          onSubmit={handlePeopleSubmit}
          className='form'
        >
          <input
            type='text'
            placeholder='Default: 1'
            pattern='[0-9]+'
            className='input'
            value={peopleForm}
            onChange={handlePeopleForm}
          />
          <input
            type='submit'
            value='Select'
            className='button'
          />
        </form>
      </div>
    </section>
  );
};
