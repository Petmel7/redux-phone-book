
function ContactForm({ name, number, foneBookChange, submitPhoneBook }) {

  return (
    <form className="form-group" onSubmit={submitPhoneBook}>
        
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
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
