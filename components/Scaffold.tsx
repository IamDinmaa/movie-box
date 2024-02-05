import Search from "@/components/Search";
import Nav from "@/components/Nav";

export default function Scaffold({
  children,
}: {
  children: React.JSX.Element;
}): React.JSX.Element {
  return (
    <div className="grid grid-rows-[7%_90%] lg:grid-cols-[7%_90%] gap-2">
      <div>
        <Nav />
      </div>
      <div>
        <Search />
        <div
          className="mt-16 scrollable-container"
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
