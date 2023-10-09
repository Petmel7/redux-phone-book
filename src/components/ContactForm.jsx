import { useDispatch } from "react-redux";
import { addContact } from '../redux/FetchContacts';

function ContactForm({ name, number, foneBookChange }) {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;

    dispatch(addContact({ name, number }));
    
    event.target.reset();
  }

  return (
    <form className="form-group" onSubmit={handleSubmit}>
        
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          required
          onChange={foneBookChange}
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          required
          onChange={foneBookChange}
        />
      </label>

      <div className="Add-Contacts">
        <button type="submit">Add Contacts</button>
      </div>
    </form>
  );
};

export default ContactForm;
