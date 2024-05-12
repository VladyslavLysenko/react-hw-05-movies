import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>...Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;
