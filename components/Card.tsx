import { MovieCart } from "@/types";
import { Card, CardBody, Divider } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import RankingIcon from "./icons/RankingIcon";
import Calendar01Icon from "./icons/Calendar01Icon";
import StarIcon from "./icons/StarIcon";

const MovieCard = ({
  rank,
  title,
  thumbnail,
  rating,
  year,
  imdb_link,
}: MovieCart) => {
  return (
    <Link
      href={`/movie/${rank}`}
      className="text-center flex flex-col w-[345px] relative"
    >
      <Card className="space-y-3">
        <Image
          alt={`${title}_image`}
          src={thumbnail}
          width={345}
          height={50}
          className="rounded-xl shadow-sm"
        />
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="bg-primary/90 rounded-full w-[35px] h-[35px] text-white flex items-center justify-center align-middle gap-2 text-lg absolute top-0 left-2">
          {rank}
        </div>

        <div className="flex flex-row items-center justify-center align-middle gap-3 w-full pb-2">
          <span className="flex items-center justify-center align-middle gap-2 text-sm text-zinc-400 dark:text-zinc-50">
            {year}
          </span>
          <span className="flex items-center justify-center align-middle gap-2 text-sm text-zinc-400 dark:text-zinc-50">
            {rating}
          </span>
        </div>
      </Card>
    </Link>
  );
};

export default MovieCard;
