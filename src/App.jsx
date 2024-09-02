import { useState } from 'react';
import { AmountForm } from './components/AmountForm';
import { Categories } from './components/Categories';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PeopleForm } from './components/PeopleForm';
import { Total } from './components/Total';
import { Scroll } from './components/Scroll';

const initialSubcategory = {
  id: '',
  title: '',
  img: null,
  amount: '',
};

const initialSubtotals = [];

export default function App() {
  const [subcategory, setSubcategory] = useState(initialSubcategory);
  const [amountForm, setAmountForm] = useState('');
  const [peopleForm, setPeopleForm] = useState('');
  const [subtotals, setSubtotals] = useState(initialSubtotals);
  const [people, setPeople] = useState(1);
  const [total, setTotal] = useState('');
  const [each, setEach] = useState('');

  const handleSubcategory = (title, img, amount) => {
    const section = document.getElementById('amount-form-section');
    const input = document.getElementById('amount-form-input');

    setSubcategory({
      ...subcategory,
      title: title,
      img: img,
      amount: amount,
    });

    section?.scrollIntoView({ behavior: 'smooth' });
    input?.focus({ preventScroll: true });
  };

  const handleAmountForm = (e) => {
    setAmountForm(e.target.value);
  };

  const handleAmountSubmit = (e) => {
    e.preventDefault();
    const id = crypto.randomUUID();

    if (!amountForm) {
      alert("This field can't be empty!");
      return;
    } else if (subcategory === initialSubcategory) {
      alert('Please select a category.');
      return;
    }

    setSubtotals([...subtotals, { ...subcategory, amount: amountForm, id: id }]);

    handleReset();
  };

  const handlePeopleForm = (e) => {
    setPeopleForm(e.target.value);
  };

  const handlePeopleSubmit = (e) => {
    e.preventDefault();
    setPeople(peopleForm);
    setPeopleForm('');
  };

  const deleteSubtotal = (id) => {
    let confirmDelete = window.confirm('Delete subtotal?');

    if (confirmDelete) {
      let newSubtotals = subtotals.filter((subtotal) => subtotal.id !== id);
      setSubtotals(newSubtotals);
    }
  };

  const handleReset = () => {
    setAmountForm('');
    setSubcategory(initialSubcategory);
  };

  const calculate = () => {
    const section = document.getElementById('total-section');
    const newSubtotals = subtotals.map((subtotal) => Number(subtotal.amount));
    const newTotal = newSubtotals.reduce((sum, current) => sum + current);
    const newEach = newTotal / parseInt(people);
    setTotal(newTotal);
    setEach(newEach);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const scroll = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='flex flex-col items-center justify-center background text-neutral-50 font-readexPro font-normal'>
      <Header />
      <Categories handleSubcategory={handleSubcategory} />
      <AmountForm
        amountForm={amountForm}
        handleAmountForm={handleAmountForm}
        handleAmountSubmit={handleAmountSubmit}
        subcategory={subcategory.title}
      />
      <PeopleForm
        peopleForm={peopleForm}
        handlePeopleForm={handlePeopleForm}
        handlePeopleSubmit={handlePeopleSubmit}
      />
      <Total
        total={total}
        each={each}
        subtotals={subtotals}
        initialSubtotals={initialSubtotals}
        deleteSubtotal={deleteSubtotal}
        calculate={calculate}
      />
      <Scroll scroll={scroll} />
      <Footer />
    </div>
  );
}
