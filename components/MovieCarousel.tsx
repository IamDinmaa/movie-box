"use client";

import React, { useState } from "react";
import { BiSolidFilm } from "react-icons/bi";
import { BsBookmarkFill } from "react-icons/bs";
function MovieCarousel() {
  const url =
    "https://firebasestorage.googleapis.com/v0/b/entertainment-web-app-7cfba.appspot.com/o/nature.png?alt=media&token=7b8ae250-8b49-4953-9fb2-fc26c6cb9986&_gl=1*140inkf*_ga*NTg2NzA4MzY0LjE2ODkyNDg3NDQ.*_ga_CW55HF8NVT*MTY5ODA5NDA2MS43LjEuMTY5ODA5NDE2MC40OC4wLjA.";
  const [img, setImg] = useState([url, url, url, url, url]);
  return (
    <div
      className="flex  mt-16"
      style={{
        overflowX: "scroll",
        border: "2px solid pink",
      }}>
      {img &&
        img.map((url) => (
          <div className="ml-4 text-slate-100 relative">
            <img src={url} className="rounded-lg" />

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
  );
}
export default MovieCarousel;
