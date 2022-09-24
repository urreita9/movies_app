import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBNowPlaying} from '../interfaces/movieInterface';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesNowPlaying, setMoviesNowPlaying] = useState<Movie[]>([]);

  const getMovies = async () => {
    const {data} = await movieDB.get<MovieDBNowPlaying>('/now_playing');

    setMoviesNowPlaying(data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    moviesNowPlaying,
    isLoading,
  };
};
