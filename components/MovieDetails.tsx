"use client";
import React from "react";
import { videoType } from "@/types";

function MovieDetails({ videos }: { videos: videoType }) {
  return (
    <>
      <div className=" h-[96vh]  overflow-hiddden ">
        <div className="w-full h-[40vh] lg:h-[56.5vh] flex justify-center">
          <div id={String(videos.id)}>
            <video src={videos.src} className="w-[100%] h-[100%]" controls />
            <div className="flex justify-between py-2 h-[56vh] lg:h-[38.4vh]">
              <div className=" w-[100%]">
                <h1 className="font-bold lg:font-extrabold text-2xl mb-5 ">
                  {videos.name}
                </h1>
                <div className="flex justify-between overflow-y-scroll scrollable-container lg:hidden">
                  <p className="m-2 text-slate-500 text-xm">
                    Year: <span className="text-white text-xm">2019</span>
                  </p>
                  <p className="m-2 text-slate-500  text-xm">
                    Genre: <span className="text-white text-xm">Movie</span>
                  </p>
                  <p className="m-2 text-slate-500 text-xm">
                    Videographer:
                    <span className="text-white text-xm">{videos.cast}</span>
                  </p>
                </div>
                <div className="whitespace-normal h-[45%] lg:h-[70%] overflow-y-scroll  scrollable-container">
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eligendi delectus quasi a praesentium reprehenderit
                    doloribus solut. mollitia maxime veritatis volupt, esse
                    veniam totam. consequuntur ad magnam, earum libero maiores
                    voluptatemk. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Eligendi delectus quasi a praesentium
                    reprehenderit doloribus soluta mollitia maxime veritatis
                    voluptate, esse veniam totam consequuntur ad magnam, earum
                    libero maiores voluptatemk. Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Eligendi delectus quasi a
                    praesentium reprehenderit doloribus soluta mollitia maxime
                    veritatis voluptate, esse veniam totam consequuntur ad
                    magnam, earum libero maiores voluptatemk. Lorem ipsum dolor
                    sit amet consectetur, adipisicing elit. Eligendi delectus
                    quasi a praesentium reprehenderit doloribus soluta mollitia
                    maxime veritatis voluptate, esse veniam totam consequuntur
                    ad magnam, earum libero maiores voluptatemk
                  </p>
                </div>
              </div>
              <div className=" p-4  overflow-y-scroll scrollable-container hidden lg:block">
                <p className="m-2 text-slate-500">
                  Year: <span className="text-white">2019</span>
                </p>
                <p className="m-2 text-slate-500">
                  Genre: <span className="text-white">Movie</span>
                </p>
                <p className="m-2 text-slate-500">
                  Videographer:
                  <span className="text-white">{videos.cast}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <p>{BsBookmarkFill}</p> */}
      </div>
    </>
  );
}

export default MovieDetails;
