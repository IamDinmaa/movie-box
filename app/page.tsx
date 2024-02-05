import MovieGrid from "@/components/MovieGrid";
import MovieCarousel from "@/components/MovieCarousel";
import Scaffold from "@/components/Scaffold";

export default function Home(): React.JSX.Element {
  return (
    <Scaffold>
      <>
        <MovieCarousel heading={"Trending"} />
        <MovieGrid heading={"Recommended For You"} />
      </>
    </Scaffold>
  );
}
