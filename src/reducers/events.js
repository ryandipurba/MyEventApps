/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  hasErrors: false,
  events: [
    {
      key: '1',
      name: 'Hari raya Idul Fitri',
      date_time: '2020-10-03T00:00+07:00',
    },
    {
      key: '2',
      name: 'Masuk Sekolah',
      date_time: '2020-06-29T00:00+07:00',
    },
  ],
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, { payload }) => {
      state.events = payload;
    },
  },
});

export const { setEvents } = eventsSlice.actions;

export const eventsSelector = state => state.events;

export default eventsSlice.reducer;
