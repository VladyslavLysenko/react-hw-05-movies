import axios from 'axios';
// https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=bc8e4f8ef35238fae81789cd185c5d63
// https://api.themoviedb.org/3/movie/popular

axios.defaults.baseURL = `https://api.themoviedb.org/`;
//api.themoviedb.org
export const fetchPopularMovies = async () => {
  const response = await axios.get('3/movie/popular', {
    params: {
      api_key: 'bc8e4f8ef35238fae81789cd185c5d63',
      page: 1,
    },
  });

  return response.data;
};
// /movies/get-movie-details
//api.themoviedb.org/3/movie/843527?api_key=bc8e4f8ef35238fae81789cd185c5d63

export const FetchMovieDetails = async movieId => {
  const response = await axios.get(`3/movie/${movieId}`,
    {
      params: {
        api_key: 'bc8e4f8ef35238fae81789cd185c5d63',
        language: 'en-US',
      },
    }
  );

  return response.data;
};

// export const baseUrl = 'https://api.themoviedb.org';
// export const key = 'bc8e4f8ef35238fae81789cd185c5d63';
// export const type = 'week';
// export async function FetchTrending(baseUrl, key, type) {
//   const response = await fetch(
//     `${baseUrl}/3/trending/movie/${type}?api_key=${key}`
//   );
//   if (response.ok) {
//     return response.json();
//   }
// }

// async function FetchMovieDetails(baseUrl, id, key) {
//   const response = await fetch(
//     `${baseUrl}/3/movie/${id}?api_key=${key}&language=en-US`
//   );
//   if (response.ok) {
//     return response.json();
//   }
// }
