import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import MyForm from './Form/MyForm';
import Contacts from './Contacts/Contacts';
import Search from './Search/Search';
import { fetchContact } from 'redux/phoneBooksSlice';

const MyPhoneBooksForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phoneBooks.contacts);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  const isContact = Boolean(contacts.items.length);

  return (
    <>
      <h1>Phonebook</h1>
      <MyForm />
      {contacts.error && Notify.failure(contacts.error)}
      {isContact && <Search />}
      {isContact && <Contacts />}
    </>
  );
};

export default MyPhoneBooksForm;
