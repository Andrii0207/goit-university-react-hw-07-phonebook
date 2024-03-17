import { FaDeleteLeft } from 'react-icons/fa6';
import {
  ButtonDelete,
  ContactItem,
  ContactListWrapper,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilterValue } from '../../redux/selectors';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from '../../redux/operations';
import Notificalion from 'components/Notification/Notification';

export default function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filterStateValue = useSelector(selectFilterValue);

  const visibleContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filterStateValue.toLowerCase().trim())
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const reverseList = [...visibleContacts].reverse();

  return (
    <ContactListWrapper>
      {reverseList.length ? (
        reverseList.map(({ id, name, number }) => (
          <ContactItem key={id}>
            {name}: {number}
            <ButtonDelete
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              <FaDeleteLeft
                style={{
                  width: '20px',
                  height: '20px',
                }}
              />
            </ButtonDelete>
          </ContactItem>
        ))
      ) : (
        <Notificalion />
      )}
    </ContactListWrapper>
  );
}
