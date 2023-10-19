import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import { NewContact, Input, ErrCaption, Button } from './Contactform.styled';

const uniqueId = {
  name: nanoid(),
  number: nanoid(),
};

const initialValue = {
  name: '',
  number: '',
};

const phoneRegExp = '^[+]?[0-9\\.\\-\\s]{7,10}$';

const schema = Yup.object({
  name: Yup.string().required(),
  number: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required(),
});

export const ContactForm = ({ handleSubmit }) => {
  const onSubmit = (values, { resetForm }) => {
    handleSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
      <NewContact>
        <label htmlFor={uniqueId.name}>Name</label>
        <Input
          type="text"
          id={uniqueId.name}
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ErrCaption name="name" component={'div'} />
        <label htmlFor={uniqueId.number}>Number</label>
        <Input
          type="tel"
          id={uniqueId.number}
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <ErrCaption name="number" component={'div'} />
        <Button type="submit">Add new contact</Button>
      </NewContact>
    </Formik>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
