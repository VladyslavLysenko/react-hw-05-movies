import { MovieList } from 'components/MovieList';
import { useEffect, useState } from 'react';
import { FetchPopularMovies } from '../components/Api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const moviesArr = [];
    const getPopularMovies = async () => {
      const popularMovies = await FetchPopularMovies();
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
      <h2>Trending today</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
