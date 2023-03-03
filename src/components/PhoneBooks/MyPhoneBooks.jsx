import MyForm from './Form/MyForm';
import Contacts from './Contacts/Contacts';
import Search from './Search/Search';
import { useSelector } from 'react-redux';

const MyPhoneBooksForm = () => {
  const contacts = useSelector(state => state.phoneBooks.contacts);

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
