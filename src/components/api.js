import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/`;
export const FetchPopularMovies = async () => {
  const response = await axios.get('3/movie/popular', {
    params: {
      api_key: 'bc8e4f8ef35238fae81789cd185c5d63',
      page: 1,
    },
  });

  return response.data;
};

export const FetchMovieDetails = async movieId => {
  const response = await axios.get(`3/movie/${movieId}`, {
    params: {
      api_key: 'bc8e4f8ef35238fae81789cd185c5d63',
      language: 'en-US',
    },
  });

  return response.data;
};
export const FetchMovieRewievs = async movieId => {
  const response = await axios.get(`3/movie/${movieId}/reviews`, {
    params: {
      api_key: 'bc8e4f8ef35238fae81789cd185c5d63',
    },
  });

  return response.data;
};

// 
//api.themoviedb.org/3/movie/{movie_id}/credits

 export const FetchMovieCasts = async movieId => {
  const response = await axios.get(`3/movie/${movieId}/credits`, {
    params: {
      api_key: 'bc8e4f8ef35238fae81789cd185c5d63',
      language: 'en-US',
    },
  });

  return response.data;
};
