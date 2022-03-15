import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY = "61d78934f9af1172aafa64be8e1e8bf8";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getYourCurrentWeather: builder.query({
      query: ({lat, lon}) => `/weather?appid=${API_KEY}&units=metric&lat=${lat}&lon=${lon}`,
    }),
    
  }),
})

export const { useGetYourCurrentWeatherQuery } = weatherApi;