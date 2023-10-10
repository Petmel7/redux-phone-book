import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from '../../redux/FetchContacts';
import { useEffect } from "react";
import { fetchContacts } from '../../redux/FetchContacts';
import useContactLoading from '../../ownHook/useContactLoading';

const ContactList = ({ visibleСontactsFilter }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <ul className="name-number">
            {visibleСontactsFilter.map((contact) => (
                <li key={contact.id}>
                    <p>{contact.name}</p>
                    <p>{contact.number}</p>
                    <div>
                        <button onClick={() => dispatch(deleteContact(contact.id))}>
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;




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
