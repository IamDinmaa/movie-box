"use client";
import MovieDetails from "@/components/MovieDetails";
import Scaffold from "@/components/Scaffold";
import authenticate_user from "@/utils/AuthenticateUser";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function movieDetails(): React.JSX.Element {
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (authenticate_user(router)) {
      setAuthenticated(true);
    }
  }, []);
  return !authenticated ? (
    <></>
  ) : (
    <Scaffold removeSearch = {true}   >
      <>
        <MovieDetails />
      </>
    </Scaffold>
  );
}
