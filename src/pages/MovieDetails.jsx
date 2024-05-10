import styled from 'styled-components';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FetchMovieDetails } from 'components/api';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const MovieDetails = () => {
  const [film, setFilm] = useState({ genres: [] });
  const { movieId } = useParams();

  useEffect(() => {
    const getMoviesById = async () => {
      try {
        const movieDetails = await FetchMovieDetails(movieId);

        setFilm({
          poster: movieDetails.backdrop_path,
          genres: movieDetails.genres,
          title: movieDetails.original_title,
          overview: movieDetails.overview,
          score: movieDetails.vote_average,
          date: movieDetails.release_date,
        });
      } catch (error) {
        console.error();
      }
    };
    getMoviesById();
  }, [movieId]);

  const { poster, title, overview, score, genres, date } = film;

  let releaseDate = new Date(date);
  let genresJoin = genres.map(item => item.name);
  genresJoin = genresJoin.join(', ');

  return (
    <div>
      <button>Get Back</button>
      <h2>MovieDetails</h2>
      <h3>
        {title}{' '}
        ({releaseDate
          ? (releaseDate = new Date(releaseDate).getFullYear())
          : (releaseDate = '')})
      </h3>
      <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt="movie" />
      <p>User Score: {Math.ceil(score)}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres:</h3>

      {genres.length ? <p>{genresJoin}</p> : null}

      <nav>
        <StyledLink to="cast"><div>Cast</div></StyledLink>
        <StyledLink to="reviews">Reviews</StyledLink>
      </nav>
      <Outlet/>
    </div>
  );
};

export default MovieDetails;
