
import React, { useState, useEffect } from "react";
import shortid from "shortid";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import './components/Contacts.css';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { addContact } from './redux/ContactsSlice';
import { setFilter } from "./redux/FilterSlice";
// import axios from "axios";
// import { FetchContacts } from './components/fetchContacts';

function App() {
  const dispatch = useDispatch();
  const contactsState = useSelector(state => state.contacts.items);
  // console.log('contactsState', contactsState)
  const filterState = useSelector(state => state.filter);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

// ===========================================
//     // Отримати дані з Local Storage під час завантаження компонента
//   useEffect(() => {
//   const storedContacts = JSON.parse(localStorage.getItem("items")) ?? [];
//   if (Array.isArray(storedContacts)) {
//     storedContacts.forEach((contact) => dispatch(addContact(contact)));
//   }
// }, [dispatch]);

//   useEffect(() => {
//     // Зберегти дані в Local Storage кожного разу, коли `contactsState` оновлюється
//     localStorage.setItem("items", JSON.stringify(contactsState));
  //   }, [contactsState]);
  

// ===========================================
  // const submitPhoneBook = event => {
  //   event.preventDefault();

  //   const existingContact = contactsState.find(contact => contact.name === name);
  //   if (existingContact) {
  //     alert(`This name ${name} already exists`);
  //     return;
  //   }

  //   const contact = { 
  //     id: shortid.generate(),
  //     name: name,
  //     number: number,
  //     completed: false
  //   };

  //   dispatch(addContact(contact));
  //   setName('');
  //   setNumber('');
  // };

// ===========================================
  const foneBookChange = event => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "number") {
      setNumber(value);
    }
  };

  // ===========================================
  // const getVisibleСontacts = () => {
  //   const normalizeFilter = filterState.toLowerCase();
      
  //     return contactsState.filter(contact =>
  //       contact.name.toLowerCase().includes(normalizeFilter)
  //     )
  // };

  const getVisibleСontacts = () => {
  const normalizeFilter = filterState.toLowerCase();

  return contactsState.filter(contact => {
    // Перевірка, чи існує contact.name і чи він є рядком, перед викликом toLowerCase()
    if (contact.name && typeof contact.name === "string") {
      return contact.name.toLowerCase().includes(normalizeFilter);
    }
    return false;
  });
};

  console.log('contactsState filter;', contactsState);

  const visibleСontactsFilter = getVisibleСontacts();

  console.log('visibleСontactsFilter!!!!', visibleСontactsFilter)

// ===========================================
  return (
    <div className="App Container">
      <ContactForm
        name={name}
        number={number}
        foneBookChange={foneBookChange}
        // submitPhoneBook={submitPhoneBook}
        contactsState={contactsState}
      />

      <h2>Contacts</h2>
      <h3>Find contacts by name</h3>

      <label className="Search">
        Search
        <input type="text"
          value={filterState}
          onChange={e => dispatch(setFilter(e.target.value))}
        />
      </label>

      <ContactList
        visibleСontactsFilter={visibleСontactsFilter} />
    </div>
  );
};

export default App;