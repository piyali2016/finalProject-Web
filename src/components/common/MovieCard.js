import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export default function MovieCard(movie) {
   
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <Link to={'details/'+movie.movie.id}>
      <CardMedia
        component="img"
        height="140"
        image={process.env.PUBLIC_URL+`/assets/${movie.movie.image}`}
        alt={movie.movie.title}
      />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {movie.movie.title}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Link to={'booking'} > <Button size="small" variant='contained' color="primary" >
        Book
      </Button></Link>
    </CardActions>
  </Card>
  )
}
