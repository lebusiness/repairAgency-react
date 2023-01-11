import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const getService = createAsyncThunk(
//   "cart/getService",
//   async ({ id }, { getState, rejectWithValue }) => {
//     try {
//       const response = await fakeFetch(id);
//       return response;
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

const initialState = {
  entities: [],
  entitiesHash: {},
  loading: false,
  error: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      if (state.entitiesHash[item.service]) return;

      state.entitiesHash[item.service] = true;
      state.entities.push({
        ...action.payload,
      });
    },
    removeFromCart: (state, action) => {
      const {service} = action.payload;
      delete state.entitiesHash[service];
      state.entities = state.entities.filter(item => item.service !== service);
    },
  },
  // extraReducers: {
  //   [getService.pending]: (state) => {
  //     state.loading = true;
  //     state.error = null;
  //   },
  //   [getService.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     state.entities = action.payload;
  //   },
  //   [getService.rejected]: (state, action) => {
  //     state.loading = true;
  //     state.error = action.payload;
  //   },
  // },
});

export const cartActions = cartSlice.actions;
