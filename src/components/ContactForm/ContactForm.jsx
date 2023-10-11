import { useDispatch } from "react-redux";
import { addContact } from '../../redux/FetchContacts';
import { useState } from 'react';
import css from './ContactForm.module.css';
import toast from 'react-hot-toast';

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
            toast(<p className={css.toast}>
                {`This name ${name} already exists`}
            </p>);
            setName('');
            setNumber('');
            return;
        }

        dispatch(addContact({ name, number }));
        setName('');
        setNumber('');
    };

    return (
        <form className={css.form}
            onSubmit={handleSubmit}>
            
            <div className={css.formImputs}>
                <label className={css.formLabel}>
                    <p>Name</p>
                    <input
                        className={css.formInput}
                        type="text"
                        name="name"
                        value={name}
                        required
                        onChange={foneBookChange}
                    />
                </label>

                <label className={css.formLabel}>
                    <p>Number</p>
                    <input
                        className={css.formInput}
                        type="tel"
                        name="number"
                        value={number}
                        required
                        onChange={foneBookChange}
                    />
                </label>
            </div>

            <div className={css.formButton}>
                <button className={css.formButtonSubmit}
                    type="submit">Add Contacts</button>
            </div>
        </form>
    );
};

export default ContactForm;