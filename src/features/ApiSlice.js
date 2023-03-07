import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const movieTicketApi = createApi({
  reducerPath: 'movieTicketApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getCarasoulMovie: builder.query({
        query: () => 'movies?slide=true',
    }),
    getRecomendedMoviw: builder.query({
      query: () => `movies?recomended=true`,
  }),
  getMovieSearch: builder.query({
    query: ({q}) => `movies?q=${q}`,
}),
getLatestMovie: builder.query({
  query: () => `movies?latest=true`,
}),
getUpcomingMovie: builder.query({
  query: () => `movies?upcoming=true`,
}),
getMovieDetails: builder.query({
  query: ({id}) => `movies?id=${id}`,
}),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCarasoulMovieQuery,useGetRecomendedMoviwQuery,
  useGetMovieSearchQuery,useGetLatestMovieQuery,
  useGetUpcomingMovieQuery,useGetMovieDetailsQuery } = movieTicketApi