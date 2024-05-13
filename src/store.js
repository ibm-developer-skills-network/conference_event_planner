// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';

export default configureStore({
  reducer: {
    venue: venueReducer,
  },
});
