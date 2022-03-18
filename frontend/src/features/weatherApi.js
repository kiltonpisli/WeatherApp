import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = "https://pro.openweathermap.org/data/2.5";

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getYourCurrentWeather: builder.query({
      query: ({lat, lon}) => `/weather?appid=${process.env.REACT_APP_WEATHER_API_KEY}&lat=${lat}&lon=${lon}&units=metric`,
    }),
    getSearchCurrentWeather: builder.query({
      query: (city) => `/weather?appid=&q=${city}&units=metric`,
    }),
    getYourNext7DaysWeather: builder.query({
      query: ({lat, lon}) => `/daily?appid=&lat=${lat}&lon=${lon}&units=metric&cnt=8`,
    }),
    getSearchNext7DaysWeather: builder.query({
      query: (city) => `/daily?appid=&q=${city}&units=metric&cnt=8`,
    }),
  }),
})

export const { useGetYourCurrentWeatherQuery, useGetSearchCurrentWeatherQuery, useGetYourNext7DaysWeatherQuery, useGetSearchNext7DaysWeatherQuery } = weatherApi;