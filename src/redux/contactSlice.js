import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], filter: '' },
  reducers: {
    addContact(state, { payload }) {
      state.items.push(payload);
    },

    deleteContact(state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload);
    },
    contactFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, contactFilter } =
  contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
