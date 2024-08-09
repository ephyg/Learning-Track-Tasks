import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./slice/api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { dataSlice, getData } from "./slice/dataSlice";

export const store = configureStore({
  reducer: {
    product_: dataSlice.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
setupListeners(store.dispatch);
