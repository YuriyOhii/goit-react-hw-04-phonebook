import PropTypes from 'prop-types';
import { TelNumber, DelButton } from './ContactItem.styled';
export const ContactItem = ({ userData, handleChange }) => (
  <p>
    {userData.name} : <TelNumber>{userData.number}</TelNumber>
    <DelButton type="button" value={userData.id} onClick={handleChange}>
      Delete
    </DelButton>
  </p>
);

ContactItem.propTypes = {
  userData: PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  handleChange: PropTypes.func.isRequired,
};
