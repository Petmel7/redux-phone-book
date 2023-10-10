import { useDispatch } from "react-redux";
import { addContact } from '../../redux/FetchContacts';
import { useState } from 'react';

function ContactForm({ contactsState }) {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const foneBookChange = event => {
        const { name, value } = event.target;
        if (name === "name") {
            setName(value);
        } else if (name === "number") {
            setNumber(value);
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
    
        const name = event.target.elements.name.value;
        const number = event.target.elements.number.value;

        const existingContact = contactsState.find(contact => contact.name === name);
        if (existingContact) {
            alert(`This name ${name} already exists`);
            return;
        }

        dispatch(addContact({ name, number }));
        setName('');
        setNumber('');
    };

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