"use client";
import { Photo } from "pexels";
import MovieGrid from "@/components/MovieGrid";
import MovieCarousel from "@/components/MovieCarousel";
import Scaffold from "@/components/Scaffold";
import authenticate_user from "@/utils/AuthenticateUser";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import fetch_photos from "@/utils/FetchPhotos";

export default function Home(): React.JSX.Element {
  const [authenticated, setAuthenticated] = useState(false);
  const [gridPhotos, setGridPhotos] = useState<Photo[]>([]);
  const [carouselPhotos, setCarouselPhotos] = useState<Photo[]>([]);
  const router = useRouter();
  const state_prototype = {
    "btn-home": true,
    "btn-film": false,
    "btn-television": false,
    "btn-bookmark": false,
  };
  useEffect(() => {
    if (authenticate_user(router)) {
      setAuthenticated(true);
      (async () => {
        const getGridPhotos = await fetch_photos();
        const getCarouselPhotos = await fetch_photos("Ocean", 5);
        setGridPhotos(getGridPhotos);
        setCarouselPhotos(getCarouselPhotos);
      })();
    }
  }, []);

  return !authenticated &&
    carouselPhotos.length == 0 &&
    gridPhotos.length == 0 ? (
    <></>
  ) : (
    <Scaffold activeIcon={state_prototype}>
      <div className="mb-24">
        <MovieCarousel heading={"Trending"} photos={carouselPhotos} />
        <MovieGrid heading={"Recommended For You"} photos={gridPhotos} />
      </div>
    </Scaffold>
  );
}
