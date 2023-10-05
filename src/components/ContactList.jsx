import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from './ContactsSlice';


const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  
  <ul className="name-number">
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>{name}:</p>
        <p>{number}</p>
            
        <div>
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </div>
      </li>
    ))}
  </ul>
};

export default ContactList;
