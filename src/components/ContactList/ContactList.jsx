
import { useDispatch } from "react-redux";
import { deleteContact } from '../../redux/FetchContacts';
import { useEffect } from "react";
import { fetchContacts } from '../../redux/FetchContacts';
import css from './ContactList.module.css'

const ContactList = ({ visibleСontactsFilter }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <ul className={css.contacts}>
            {visibleСontactsFilter.map((contact) => (
                <li className={css.contact} key={contact.id}>
                    <p className={css.contactName}>{contact.name}</p>
                    <p className={css.contactNumber}>{contact.number}</p>

                    <button className={css.contactButton} onClick={() => dispatch(deleteContact(contact.id))}>
                        Delete
                    </button>
                    
                </li>
            ))}
        </ul>
    );
};

export default ContactList;




// import useContactLoading from '../../ownHook/useContactLoading';

// const ContactList = ({ visibleСontactsFilter }) => {
//     const dispatch = useDispatch();

//         useEffect(() => {
//         dispatch(fetchContacts());
//     }, [dispatch]);

//     return (
//         <ul className="name-number">
//             {visibleСontactsFilter.map((contact) => (
//                 <ContactItem key={contact.id} contact={contact} deleteContact={deleteContact} />
//             ))}
//         </ul>
//     );
// };

// const ContactItem = ({ contact, deleteContact }) => {
//     const isLoading = useContactLoading(contact.id);
//     const dispatch = useDispatch();

//     return (
//         <li>
//             <p>{contact.name}</p>
//             <p>{contact.number}</p>
//             <div>
//                 {isLoading ? (
//                     <p>Loading...</p>
//                 ) : (
//                     <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
//                 )}
//             </div>
//         </li>
//     );
// };

// export default ContactList;
