import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem';
import {} from './ContactList.styled';

export const ContactList = ({ contacts, onChange }) => {
  return (
    <ul>
      {contacts.map(el => (
        <li key={el.id}>
          <ContactItem userData={el} handleChange={onChange} />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onChange: PropTypes.func.isRequired,
};
