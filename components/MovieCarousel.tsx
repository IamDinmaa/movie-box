"use client";

import React, { useState } from "react";
import { BiSolidFilm } from "react-icons/bi";
import { BsBookmarkFill } from "react-icons/bs";
function MovieCarousel({ heading }: { heading: string }) {
  const url =
    "https://firebasestorage.googleapis.com/v0/b/entertainment-web-app-7cfba.appspot.com/o/nature.png?alt=media&token=7b8ae250-8b49-4953-9fb2-fc26c6cb9986&_gl=1*140inkf*_ga*NTg2NzA4MzY0LjE2ODkyNDg3NDQ.*_ga_CW55HF8NVT*MTY5ODA5NDA2MS43LjEuMTY5ODA5NDE2MC40OC4wLjA.";
  const [img, setImg] = useState([url, url, url, url, url]);
  return (
    <div>
      {heading && <h2 className="ml-4">{heading}</h2>}

      <div
        className="flex scrollable-container mr-8"
        style={{
          overflowX: "scroll",
          width: "90vw",
        }}>
        {img &&
          img.map((url) => (
            <div className="ml-4 mr-2 text-slate-100 relative">
              <div
                style={{ width: "400px", height: "200px" }}
                className="rounded-lg">
                <img src={url} className="rounded-lg w-full  h-full" />
              </div>

              <div className="absolute top-2 right-4 p-2 rounded-full bg-slate-500">
                <BsBookmarkFill
                  style={{ width: "20px" }}
                  className=" text-slate-100"
                />
              </div>
              <div className="absolute bottom-0 left-4">
                <div className="flex">
                  <p className="mr-6">year</p>
                  <p className="relative mr-6">
                    <BiSolidFilm
                      style={{ width: "20px" }}
                      className="mt-4 w-12 text-gray-400 absolute right-10 bottom-1"
                    />
                    Movie
                  </p>
                  <p className="mr-6">age</p>
                </div>
                <h2 className="mb-2">Title</h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default MovieCarousel;
