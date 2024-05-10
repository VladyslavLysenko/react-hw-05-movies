import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  // console.log(location);

  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <div>{movie.title}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};
