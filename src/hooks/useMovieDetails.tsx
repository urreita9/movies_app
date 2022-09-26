import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Cast, MovieCredits, MovieFull} from '../interfaces/movieInterface';

interface MovieDetails {
  movieFull?: MovieFull;
  cast: Cast[];
  isLoading: boolean;
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    cast: [],
    movieFull: undefined,
  });

  const getMovieDetails = async () => {
    const promiseMovieDetails = movieDB.get<MovieFull>(`/${movieId}`);
    const promiseMovieCredits = movieDB.get<MovieCredits>(
      `/${movieId}/credits`,
    );

    const [movieDetailsResp, movieCreditsResp] = await Promise.all([
      promiseMovieDetails,
      promiseMovieCredits,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetailsResp.data,
      cast: movieCreditsResp.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {...state};
};
