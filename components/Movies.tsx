"use client";
import { useEffect, useState } from "react";
import MovieCard from "./Card";
import { Movie } from "@/types";
import axios from "axios";

const Movies = ({ searchValue }: { searchValue: string }) => {
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://imdb-top-100-movies.p.rapidapi.com/",
          {
            headers: {
              "x-rapidapi-key": "ad7a1bb18cmshf62764ce6d53b7ep13126cjsn7968737efc4e",
              "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
            },
          }
        );

        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }

        const data: Movie[] = response.data;
        setMoviesList(data);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchMovies();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!moviesList.length) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center space-x-3 space-y-5  sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {moviesList.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          thumbnail={movie.image}
          imdb_link={movie.imdb_link}
          rank={movie.rank}
          rating={movie.rating}
          year={movie.year}
        />
      ))}
    </div>
  );
};

export default Movies;
