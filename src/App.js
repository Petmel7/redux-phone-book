
import React, { useState, useEffect } from "react";
import shortid from "shortid";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import './components/Contacts.css';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from './components/ContactsSlice.js';
import { setFilter } from "./components/FilterSlice";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) {
      dispatch(addContact(storedContacts));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const submitPhoneBook = event => {
    event.preventDefault();

    const existingContact = contacts.find(contact => contact.name === name);
    if (existingContact) {
      alert(`This name ${name} already exists`);
      return;
    }

    const contact = { 
      id: shortid.generate(),
      name: name,
      number: number,
      completed: false
    };

    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };

  const foneBookChange = event => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "number") {
      setNumber(value);
    }
  };

  const filterChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  const getVisibleСontacts = () => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const deleteContacts = contactId => {
    dispatch(deleteContact(contactId))
  };

  const visibleСontactsFilter = getVisibleСontacts();

  return (
    <div className="App Container">
      <ContactForm
        name={name}
        number={number}
        foneBookChange={foneBookChange}
        submitPhoneBook={submitPhoneBook}
      />

      <h2>Contacts</h2>
      <h3>Find contacts by name</h3>

      <label className="Search">
        Search
        <input type="text"
          value={filter}
          onChange={filterChange} />
      </label>

      <ContactList
        contacts={visibleСontactsFilter}
        deleteContacts={deleteContacts}
      />
    </div>
  );
};

export default App;