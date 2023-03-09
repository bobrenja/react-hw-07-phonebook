import { useDispatch, useSelector } from 'react-redux';
import style from './Contacts.module.scss';
import { deleteContact } from 'redux/phoneBooksSlice';

const Contacts = () => {
  const dispatch = useDispatch();
  const contactsFilter = useSelector(state => state.phoneBooks.contacts.items);
  const filter = useSelector(state => state.phoneBooks.filters);

  const findContact = () => {
    if (!filter) {
      return contactsFilter;
    }
    const normalaiseLow = filter.toLowerCase();
    const res = contactsFilter.filter(
      ({ name }) => name.toLowerCase().includes(normalaiseLow)
      // ||
      // number.includes(normalaiseLow)
    );
    return res;
  };

  return (
    <div className={style.contact}>
      <h2>Contacts</h2>
      <ol className={style.item}>
        {findContact().map(({ id, name, number }) => (
          <li key={id} className={style.list}>
            <span>
              <b>{name}</b>: {number}
            </span>

            <button
              type="button"
              className={style.btn}
              onClick={() => dispatch(deleteContact(id))}
            >
              X
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Contacts;
