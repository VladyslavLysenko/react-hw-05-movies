import styled from 'styled-components';
// import { useParams, useSearchParams } from 'react-router-dom';

import { NavLink, Outlet } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const MovieDetails = () => {
  //   const { productId } = useParams();
    // const [searchParams] = useSearchParams();
    //   const name = searchParams.get('name');
    //   const color = searchParams.get('color');
    //   const maxPrice = searchParams.get('maxPrice');

  return (
    <div>
      <nav>
        <StyledLink to="/movies/:movieId/cast">Cast</StyledLink>
        <StyledLink to="/movies/:movieId/reviews">Reviews</StyledLink>
      </nav>
      <h2>MovieDetails</h2>
      <button>Get Back</button>
      <div>
        <image>IMAGE HERE</image>
      </div>

      <h3>Movies TITLE HERE</h3>
      <p>User Score: HERE</p>
      <h3>Overwiew</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
        doloribus quisquam nisi, eum soluta adipisci nobis voluptates! Eius ea,
        aliquam pariatur dolor in a mollitia repudiandae, dolore qui porro
        facere!
      </p>
      <h3>Genres</h3>
      <ul>
        <li>Drama</li>
        <li>Triller</li>
        <li>Fun</li>
      </ul>
      <Outlet />
    </div>
  );
};
