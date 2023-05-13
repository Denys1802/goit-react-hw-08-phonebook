import { useDispatch, useSelector } from 'react-redux';
import { Input } from './Filter.styled';
import { setFilteredContact } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = event => {
    dispatch(setFilteredContact(event.target.value.toLowerCase()));
  };
  return (
    <Input
      type="text"
      placeholder="Find contacts by name"
      value={filter}
      onChange={handleChange}
    />
  );
};
