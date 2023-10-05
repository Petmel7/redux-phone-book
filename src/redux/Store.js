import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from '../components/ContactsSlice';
import { filterReducer } from '../components/FilterSlice';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    }
})