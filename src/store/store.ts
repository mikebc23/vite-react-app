import { configureStore, createSlice } from '@reduxjs/toolkit';

// Step 1: Create a slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Export actions so components can dispatch them
export const { increment, decrement } = counterSlice.actions;

// Step 2: Create the Redux store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// Export the store to be used in your app
export default store;

// Step 3: Define types for TypeScript usage
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
