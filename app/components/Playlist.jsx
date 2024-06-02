"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import SoundWave from "./SoundWave";
import { LuDownload, LuMoreVertical } from "react-icons/lu";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import classNames from "classnames";
import Image from "next/image";

const tracks = ["/tracks/music1.mp3", "/tracks/music2.mp3"];
const mediaIcons = {
   play: "/track-play.svg",
   pause: "/track-pause.svg",
};

const Playlist = ({}) => {
   const trackRefs = tracks.map(() => React.createRef());
   const [waveSurferRefs, setWaveSurferRefs] = useState(trackRefs.map((ref) => ref));
   const [isPlaying, setIsPlaying] = useState(Array(tracks.length).fill(false)); // State để theo dõi trạng thái phát của từng bài hát

   const handlePlayPause = useCallback(
      (index, keepPlaying = false) => {
         if (waveSurferRefs[index].current) {
            waveSurferRefs.forEach((ref, idx) => {
               if (index !== idx) {
                  ref.current.stop();
               } else {
                  keepPlaying ? ref.current.play() : ref.current.playPause();
               }
            });
            // waveSurferRefs[index].current.playPause(); // Kích hoạt phương thức startPlaying của component con

            setIsPlaying((prevState) => {
               const newState = [...prevState];
               newState[index] = waveSurferRefs[index].current.isPlaying();
               return newState;
            });
         }
      },
      [waveSurferRefs],
   );

   const handlePlayNext = useCallback(
      (index) => {
         const nextIndex = (index + 1) % tracks.length;
         handlePlayPause(nextIndex, true);
      },
      [handlePlayPause],
   );

   return (
      <>
         {tracks &&
            tracks.map((track, index) => {
               return (
                  <div
                     key={index}
                     className={classNames({
                        "mt-5 flex items-center justify-between padding-clamp-playlist gap-4 min-h-[85px] mx-6 rounded-xl hover:bg-active": true,
                        "bg-active": waveSurferRefs[index]?.current?.isPlaying(),
                     })}
                  >
                     <div className="title-container relative flex items-center justify-start me-8 xl:w-[15rem]">
                        <div
                           onClick={() => {
                              handlePlayPause(index);
                           }}
                           className="w-16 h-16 min-w-16 "
                        >
                           <Image
                              layout="responsive"
                              width={500}
                              height={30}
                              alt="image"
                              className="rounded-full"
                              src="https://musicvine.imgix.net/images/dan-philipson-avatar-v3_7437394530304291.jpg"
                           />
                           <div className="absolute top-0 left-0 z-10 flex items-center justify-center overflow-hidden ">
                              {!waveSurferRefs[index]?.current?.isPlaying() ? (
                                 <Image
                                    layout="responsive"
                                    width={500}
                                    height={30}
                                    alt="image"
                                    className="w-16 h-16 hover:opacity-100 opacity-0 "
                                    src={mediaIcons["play"]}
                                 />
                              ) : (
                                 <Image
                                    layout="responsive"
                                    width={500}
                                    height={30}
                                    alt="image"
                                    className="w-16 h-16 opacity-100"
                                    src={mediaIcons["pause"]}
                                 />
                              )}
                           </div>
                        </div>
                        <div className="flex items-start flex-col px-4 space-y-1 ">
                           <a
                              className="text-[0.875rem] w-[99%] xl:max-w-[12rem] sm:max-w-[10rem] max-w-[15rem] truncate "
                              href=""
                           >
                              Making Progress for working
                           </a>
                           <a className="text-[0.65rem] border border-main rounded-md px-2 py-1 truncate" href="">
                              Dan Phillipson
                           </a>
                        </div>
                     </div>

                     <div className="tags-container sm:flex hidden lg:w-[20%] w-[50%] lg:justify-center justify-end me-6 gap-2">
                        <a className="text-[0.65rem] bg-main rounded-md px-2 py-1" href="">
                           Inspirational
                        </a>
                        <a className="text-[0.65rem] bg-main rounded-md px-2 py-1" href="">
                           Piano
                        </a>
                        <a className="text-[0.65rem] bg-main rounded-md px-2 py-1" href="">
                           Electro
                        </a>
                     </div>

                     <div
                        onClick={() => {
                           handlePlayPause(index, true);
                        }}
                        className="wave-container lg:flex hidden xl:w-[50%] max-w-[35%]"
                     >
                        <SoundWave ref={waveSurferRefs[index]} url={track} onFinish={() => handlePlayNext(index)} />
                     </div>

                     <div className="options-container w-[20%]  flex items-center justify-end gap-1">
                        <div className="hover:bg-main rounded-full w-8 h-8 p-2 flex items-center justify-center">
                           <FaRegHeart color="#E493B3" />
                        </div>
                        <div className="hover:bg-main rounded-full w-8 h-8 p-2 flex items-center justify-center">
                           <LuMoreVertical />
                        </div>
                        <div className="hover:bg-main rounded-full w-8 h-8 p-2 flex items-center justify-center">
                           <LuDownload color="#71B190" />
                        </div>
                     </div>
                  </div>
               );
            })}
      </>
   );
};

export default Playlist;
