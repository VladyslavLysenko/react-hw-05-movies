import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Reviews from './Reviews';
import Cast from './Cast';
import SharedLayout from './SharedLayout';
// import Home from '../pages/Home';
// import Movies from '../pages/Movies';
// import MovieDetails from '../pages/MovieDetails';

// const Reviews = lazy(() => import('./Reviews'));
// const Cast = lazy(() => import('./Cast'));
// const SharedLayout = lazy(() => import('./SharedLayout'));
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
