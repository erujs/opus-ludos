import { configureStore } from '@reduxjs/toolkit';
import initialReducer from '../features/initial/initialSlice';

const store = configureStore({
  reducer: {
    initial: initialReducer,
    // Add other reducers here
  },
});

export default store;
