import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./features/bookSlice";

export const store = configureStore({
  reducer: {
    bookSlice: bookSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
