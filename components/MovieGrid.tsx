"use client";
import { useState } from "react";

import { BiSolidFilm } from "react-icons/bi";
import { BsBookmarkFill } from "react-icons/bs";

function MovieGrid({ heading }: { heading: string }): React.JSX.Element {
  const url =
    "https://firebasestorage.googleapis.com/v0/b/entertainment-web-app-7cfba.appspot.com/o/nature.png?alt=media&token=7b8ae250-8b49-4953-9fb2-fc26c6cb9986&_gl=1*140inkf*_ga*NTg2NzA4MzY0LjE2ODkyNDg3NDQ.*_ga_CW55HF8NVT*MTY5ODA5NDA2MS43LjEuMTY5ODA5NDE2MC40OC4wLjA.";
  const [videos, setVideos] = useState([
    url,
    url,
    url,
    url,
    url,
    url,
    url,
    url,
    url,
    url,
  ]);
  return (
    <div>
      {heading && <h2 className="ml-4">{heading}</h2>}

      <div
        className="flex flex-wrap scrollable-container"
        style={{
          height: "auto",
        }}>
        {videos &&
          videos.map((url) => (
            <div className="ml-4 mr-2  text-slate-100 w-40  lg:w-64 rounded-lg mb-2">
              <div className="relative">
                <img src={url} className="h-20 lg:h-56 rounded-lg " />
                <div className="absolute left-28 lg:left-48 top-2 p-2 rounded-full bg-slate-500">
                  <BsBookmarkFill
                    style={{ width: "20px" }}
                    className=" text-slate-100"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <p className="mr-6">year</p>
                  <p className="relative">
                    <BiSolidFilm
                      style={{ width: "20px " }}
                      className="mt-4 ml-0  lg:w-12 text-gray-400 absolute right-12 bottom-1"
                    />
                    Movie
                  </p>
                  <p className="ml-2">age</p>
                </div>
                <h2 className="mb-2 ">Title</h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default MovieGrid;
