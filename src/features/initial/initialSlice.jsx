import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../axios';

const initialState = {
  status: null,
  games: null,
  genre: null,
  auth: null,
  error: null,
};

export const fetchDataGames = createAsyncThunk(
  'data/fetchDataGames',
  async () => {
    const response = await axios.get('/games');
    return response.data;
  }
);

export const fetchGenre = createAsyncThunk(
  'data/fetchGenre',
  async () => {
    const response = await axios.get('/genres');
    return response.data;
  }
);

const initialSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setError: (state, action) => {
      state.status = action.payload.status;
      state.error = action.payload.statusText;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataGames.fulfilled, (state, action) => {
        state.games = action.payload;
        state.status = 200;
      })
      .addCase(fetchGenre.fulfilled, (state, action) => {
        state.genre = action.payload;
        state.status = 200;
      })
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.status = action.error.status;
          state.error = action.error.statusText;
        }
      );
  },
});

export const { setError } = initialSlice.actions;

export default initialSlice.reducer;
