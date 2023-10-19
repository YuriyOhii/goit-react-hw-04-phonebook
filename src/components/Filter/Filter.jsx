import PropTypes from 'prop-types';
import {Search} from './Filter.styled';

export const Filter = ({ handleChange, value }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <Search type="text" name="filtr" onChange={handleChange} value={value} />
    </>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
