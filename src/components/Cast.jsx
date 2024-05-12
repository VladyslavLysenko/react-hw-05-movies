import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovieCasts } from './Api';
import err from '../img/err.jpg';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const getCasts = async () => {
      setLoading(true);

      try {
        const response = await FetchMovieCasts(movieId);
        const castsArr = response.cast.map(item => ({
          id: item.id,
          photo: item.profile_path,
          name: item.original_name,
        }));
        setCasts(castsArr);
      } catch {
        console.error();
      } finally {
        setLoading(false);
      }
    };
    getCasts();
  }, [movieId]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
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
      )}
    </div>
  );
};

export default Cast;
