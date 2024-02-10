import Search from "@/components/Search";
import Nav from "@/components/Nav";
import { scaffoldType } from "@/app/types";

export default function Scaffold({
  children,
  removeSearch,
}: scaffoldType): React.JSX.Element {
  return (
    <div className="grid grid-rows-[7%_90%] lg:grid-cols-[7%_90%] gap-2">
      <div>
        <Nav />
      </div>
      <div>
        {!removeSearch && <Search />}
        <div
          className={` ${
            !removeSearch ? "mt-16" : "mt-3"
          } scrollable-container`}
          style={{
            overflowY: "scroll",
            height: "100vh",
          }}>
          {children}
        </div>
      </div>
    </div>
  );
}
