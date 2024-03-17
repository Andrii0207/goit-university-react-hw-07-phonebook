import PropTypes from 'prop-types';
import { Message } from './Notification.styled';

export default function Notificalion() {
  return <Message>There are no any contacts</Message>;
}

Notificalion.propTypes = {
  message: PropTypes.string,
};
