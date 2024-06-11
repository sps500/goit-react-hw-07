import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialContacts = [
  { id: nanoid(), name: "Rosie Simpson", number: "459-12-56" },
  { id: nanoid(), name: "Hermione Kline", number: "443-89-12" },
  { id: nanoid(), name: "Eden Clements", number: "645-17-79" },
  { id: nanoid(), name: "Annie Copeland", number: "227-91-26" },
];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: initialContacts,
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const selectContacts = (state) => state.contacts.items;

export default contactsSlice.reducer;
