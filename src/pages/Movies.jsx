import toast from 'react-hot-toast';
import { FetchSearchMovies } from 'components/Api';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MovieList } from 'components/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query) {
      const getMovies = async () => {
        setLoading(true);
        try {
          const response = await FetchSearchMovies(query);
          const moviesArr = response.results.map(item => ({
            id: item.id,
            title: item.original_title,
          }));
          setMovies([...moviesArr]);
          setLoading(false);
        } catch (error) {
          toast('Error fetching movies');
        }
      };
      getMovies();
    }
  }, [query]);

  const handleSubmitForm = e => {
    e.preventDefault();
    let movieTitle = e.target.q.value;
    if (movieTitle.trim() === '') {
      toast('Please enter Movie Title here');
      return;
    }
    setSearchParams({ query: movieTitle });
  };

  return (
    <div>
      <h2>Movies</h2>
      <form onSubmit={handleSubmitForm} method="get">
        <button type="submit">
          <span>Search movies</span>
        </button>
        <input name="q" />
      </form>
      {loading ? null : <MovieList movies={movies} />}
    </div>
  );
};

export default Movies;
