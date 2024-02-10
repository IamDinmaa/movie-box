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
      <div className=" h-[96vh]  overflow-hiddden">
        <div
          className="w-full h-[60%]   flex justify-center"
          onClick={handleVideoClick}>
          <video src={url} className="w-[100%] h-[100%] " />
        </div>
        <div className="flex justify-between py-2 h-[40%] ">
          <div className=" w-[100vw]">
            <h1 className="font-extrabold text-2xl mx-6 mb-5  ">
              Stranger Things
            </h1>
            <div className="whitespace-normal h-[70%]  overflow-y-scroll  scrollable-container mx-6">
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi delectus quasi a praesentium reprehenderit doloribus
                solut. mollitia maxime veritatis volupt, esse veniam totam.
                consequuntur ad magnam, earum libero maiores voluptatemk. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
                delectus quasi a praesentium reprehenderit doloribus soluta
                mollitia maxime veritatis voluptate, esse veniam totam
                consequuntur ad magnam, earum libero maiores voluptatemk. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
                delectus quasi a praesentium reprehenderit doloribus soluta
                mollitia maxime veritatis voluptate, esse veniam totam
                consequuntur ad magnam, earum libero maiores voluptatemk. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
                delectus quasi a praesentium reprehenderit doloribus soluta
                mollitia maxime veritatis voluptate, esse veniam totam
                consequuntur ad magnam, earum libero maiores voluptatemk
              </p>
            </div>
          </div>
          <div className=" p-4  overflow-y-scroll scrollable-container">
            <p className="m-2 text-slate-500">
              Year: <span className="text-white">2019</span>
            </p>
            <p className="m-2 text-slate-500">
              Genre: <span className="text-white">Movie</span>
            </p>
            <p className="m-2 text-slate-500">
              Casts:{" "}
              <span className="text-white">
                Sadie Sink, Gaten Matarazzo, Natalia Dyer, Caleb McLaughlin,
                Finn Wolfhard, Noah Schnapp, Millie Bobby Brown
              </span>
            </p>
          </div>
        </div>
        {/* <p>{BsBookmarkFill}</p> */}
      </div>
    </>
  );
}

export default MovieDetails;
