import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './features/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import MovieDetails from './components/MovieDetails';
import LatestMovies from './components/LatestMovies';
import UpcomingMovies from './components/UpcomingMovies';
import NearByEvents from './components/NearByEvents';
import SearchMovie from './components/SearchMovie';
import BookingForm from './components/booking';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Layout/>}>
           <Route index element={<App/>}/>
           <Route path='details/:id' element={<MovieDetails/>}></Route>
           <Route path='latest-movies' element={<LatestMovies/>}></Route>
           <Route path='upcoming-movies' element={<UpcomingMovies/>}></Route>
           <Route path='nearby-events' element={<NearByEvents/>}></Route>
           <Route path='search/:q' element={<SearchMovie/>}></Route>
           <Route path='booking' element={<BookingForm/>}></Route>
          <Route path='*' element={<NotFound/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
