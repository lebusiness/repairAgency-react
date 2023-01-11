import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fakeFetch } from "./fakeFetch";

export const getService = createAsyncThunk(
  "services/getService",
  async ({ id }, { getState, rejectWithValue }) => {
    try {
      const response = await fakeFetch(id);
      return response;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const initialState = {
  entitie: {},
  loading: true,
  error: null,
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    clearService: (state) => {
      state.entitie = {};
      state.loading = true;
      state.error = null;
    },
  },
  extraReducers: {
    [getService.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getService.fulfilled]: (state, action) => {
      state.loading = false;
      state.entitie = action.payload;
    },
    [getService.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.payload;
    },
  },
});

export const serviceActions = serviceSlice.actions;
