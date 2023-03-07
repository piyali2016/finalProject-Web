import React from 'react'
import { useParams } from 'react-router-dom';
import {useGetMovieDetailsQuery} from '../features/ApiSlice'
import { Grid, Container,Box,Typography,Button } from '@mui/material';
import { Link } from 'react-router-dom';
export default function MovieDetails() {
    let { id } = useParams();
    const { data:movie, error, isLoading } = useGetMovieDetailsQuery({id});
    
  return (
    <Container>
      <div><h1>Movie details  Page</h1></div>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    {isLoading && <div>Loading...</div>}
    {error && <div>{error}</div>}
    {movie && <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                <Box
                component="img"
                sx={{
                  height: 300,
                  display: 'block',
                  width:'100%',
                  overflow: 'hidden'
                }}
                src={process.env.PUBLIC_URL+`/assets/${movie[0].image}`}
                alt={movie[0].title}
              />
  </Grid>
  <Grid item xs={6}>
  <Typography fontSize={40} color='#fcba03'>{movie[0].title}</Typography>
  </Grid>
  <Grid item xs={6}>
  <Typography fontSize={40} color='#fcba03'>Realease Date:  {movie[0].releaseDate}</Typography>
  </Grid>
  <Grid item xs={6}>
  <Typography fontSize={40} color='#fcba03'>Duration:{movie[0].duration}</Typography>
  </Grid>
  <Grid item xs={6}>
  <Typography fontSize={40} color='#fcba03'>Rating:{movie[0].rating}</Typography>
  </Grid>
  <Grid item xs={6}>
  <Typography fontSize={40} color='#fcba03'> <Link to={'booking'} > <Button size="large" variant='contained' color="primary">
        Book
      </Button></Link></Typography>
  </Grid>
  
</Grid>}
    </Grid>
    </Container>
  )
}

