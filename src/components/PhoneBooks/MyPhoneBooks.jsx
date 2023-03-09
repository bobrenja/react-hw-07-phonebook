import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MyForm from './Form/MyForm';
import Contacts from './Contacts/Contacts';
import Search from './Search/Search';
import { fetchContact } from 'redux/phoneBooksSlice';

const MyPhoneBooksForm = () => {
  const dispatch =useDispatch()
  const contacts = useSelector(state => state.phoneBooks.contacts.items);

  useEffect(()=>{
    dispatch(fetchContact())
  },[dispatch])

  const isContact = Boolean(contacts.length);

  return (
    <>
      <h1>Phonebook</h1>
      <MyForm />
      {isContact && <Search />}
      {isContact && <Contacts />}
    </>
  );
};

export default MyPhoneBooksForm;
