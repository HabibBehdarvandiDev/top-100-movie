
import React from "react";

interface MovieDetailsProps {
  params: {
    rankId: string;
  };
}

const MoviePage = ({ params }: MovieDetailsProps) => {
    const { rankId } = params;
  return <div>MoviePage {rankId}</div>;
};

export default MoviePage;
