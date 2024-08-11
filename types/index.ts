type MovieCart = {
  rank: number;
  title: string;
  thumbnail: string;
  rating: string;
  year: number;
  imdb_link: string;
};

type Movie = {
  rank: number;
  title: string;
  description: string;
  image: string;
  big_image: string;
  genre: string[];
  thumbnail: string;
  rating: string;
  id: string;
  year: number;
  imdbid: string;
  imdb_link: string;
};

export type { MovieCart, Movie };
