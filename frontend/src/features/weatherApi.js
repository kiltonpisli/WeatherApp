import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY = "61d78934f9af1172aafa64be8e1e8bf8";
const BASE_URL = "https://pro.openweathermap.org/data/2.5";

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getYourCurrentWeather: builder.query({
      query: ({lat, lon}) => `/weather?appid=${API_KEY}&lat=${lat}&lon=${lon}&units=metric`,
    }),
    getSearchCurrentWeather: builder.query({
      query: (city) => `/weather?appid=${API_KEY}&q=${city}&units=metric`,
    }),
    getYourNext7DaysWeather: builder.query({
      query: ({lat, lon}) => `/daily?appid=${API_KEY}&lat=${lat}&lon=${lon}&units=metric&cnt=8`,
    }),
    getSearchNext7DaysWeather: builder.query({
      query: (city) => `/daily?appid=${API_KEY}&q=${city}&units=metric&cnt=8`,
    }),
  }),
})

export const { useGetYourCurrentWeatherQuery, useGetSearchCurrentWeatherQuery, useGetYourNext7DaysWeatherQuery, useGetSearchNext7DaysWeatherQuery } = weatherApi;