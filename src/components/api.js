import axios from 'axios';
// https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=bc8e4f8ef35238fae81789cd185c5d63
// https://api.themoviedb.org/3/movie/popular

axios.defaults.baseURL = `https://api.themoviedb.org/3/movie/popular`;

export const fetchPopularMovies = async () => {
  const response = await axios.get('', {
    params: {
      api_key: 'bc8e4f8ef35238fae81789cd185c5d63',
      page: 1,
    },
  });

  return response.data;
};

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzhlNGY4ZWYzNTIzOGZhZTgxNzg5Y2QxODVjNWQ2MyIsInN1YiI6IjYzYjU5ZTgzMWQxYmY0MDA3ZGJlNmY2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BsoVCmt8VFL4zuujWHZOeT98RgVtMjvuEmlNKHRXVl4',
//   },
// };

// fetch(
//   'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
//   options
// )
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
