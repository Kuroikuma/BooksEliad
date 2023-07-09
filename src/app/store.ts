import { configureStore } from "@reduxjs/toolkit";
import { LibrarySlice } from "./slice/librarySlice";



export const store = configureStore({
  reducer: {
    library: LibrarySlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
