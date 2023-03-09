import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getContacts } from 'helpers/get-mockapi';

export const fetchContact = createAsyncThunk(
  'contacts/fetchContact',
  async function () {
    const data = await getContacts();
    return data;
  }
);

const phoneBooksSlice = createSlice({
  name: 'phoneBooks',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
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
  extraReducers: {
    [fetchContact.pending]: (state, actions) => {
      state.contacts.isLoading = true;
      state.contacts.error = null;
    },
    [fetchContact.fulfilled]: (state, actions) => {
      state.contacts.items = actions.payload;
      state.contacts.isLoading = false;
    },
    [fetchContact.rejected]: (state, actions) => {},
  },
});

export const { addContact, removeContact, filterContact } =
  phoneBooksSlice.actions;
export default phoneBooksSlice.reducer;
