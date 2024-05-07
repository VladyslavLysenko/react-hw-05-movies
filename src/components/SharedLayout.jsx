import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
          <StyledLink to="/movies/:movieId">MovieDetails</StyledLink>
        </nav>
      </header>

      <Outlet />
    </div>
  );
};
