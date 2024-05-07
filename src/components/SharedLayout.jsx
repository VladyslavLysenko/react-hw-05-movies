import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchPopularMovies } from './api';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
export const SharedLayout = () => {
  const [moviesTitle, setMoviesTitle] = useState([]);

  useEffect(() => {
    const moviesTitleArr = [];
    if (moviesTitleArr.length === 0) {
      const getPopularMovies = async () => {
        const popularMovies = await fetchPopularMovies();
        popularMovies.results.map(item => {
          moviesTitleArr.push({
            id: item.id,
            title: item.original_title,
          });
          setMoviesTitle([...moviesTitleArr]);
        });
      };
      getPopularMovies();
    }
  }, []);

  return (
    <div>
      <header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
          <StyledLink to="/movies/:movieId">MovieDetails</StyledLink>
        </nav>
      </header>
      <ul>
        <li></li>
      </ul>
      <Outlet />
    </div>
  );
};
