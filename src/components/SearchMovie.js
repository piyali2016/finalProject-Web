import React from 'react'
import { useParams } from 'react-router-dom';
import MovieCard from './common/MovieCard'
import {useGetMovieSearchQuery} from '../features/ApiSlice'
import { Grid, Container } from '@mui/material';
export default function SearchMovie() {
    let { q } = useParams();
    console.log(q);
    const { data:items, error, isLoading } = useGetMovieSearchQuery({q});
  return (
    <Container>
      <div><h1>Search Page</h1></div>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    {isLoading && <div>Loading...</div>}
    {error && <div>{error}</div>}
    {items?.length===0 && <h2>No Movie found with Search Query "{q}"</h2>}
    {items?.map((item, index) => (<Grid item xs={4}  key={item.id}><MovieCard movie={item} /></Grid> ))}
    </Grid>
    </Container>
  )
}
