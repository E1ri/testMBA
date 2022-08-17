import { configureStore } from '@reduxjs/toolkit'
import { itemsApi } from '../services/itemsApi'

export const store = configureStore({
  reducer: {
    [itemsApi.reducerPath]: itemsApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(itemsApi.middleware),
})
