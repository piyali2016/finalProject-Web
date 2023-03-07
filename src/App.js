import { Container } from '@mui/material';
import './App.css';
import Carasoul from './components/common/Carasoul';
import RecomendedMovies from './components/RecomendedMovies';

function App() {
  return (
    <Container>
    <Carasoul/>
    <RecomendedMovies/>
  </Container>
  );
}

export default App;
