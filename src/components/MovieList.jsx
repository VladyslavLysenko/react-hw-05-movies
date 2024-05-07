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
    // <div>
    //   <ul>
    //     {movies.map(movie => (
    //       <li key={movie.id}>{movie.title}</li>
    //     ))}
    //   </ul>
    // </div>
    <div>
      {movies.map(movie => (
        <div key={movie.id}>
          <Link to={`${movie.id}`}>{movie.title}</Link>
        </div>
      ))}
    </div>
  );
};

// <Container>
//   {products.map(product => (
//     <CardWrapper key={product.id}>
//       <Link to={`${product.id}`}>
//         <img src="https://via.placeholder.com/200x100" alt="" />
//         <ProductName>{product.name}</ProductName>
//       </Link>
//     </CardWrapper>
//   ))}
// </Container>;
