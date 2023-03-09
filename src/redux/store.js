import { configureStore } from '@reduxjs/toolkit';

import phoneBooksSlice from './phoneBooksSlice';

export const store = configureStore({
  reducer: {
    phoneBooks: phoneBooksSlice,
  },
});
