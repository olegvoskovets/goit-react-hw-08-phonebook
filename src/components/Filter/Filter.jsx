import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(getFilter(e.target.value));
  };

  return (
    <div className={css.filter}>
      <span>Find contacts by name</span>
      <input
        type="text"
        name="filter"
        className={css.input}
        onChange={handleFilter}
        value={filter}
      />
    </div>
  );
};
