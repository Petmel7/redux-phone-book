import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "./redux/FilterSlice";
import { selectContacts, selectFilter } from './redux/Selectors';
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import css from './App.module.css';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const dispatch = useDispatch();

  const contactsState = useSelector(selectContacts);
  const filterState = useSelector(selectFilter);
  
  const getVisibleСontacts = () => {
    const normalizeFilter = filterState.toLowerCase();
      
      return contactsState.filter(contact =>
        contact.name.toLowerCase().includes(normalizeFilter)
      )
  };
  const visibleСontactsFilter = getVisibleСontacts();

  return (
    <div className={css.App}>
      <ContactForm contactsState={contactsState} />
      <div>
        <p className={css.AppContactsName}>Find contacts by name</p>
      </div>

      <label className={css.AppLabelSearch}>
        <input className={css.AppInputSearch}
          type="text"
          placeholder="Search"
          value={filterState}
          onChange={e => dispatch(setFilter(e.target.value))}
        />
      </label>

      <div>
        <p className={css.AppContacts}>Contacts</p>
      </div>

      <ContactList
        visibleСontactsFilter={visibleСontactsFilter} />
      <Toaster />
    </div>
  );
};

export default App;