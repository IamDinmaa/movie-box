import MovieGrid from "@/components/MovieGrid";

import Scaffold from "@/components/Scaffold";
export default function Home(): React.JSX.Element {
  return (
    <Scaffold>
      <>
        <MovieGrid heading={"BookMarked Movies"} />
        <MovieGrid heading={"BookMarked Tv Series"} />
      </>
    </Scaffold>
  );
}
