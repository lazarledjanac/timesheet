import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const countryApiHeaders = {
  "X-RapidAPI-Key": "e2685d08d9msh237ed081fdee5e3p1cab4djsndf01bbc9a1d0",
  "X-RapidAPI-Host": "countries-cities.p.rapidapi.com",
};
const baseUrl = "'https://countries-cities.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: countryApiHeaders });
export const countryApi = createApi({
  reducerPath: "countryApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => createRequest(`/location/country/list`),
    }),
  }),
});
export const { useGetCountriesQuery } = countryApi;
