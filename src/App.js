
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import './components/Contacts.css';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "./redux/FilterSlice";
// import { useEffect } from "react";
// import { addContact } from "./redux/FetchContacts";

function App() {
  const dispatch = useDispatch();
  const contactsState = useSelector(state => state.contacts.items);
  const filterState = useSelector(state => state.filter);

// ===========================================
//   useEffect(() => {
//   const storedContacts = JSON.parse(localStorage.getItem("items")) ?? [];
//   if (Array.isArray(storedContacts)) {
//     storedContacts.forEach((contact) => dispatch(addContact(contact)));
//   }
// }, [dispatch]);

//   useEffect(() => {
//     localStorage.setItem("items", JSON.stringify(contactsState));
//     }, [contactsState]);
  
  // ===========================================
  const getVisibleСontacts = () => {
    const normalizeFilter = filterState.toLowerCase();
      
      return contactsState.filter(contact =>
        contact.name.toLowerCase().includes(normalizeFilter)
      )
  };
  const visibleСontactsFilter = getVisibleСontacts();

// ===========================================
  return (
    <div className="App Container">
      <ContactForm contactsState={contactsState} />

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