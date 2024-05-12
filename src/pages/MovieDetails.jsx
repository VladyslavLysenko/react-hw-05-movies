import styled from 'styled-components';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';
import { FetchMovieDetails } from 'components/Api';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const MovieDetails = () => {
  const [film, setFilm] = useState({ genres: [] });
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  console.log(location);
  console.log(backLinkLocationRef);

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
      <Link to={backLinkLocationRef.current}>Get Back</Link>
      <h2>MovieDetails</h2>
      <h3>
        {title} (
        {releaseDate
          ? (releaseDate = new Date(releaseDate).getFullYear())
          : (releaseDate = '')}
        )
      </h3>
      <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt="movie" />
      <p>User Score: {Math.ceil(score)}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres:</h3>

      {genres.length ? <p>{genresJoin}</p> : null}

      <nav>
        <StyledLink to="cast">
          <div>Cast</div>
        </StyledLink>
        <StyledLink to="reviews">Reviews</StyledLink>
      </nav>
      <Suspense fallback={<div>...Loading</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
