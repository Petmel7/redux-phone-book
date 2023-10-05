import React from "react";

const ContactList = ({ contacts, DeleteContacts,  }) => (
  <ul className="name-number">
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>{name}:</p>
        <p>{number}</p>
            
        <div>
            <button onClick={() => DeleteContacts(id)}>Delete</button>
        </div>
      </li>
    ))}
  </ul>
);

export default ContactList;
