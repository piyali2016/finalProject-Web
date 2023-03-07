import React from 'react'
import MovieCard from './common/MovieCard'
import {useGetRecomendedMoviwQuery} from '../features/ApiSlice'
import { Grid } from '@mui/material';
export default function RecomendedMovies() {
    const { data:items, error, isLoading } = useGetRecomendedMoviwQuery();
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  
    {isLoading && <div>Loading...</div>}
    {error && <div>{error}</div>}
    {items?.map((item, index) => (<Grid item xs={4}  key={item.id}><MovieCard movie={item} /></Grid> ))}
    </Grid>
  )
}
