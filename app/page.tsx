import Search from "@/components/Search";
import Nav from "@/components/Nav";
import MovieGrid from "@/components/MovieGrid";
import MovieCarousel from "@/components/MovieCarousel";
import SignUp from "@/components/SignUp";
import SignIn from "@/components/Login";

export default function Home(): React.JSX.Element {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2% 90%",
        columnGap: "7%",
      }}>
      <div>
        <Nav />
      </div>
      <div style={{ border: "2px solid red" }}>
        {/* <Search /> */}
        {/* <MovieGrid /> 
                {/* <SignUp /> */}
        {/* <SignIn /> */}
        <MovieCarousel />
      </div>
    </div>
  );
}
