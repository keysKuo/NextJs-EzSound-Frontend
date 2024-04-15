import Image from "next/image";
import { Carousel } from "../components/";
import catalog from "../data/catalog.json";

export default function Home() {
    return (
        <>
            <div
                className="heading-home flex flex-nowrap justify-start items-start gap-[1rem] flex-col
            relative w-full padding-clamp-home-heading"
            >
                <h1 className="truncate block max-w-full leading-10 lg:text-[3.3rem] text-[2.7rem] font-bold">
                    Free music for creators
                </h1>
                <h2 className="truncate leading-8 lg:text-[1.3rem] text-[1rem] font-bold mt-4">
                    No copyright claim. Your favorite beatmakers
                </h2>
            </div>
            <div className="carousel-home">
                <div className="carousel-list mb-5">
                    <h1 className="text-xl pl-10 font-bold">Discover</h1>
                    <Carousel photos={catalog.map((item) => item.img)} />
                </div>
                <div className="carousel-list mb-5">
                    <h1 className="text-xl pl-10 font-bold">Beats</h1>
                    <Carousel photos={catalog.map((item) => item.img)} />
                </div>
                <div className="carousel-list mb-5">
                    <h1 className="text-xl pl-10 font-bold">Moods</h1>
                    <Carousel photos={catalog.map((item) => item.img)} />
                </div>
                <div className="carousel-list mb-5">
                    <h1 className="text-xl pl-10 font-bold">Top creator picks</h1>
                    <Carousel photos={catalog.map((item) => item.img)} />
                </div>
                <div className="carousel-list mb-5">
                    <h1 className="text-xl pl-10 font-bold">Background vibe</h1>
                    <Carousel photos={catalog.map((item) => item.img)} />
                </div>
            </div>
        </>
    );
}
