import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home'
import { Movies } from './Movies';
import { MovieDetails } from './MovieDetails';
import { Reviews } from './Reviews';
import { Cast } from './Cast';
import { SharedLayout } from './SharedLayout';

// bc8e4f8ef35238fae81789cd185c5d63;

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.

// Додай асинхронне завантаження JS-коду для маршрутів застосунку, використовуючи React.lazy() і Suspense.

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
