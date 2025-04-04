import { configureStore } from "@reduxjs/toolkit";
import { serversApiSlice } from "./servers/serversApiSlice";

export const store = configureStore({
  reducer: {
    [serversApiSlice.reducerPath]: serversApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serversApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
