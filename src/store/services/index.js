import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fakeFetch } from "./fakeFetch";

export const getServices = createAsyncThunk(
  "services/getServices",
  async (_, { getState, rejectWithValue }) => {
    try {
      const response = await fakeFetch();
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
  entities: [],
  loading: false,
  error: null,
};

export const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: {
    [getServices.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getServices.fulfilled]: (state, action) => {
      state.loading = false;
      state.entities = action.payload;
    },
    [getServices.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const servicesActions = servicesSlice.actions;
