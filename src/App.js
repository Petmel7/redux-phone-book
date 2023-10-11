import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "./redux/FilterSlice";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import './components/Contacts.css';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const contactsState = useSelector(state => state.contacts.items);
  const filterState = useSelector(state => state.filter);
  
  const getVisibleСontacts = () => {
    const normalizeFilter = filterState.toLowerCase();
      
      return contactsState.filter(contact =>
        contact.name.toLowerCase().includes(normalizeFilter)
      )
  };
  const visibleСontactsFilter = getVisibleСontacts();

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