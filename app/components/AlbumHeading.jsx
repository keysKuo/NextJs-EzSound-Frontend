import classNames from "classnames";
import React from "react";

const AlbumHeading = () => {
    return (
        <div
            className={classNames({
                "album-header padding-clamp border-b border-main": true,
                "flex md:flex-row flex-col items-center md:justify-start justify-center": true,
            })}
        >
            <div className="img-container sm:flex hidden w-48 h-48 bg-main rounded-2xl"></div>
            <div className="info-container flex flex-col md:items-start items-center gap-0 md:ml-10">
                <h1 className="text-[3.25rem] font-bold">Inspiring</h1>
                <div className="flex flex-grow flex-col md:items-start items-center md:text-start text-center">
                    <p className="max-w-[32rem] text-sm leading-6">
                        Spine-tingling compositions and rousing melodies to help stir the emotions and inspire
                        audiences. Ideal for aspirational content and positive creators.
                    </p>
                    <ul className="mt-6 list-none flex sm:flex-row flex-col flex-wrap sm:gap-5 gap-2 sm:items-center items-start text-sm">
                        <li className=" inline-flex text-medium items-center gap-2">
                            <svg
                                className="w-5 h-5"
                                width="500"
                                height="500"
                                viewBox="0 0 500 500"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect width="500" height="500" rx="60" fill="#71B190"></rect>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M405.878 92.0901C422.122 103.068 426.392 125.136 415.414 141.381L242.414 397.381C236.723 405.802 227.696 411.38 217.618 412.702C207.541 414.024 197.38 410.963 189.71 404.295L90.2095 317.795C75.413 304.932 73.8459 282.509 86.7091 267.713C99.5724 252.916 121.995 251.349 136.792 264.212L206.035 324.409L356.587 101.626C367.565 85.3819 389.633 81.1123 405.878 92.0901Z"
                                    fill="white"
                                ></path>
                            </svg>
                            No copyright issues
                        </li>
                        <li className=" inline-flex text-medium items-center gap-2">
                            <svg
                                className="w-5 h-5"
                                width="500"
                                height="500"
                                viewBox="0 0 500 500"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect width="500" height="500" rx="60" fill="#71B190"></rect>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M405.878 92.0901C422.122 103.068 426.392 125.136 415.414 141.381L242.414 397.381C236.723 405.802 227.696 411.38 217.618 412.702C207.541 414.024 197.38 410.963 189.71 404.295L90.2095 317.795C75.413 304.932 73.8459 282.509 86.7091 267.713C99.5724 252.916 121.995 251.349 136.792 264.212L206.035 324.409L356.587 101.626C367.565 85.3819 389.633 81.1123 405.878 92.0901Z"
                                    fill="white"
                                ></path>
                            </svg>
                            Download now
                        </li>
                        <li className=" inline-flex text-medium items-center gap-2">
                            <svg
                                className="w-5 h-5"
                                width="500"
                                height="500"
                                viewBox="0 0 500 500"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect width="500" height="500" rx="60" fill="#71B190"></rect>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M405.878 92.0901C422.122 103.068 426.392 125.136 415.414 141.381L242.414 397.381C236.723 405.802 227.696 411.38 217.618 412.702C207.541 414.024 197.38 410.963 189.71 404.295L90.2095 317.795C75.413 304.932 73.8459 282.509 86.7091 267.713C99.5724 252.916 121.995 251.349 136.792 264.212L206.035 324.409L356.587 101.626C367.565 85.3819 389.633 81.1123 405.878 92.0901Z"
                                    fill="white"
                                ></path>
                            </svg>
                            Music for creators
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AlbumHeading;
