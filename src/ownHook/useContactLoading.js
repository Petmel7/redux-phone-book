import { useSelector } from 'react-redux';

const useContactLoading = (contactId) => {
    const contact = useSelector((state) =>
        state.contacts.items.find((c) => c.id === contactId)
    );
    return contact ? contact.isLoading : false;
};

export default useContactLoading;
