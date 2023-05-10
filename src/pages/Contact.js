import Contacts from '../components/contacts/ContactsList';
import UserForm from '../components/userForm/UserForm';
import { Filter } from '../components/filter/Filter';
import { Section } from '../components/section/Section';
import { Loader } from '../components/loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';

const Contact = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section>
        <h1>Phonebook</h1>
        <UserForm />

        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <Loader heightLoader={35} widthLoader={35} />}
        <Contacts />
      </Section>
    </>
  );
};

export default Contact;
