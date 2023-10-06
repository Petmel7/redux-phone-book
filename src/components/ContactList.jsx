import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from './ContactsSlice';


const ContactList = ({ visibleСontactsFilter }) => {
  console.log('visibleСontactsFilter', visibleСontactsFilter)
  const dispatch = useDispatch();
  
  return (
    <ul className="name-number">
      {
        visibleСontactsFilter.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{number}</p>
            
          <div>
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
