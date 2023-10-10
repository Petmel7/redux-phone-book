import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from '../../redux/FetchContacts';


const ContactList = ({ visibleСontactsFilter }) => {
    const dispatch = useDispatch();

    return (
        <ul className="name-number">
            {
                visibleСontactsFilter.map((contact) => (
                    <li key={contact.id}>
                        <p>{contact.name}</p>
                        <p>{contact.number}</p>
            
                        <div>
                            <button onClick={() =>
                                dispatch(deleteContact(contact.id))}>
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
        </ul>
    );
};

export default ContactList;