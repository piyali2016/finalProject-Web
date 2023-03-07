import React from 'react'
import MovieCard from './common/MovieCard'
import {useGetLatestMovieQuery} from '../features/ApiSlice'
import { Grid, Container } from '@mui/material';
export default function LatestMovies() {
    const { data:items, error, isLoading } = useGetLatestMovieQuery();
  return (
    <Container>
      <div><h1>Latest Movie Page</h1></div>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    {isLoading && <div>Loading...</div>}
    {error && <div>{error}</div>}
    {items?.map((item, index) => (<Grid item xs={4}  key={item.id}><MovieCard movie={item} /></Grid> ))}
    </Grid>
    </Container>
  )
}
