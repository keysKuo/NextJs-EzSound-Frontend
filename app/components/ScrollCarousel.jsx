import React from "react";
import Image from "next/image";

const ScrollCarousel = ({ photos }) => {
   return (
      <div className="relative flex items-center justify-center ml-6">
         <div className="carousel-container relative w-[100%] flex items-center p-4 space-x-4 bg-transparent rounded-box overflow-hidden">
            <div className="carousel-inner animation-scrollback flex flex-row gap-4 items-center">
               {photos.map((photo, index) => (
                  <div key={index} className="carousel-item bg-[#323434] rounded-xl">
                     <Image
                        width={500}
                        height={30}
                        src={photo}
                        className="rounded-box 2xl:max-w-[11rem] lg:max-w-[10rem] max-w-[7rem]"
                        alt={`Photo ${index}`}
                     />
                  </div>
               ))}
               {photos.map((photo, index) => (
                  <div key={index} className="carousel-item bg-[#323434] rounded-xl">
                     <Image
                        width={500}
                        height={30}
                        src={photo}
                        className="rounded-box 2xl:max-w-[11rem] lg:max-w-[10rem] max-w-[7rem]"
                        alt={`Photo ${index}`}
                     />
                  </div>
               ))}
               {photos.map((photo, index) => (
                  <div key={index} className="carousel-item bg-[#323434] rounded-xl">
                     <Image
                        width={500}
                        height={30}
                        src={photo}
                        className="rounded-box 2xl:max-w-[11rem] lg:max-w-[10rem] max-w-[7rem]"
                        alt={`Photo ${index}`}
                     />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default ScrollCarousel;
