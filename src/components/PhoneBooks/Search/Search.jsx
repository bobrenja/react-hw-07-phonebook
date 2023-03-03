import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/phoneBooksSlice';
import style from './Search.module.scss';

const Search = () => {
  const dispatch = useDispatch();
  const handleEnterInput = ({ target }) => {
    dispatch(filterContact(target.value));
  };
  return (
    <div className={style.filter}>
      <label className={style.label}>Search contact</label>
      <input
        type="text"
        placeholder="Search contact"
        name="filter"
        onChange={handleEnterInput}
      />
    </div>
  );
};

export default Search;
