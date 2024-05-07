import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchPopularMovies } from './api';

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const moviesArr = [];
    const getPopularMovies = async () => {
      const popularMovies = await fetchPopularMovies();
      popularMovies.results.map(item => {
        moviesArr.push({
          id: item.id,
          title: item.original_title,
        });
        return setMovies([...moviesArr]);
      });
    };
    getPopularMovies();
  }, []);

  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
        </div>
      ))}
    </div>
  );
};
