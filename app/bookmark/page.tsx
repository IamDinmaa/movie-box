"use client";
import MovieGrid from "@/components/MovieGrid";

import Scaffold from "@/components/Scaffold";
import authenticate_user from "@/utils/AuthenticateUser";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home(): React.JSX.Element {
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
    <Scaffold>
      <>
        <MovieGrid heading={"BookMarked Movies"} />
        <MovieGrid heading={"BookMarked Tv Series"} />
      </>
    </Scaffold>
  );
}
