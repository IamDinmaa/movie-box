import React from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { PiTelevisionFill } from "react-icons/pi";
import { FaClapperboard } from "react-icons/fa6";
import { BiSolidFilm } from "react-icons/bi";
import { AiOutlineAppstore } from "react-icons/ai";
function Nav(): React.JSX.Element {
  return (
    <div
      style={{ height: "94vh" }}
      className="relative top-5  bg-slate-900 rounded-md mt-0 w-18 ml-4 flex flex-col items-center">
      <FaClapperboard
        style={{ width: "20px" }}
        className="mt-4 mb-4 w-12 text-red-700"
      />
      <AiOutlineAppstore
        style={{ width: "24px" }}
        className="mt-4 w-12 text-slate-50"
      />
      <BiSolidFilm
        style={{ width: "20px" }}
        className="mt-4 w-12 text-gray-400"
      />
      <PiTelevisionFill
        style={{ width: "20px" }}
        className="mt-4 w-12  text-gray-400"
      />
      <BsBookmarkFill
        style={{ width: "20px" }}
        className="mt-4  text-gray-400"
      />
    </div>
  );
}
export default Nav;
