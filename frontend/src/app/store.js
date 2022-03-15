import { configureStore } from '@reduxjs/toolkit'
import { weatherApi } from '../features/weatherApi'
// import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
})