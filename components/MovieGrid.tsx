"use client";
import { useState } from "react";

import { BiSolidFilm } from "react-icons/bi";
import { BsBookmarkFill } from "react-icons/bs";

function MovieGrid(): React.JSX.Element {
  const url =
    "https://firebasestorage.googleapis.com/v0/b/entertainment-web-app-7cfba.appspot.com/o/useEffect%20video.mp4?alt=media&token=22a6d359-14fc-4b92-93c4-4b4e8e3e20a4&_gl=1*1e4ee5s*_ga*NTg2NzA4MzY0LjE2ODkyNDg3NDQ.*_ga_CW55HF8NVT*MTY5Nzc4MjkwMi40LjEuMTY5Nzc4NTA0MS41OC4wLjA.";
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
    <div
      className="flex flex-wrap scrollable-container mt-16"
      style={{
        height: "88vh",
        overflow: "scroll",
      }}>
      {videos &&
        videos.map((url) => (
          <div className="ml-4 mr-12 text-slate-100 w-56 rounded-lg mb-2 ">
            <div className="relative">
              <video controls className="h-56 rounded-lg">
                <source src={url} type="video" />
              </video>
              <div className="absolute top-2 right-4 p-2 rounded-full bg-slate-500">
                <BsBookmarkFill
                  style={{ width: "20px" }}
                  className=" text-slate-100"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <p>year</p>
                <p className="relative">
                  <BiSolidFilm
                    style={{ width: "20px" }}
                    className="mt-4 w-12 text-gray-400 absolute right-12 bottom-1"
                  />
                  Movie
                </p>
                <p>age</p>
              </div>
              <h2 className="mb-2">Title</h2>
            </div>
          </div>
        ))}
    </div>
  );
}
export default MovieGrid;
