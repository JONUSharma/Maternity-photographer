import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPhotographers = createAsyncThunk(
  'photographers/fetchPhotographers',
  async () => {
    // const response = await axios.get('http://localhost:3001/photographers');
    const response = await axios.get("./Photographer.json");
    return response.data;
  }
);

const photographerSlice = createSlice({
  name: 'photographers',
  initialState: { data: [], loading: false },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotographers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPhotographers.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default photographerSlice.reducer;
    