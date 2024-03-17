import { IoPersonAdd } from 'react-icons/io5';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Button, Form, Input, LabelName } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';
import { toast } from 'react-toastify';

export default function ContactForm() {
  const initialState = { name: '', number: '' };
  const [state, setState] = useState(initialState);

  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const contactsRedux = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const onSubmitForm = e => {
    e.preventDefault();

    const form = e.target;
    const { name, number } = state;

    contactsRedux.find(
      item => item.name.toLowerCase().trim() === state.name.toLowerCase().trim()
    )
      ? toast.info(`You have got "${name}" name`, {
          autoClose: 2000,
          theme: 'colored',
        })
      : dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <LabelName htmlFor={nameInputId}>Name</LabelName>
      <Input
        id={nameInputId}
        type="text"
        name="name"
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <LabelName htmlFor={numberInputId}>Number</LabelName>
      <Input
        id={numberInputId}
        type="tel"
        name="number"
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Button type="submit">
        Add contact
        <IoPersonAdd style={{ paddingLeft: '10px' }} />
      </Button>
    </Form>
  );
}
