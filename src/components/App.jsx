import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { nanoid } from 'nanoid';

const initContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) return JSON.parse(savedContacts);
  return [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
};

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(initContacts());

  useEffect(
    () => localStorage.setItem('contacts', JSON.stringify(contacts)),
    [contacts]
  );

  const handleSubmit = values => {
    if (checkContactName(values))
      return alert(`${values.name} already is in the PhoneBook`);
    setContacts(prevContacts => [...prevContacts, { id: nanoid(), ...values }]);
  };

  const checkContactName = values => {
    const normalizedName = values.name.toLowerCase();
    return contacts.find(({ name }) => name.toLowerCase() === normalizedName);
  };

  const getFilteredContacts = () => {
    const normalizedValue = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedValue)
    );
  };

  const handleChange = ({ target }) => {
    setFilter(target.value);
  };

  const deleteContact = ({ target }) => {
    setContacts(prevState => prevState.filter(({ id }) => id !== target.value));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} handleChange={handleChange} />
      <ContactList contacts={getFilteredContacts()} onChange={deleteContact} />
    </>
  );
};
