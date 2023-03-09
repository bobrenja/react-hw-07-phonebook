import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  addContactMoscapi,
  deleteContactMoscapi,
  getContacts,
} from 'helpers/get-mockapi';

export const fetchContact = createAsyncThunk(
  'contacts/fetchContact',
  async function (_, { rejectWithValue }) {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addItemContact = createAsyncThunk(
  'contacts/addItemContact',
  async function ({ name, number }, { dispatch, rejectWithValue }) {
    try {
      const data = await addContactMoscapi({ name, number });

      dispatch(addContact(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/removeContact',
  async function (id, { dispatch, rejectWithValue }) {
    try {
      await deleteContactMoscapi(id);

      dispatch(removeContact(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
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
        contacts.items.find(e => name.toLowerCase() === e.name.toLowerCase())
      );
      if (isName) {
        return Notify.info(`${name} is contact book`);
      }
      Notify.success(`${name} add contact book`);

      contacts.items.push({ ...actions.payload });
    },
    removeContact(state, actions) {
      Notify.success('Delete contact');

      state.contacts.items = state.contacts.items.filter(
        ({ id }) => id !== actions.payload
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
    [fetchContact.rejected]: (state, actions) => {
      state.contacts.error = actions.payload;
    },
  },
});

export const { addContact, removeContact, filterContact } =
  phoneBooksSlice.actions;
export default phoneBooksSlice.reducer;
