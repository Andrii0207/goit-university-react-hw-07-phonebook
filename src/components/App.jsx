import { FaAddressBook } from 'react-icons/fa6';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { ContactListTitle, Title, Wrapper } from './App.styled';

export function App() {
  return (
    <Wrapper>
      <Title>
        Phonebook
        <FaAddressBook />
      </Title>
      <ContactForm />

      <ContactListTitle>Contacts</ContactListTitle>
      <Filter />
      <>
        <ContactList />
      </>
      <ToastContainer />
    </Wrapper>
  );
}
