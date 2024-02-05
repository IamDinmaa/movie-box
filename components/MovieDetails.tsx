"use client";
import React from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { useState } from "react";

function MovieDetails() {
  const url =
    "https://firebasestorage.googleapis.com/v0/b/entertainment-web-app-7cfba.appspot.com/o/useEffect%20video.mp4?alt=media&token=22a6d359-14fc-4b92-93c4-4b4e8e3e20a4";
  const [click, clicked] = useState(false);
  const [videoWidth, setVideoWidth] = useState("400px");
  function handleVideoClick(): void {
    clicked(true);
    setVideoWidth("800px");
  }
  return (
    <>
      <div className="h-[800px]" style={{ overflow: "scroll" }}>
        <div className="h-[500px]" onClick={handleVideoClick}>
          <video src={url} className="w-full h-[500px]" />
        </div>
        <div className="w-[95%]">
          <div className="flex mt-8 ml-20 mr-20">
            <div onClick={handleVideoClick}>
              <video src={url} className="w-56 ml-10" />
            </div>
            <div className="ml-5 w-[70%]">
              <div className="flex justify-between  ">
                <h1 className="font-extrabold text-2xl">Stranger Things</h1>
                <p className="text-xl">2019</p>
                <p className="text-xl">Movie</p>
              </div>

              <p className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi delectus quasi a praesentium reprehenderit doloribus
                soluta mollitia maxime veritatis voluptate, esse veniam totam
                consequuntur ad magnam, earum libero maiores voluptatem!
              </p>
            </div>
            {/* <p>{BsBookmarkFill}</p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
