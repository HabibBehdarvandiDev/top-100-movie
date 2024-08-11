import MovieCard from "./Card";

const dumy = {
  rank: 1,
  title: "The Shawshank Redemption",
  description:
    "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  image:
    "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
  big_image:
    "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@",
  genre: ["Drama"],
  thumbnail:
    "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
  rating: "9.3",
  id: "top1",
  year: 1994,
  imdbid: "tt0111161",
  imdb_link: "https://www.imdb.com/title/tt0111161",
};

const Movies = ({ searchValue }: { searchValue: string }) => {
  return (
    <div className="flex flex-col items-center space-x-3 space-y-5  sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      <MovieCard
        title={dumy.title}
        thumbnail={dumy.big_image}
        imdb_link={dumy.imdb_link}
        rank={dumy.rank}
        rating={dumy.rating}
        year={dumy.year}
      />
    </div>
  );
};

export default Movies;
