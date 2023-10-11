import { useDispatch } from "react-redux";
import { addContact } from '../../redux/FetchContacts';
import { useState } from 'react';
import css from './ContactForm.module.css';

const ContactForm = ({ contactsState }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();

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
        <form className={css.form}
            onSubmit={handleSubmit}>
        
            <label >
                Name
                <input
                    className={css.formInput}
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
                    className={css.formInput}
                    type="tel"
                    name="number"
                    value={number}
                    required
                    onChange={foneBookChange}
                />
            </label>

            <div className={css.formButton}>
                <button className={css.formButtonSubmit}
                    type="submit">Add Contacts</button>
            </div>
        </form>
    );
};

export default ContactForm;