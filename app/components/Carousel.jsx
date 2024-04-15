"use client";
import React, { useEffect, useState } from "react";

function sliceArray(arr, size) {
    const slicedArray = [];
    for (let i = 0; i < arr.length; i += size) {
        slicedArray.push(arr.slice(i, i + size));
    }
    return slicedArray;
}

const Carousel = ({ photos }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const numOfSlides = Math.floor(photos.length / 5) - 1;
    const slicePhotos = sliceArray(photos, 5);

    const handlePrev = () => {
        if (currentSlide <= 0) {
            return;
        }

        setCurrentSlide((prevSlide) => {
            return prevSlide - 1;
        });
    };

    const handleNext = () => {
        if (currentSlide >= numOfSlides) {
            return;
        }

        setCurrentSlide((prevSlide) => {
            return prevSlide + 1;
        });
    };

    return (
        <div
            className="relative flex items-center justify-center ml-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative w-[100%] flex items-center p-4 space-x-4 bg-transparent rounded-box overflow-hidden">
                <div
                    className="carousel-inner flex flex-row gap-4 items-center"
                    style={{ transform: `translateX(-${currentSlide * (100 * 5 / slicePhotos[currentSlide].length)}%)` }}
                >
                    {photos.map((photo, index) => (
                        <div key={index} className="carousel-item">
                            <img
                                src={photo}
                                className="rounded-box 2xl:max-w-[13rem] lg:max-w-[10rem] max-w-[7rem]"
                                alt={`Photo ${index}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {isHovered && (
                <div className="absolute w-full flex items-center justify-between transform-translate-y-1/2">
                    {currentSlide > 0 && (
                        <button
                            className="bg-[#0b0c0c] px-1 pb-2 rounded-r-full hover:opacity-100 opacity-70 absolute left-0 carousel-control 
                            prev text-[3.5rem] text-[#fff] leading-[9rem]"
                            onClick={handlePrev}
                        >
                            ‹
                        </button>
                    )}
                    {currentSlide < numOfSlides && (
                        <button
                            className="bg-[#0b0c0c] px-1 pb-2 rounded-l-full hover:opacity-100 opacity-70 absolute right-0 carousel-control next text-[3.5rem] text-[#fff] leading-[9rem]"
                            onClick={handleNext}
                        >
                            ›
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Carousel;
