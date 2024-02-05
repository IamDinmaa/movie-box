import MovieDetails from "@/components/MovieDetails";
import Scaffold from "@/components/Scaffold";
import React from "react";

export default function movieDetails(): React.JSX.Element {
  return (
    <Scaffold>
      <>
        <MovieDetails />
      </>
    </Scaffold>
  );
}
