import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovieRewievs } from './api';
export const Reviews = () => {
  const [rewievs, setRewievs] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const getRewievs = async () => {
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
      }
    };
    getRewievs();
  }, [movieId]);

  // console.log('rewievs', rewievs);
  return (
    // const { id, author, content } = rewievs;
    <div>
      <h2>Reviews</h2>
      {rewievs.length ? (
        <ul>
          {rewievs.map(review => (
            <li key={rewievs.id}>
              <h3>{review.author}:</h3>
              <span>{review.content}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div>Nothing...</div>
      )}
    </div>
  );
};
