import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovieCasts } from './api';
import err from '../img/err.jpg';

export const Cast = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCasts = async () => {
      try {
        const response = await FetchMovieCasts(movieId);
        console.log(response.cast);
        const castsArr = response.cast.map(item => ({
          id: item.id,
          photo: item.profile_path,
          name: item.original_name,
        }));
        setCasts(castsArr);
      } catch {
        console.error();
      }
    };
    getCasts();
  }, [movieId]);

  console.log('casts', casts);
  return (
    <ul>
      {casts.length > 0 &&
        casts.map(cast => (
          <li key={cast.id}>
            <img
              src={
                cast.photo
                  ? `https://image.tmdb.org/t/p/w500${cast.photo}`
                  : err
              }
              alt={cast.name}
              width="150"
            />
            <h3>{cast.name}</h3>
          </li>
        ))}
    </ul>
  );
};
