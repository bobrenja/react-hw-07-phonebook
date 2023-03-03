import { createSlice } from '@reduxjs/toolkit';

const phoneBooksSlice = createSlice({
  name: 'phoneBooks',
  initialState: {
    contacts: [],
    filters: '',
  },
  reducers: {
    addContact(state, actions) {
      const { contacts } = state;
      const { name } = actions.payload;
      const isName = Boolean(
        contacts.find(e => name.toLowerCase() === e.name.toLowerCase())
      );
      if (isName) {
        return alert(`${name} is contact book`);
      }

      const id = new Date().toISOString();
      contacts.push({ ...actions.payload, id });
    },
    removeContact(state, actions) {
      state.contacts = state.contacts.filter(
        ({ id }) => id !== actions.payload.id
      );
    },
    filterContact(state, actions) {
      state.filters = actions.payload;
    },
  },
});

export const { addContact, removeContact, filterContact } =
  phoneBooksSlice.actions;
export default phoneBooksSlice.reducer;
