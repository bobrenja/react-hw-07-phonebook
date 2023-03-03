import { useState } from 'react';
import styles from './addContactForm.module.scss';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/phoneBooksSlice';

const MyForm = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({ name: '', number: '' });

  const nameId = nanoid();
  const contactId = nanoid();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ ...state }));
    setState({ name: '', number: '' });
  };

  const handleEnterInput = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor={nameId}>
        Name
      </label>
      <input
        id={nameId}
        value={state.name}
        onChange={handleEnterInput}
        type="text"
        name="name"
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={styles.label} htmlFor={contactId}>
        Contact
      </label>
      <input
        placeholder="Number tel"
        id={contactId}
        value={state.number}
        onChange={handleEnterInput}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button className={styles.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default MyForm;
