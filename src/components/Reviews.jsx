import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovieRewievs } from './Api';

const Reviews = () => {
  const [rewiews, setRewievs] = useState([]);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  useEffect(() => {
    const getRewievs = async () => {
      setLoading(true);

      try {
        const response = await FetchMovieRewievs(movieId);
        const reviewsArr = response.results.map(item => ({
          id: item.id,
          author: item.author,
          content: item.content,
        }));
        setRewievs(reviewsArr);
      } catch {
        console.error();
      } finally {
        setLoading(false);
      }
    };
    getRewievs();
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {rewiews.length > 0 ? (
            rewiews.map(review => (
              <li key={review.id}>
                <h3>{review.author}:</h3>
                <span>{review.content}</span>
              </li>
            ))
          ) : (
            <div>Nothing...</div>
          )}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
