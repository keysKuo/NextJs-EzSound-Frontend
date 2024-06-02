import React from "react";
import { CheckSVG, CrossSVG } from "../svg";
import pricing from "../data/pricing.json";
import Image from "next/image";

const Pricing = () => {
   return (
      <>
         <div
            className="pricing-cards max-w-[1200px] w-fit relative gap-4
                    flex flex-row items-stretch justify-center rounded-[1rem] my-[4rem]"
         >
            {/* Free */}
            <div
               className="pricing-card free rounded-l-[0.75rem] w-full max-w-[24rem] bg-[#232525]
                        flex flex-col relative overflow-hidden"
            >
               <div className="pricing-image w-full h-[8rem] overflow-hidden relative">
                  <Image
                     layout="responsive"
                     width={500}
                     height={30}
                     alt="free banner"
                     loading="lazy"
                     decoding="async"
                     data-nimg="fill"
                     sizes="(max-width: 767px) 0px, (max-width: 991px) 300px, 400px"
                     src="/images/pricing-free.png"
                     // style={"position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"}
                  />
               </div>

               <div className="pricing-body p-[2rem] relative">
                  <span className="top-details flex flex-col items-center justify-center">
                     <span className="max-w-full">
                        <h2 className="text-[2rem] text-center font-bold mb-3">{pricing["free"]?.label}</h2>
                        <p className="text-[0.825rem] text-center block mb-[1.8em] text-[#A1A8AA]">
                           {pricing["free"]?.desc}
                        </p>
                     </span>

                     <div className="plan-price flex items-baseline whitespace-nowrap relative mb-8 text-[#fff]">
                        <span className="text-[2rem]">$</span>
                        <span className="flex">
                           <div className="text-[4rem]">{pricing["free"]?.price?.integer}</div>
                           <div className="text-[2rem] mt-3">{pricing["free"]?.price?.decimal}</div>
                        </span>
                     </div>
                  </span>

                  <button
                     className="btn-free w-full rounded-xl mb-10 bg-[#2DCAE9] h-[2.5rem] cursor-pointer transition-opacity duration-200
                                min-w-[2.5rem] py-3 outline-none border border-transparent flex items-center justify-center"
                  >
                     <span className="text-center text-[0.825rem] truncate text-[#0b0c0c] font-extralight">
                        Start now
                     </span>
                  </button>

                  <ul className="block">
                     {pricing["free"]?.benefits?.map((bullet, index) => {
                        return (
                           <li key={index} className="flex mb-3 items-center gap-3">
                              {bullet.isChecked ? <CheckSVG /> : <CrossSVG />}
                              <div className="text-[0.825rem] mt-1">{bullet.content}</div>
                           </li>
                        );
                     })}
                  </ul>
               </div>
            </div>

            {/* Premium */}
            <div
               className="pricing-card premium rounded-[0.75rem] w-full max-w-[24rem] bg-[#323434]
                        flex flex-col relative"
            >
               <div className="pricing-tag text-[0.8rem] text-[#fff] py-4 px-3">Popular with creators</div>
               <div className="pricing-image w-full h-[8rem] overflow-hidden relative rounded-t-[0.75rem]">
                  <Image
                     layout="responsive"
                     width={500}
                     height={30}
                     alt="premium banner"
                     loading="lazy"
                     decoding="async"
                     datanimg="fill"
                     sizes="(max-width: 767px) 0px, (max-width: 991px) 300px, 400px"
                     src="/images/pricing-premium.png"
                  />
               </div>

               <div className="pricing-body p-[2rem] relative">
                  <span className="top-details flex flex-col items-center justify-center">
                     <span className="max-w-full">
                        <h2 className="text-[2rem] text-center font-bold mb-3 flex flex-row justify-center gap-2 items-center">
                           {pricing["premium"]?.label}
                           <Image
                              width={30}
                              height={30}
                              alt="premium star"
                              loading="lazy"
                              decoding="async"
                              datanimg="1"
                              src="https://cdn.uppbeat.io/icons/static-icons/premium_star.svg"
                           />
                        </h2>
                        <p className="text-[0.825rem] text-center block mb-[1.8em] text-[#A1A8AA]">
                           {pricing["premium"]?.desc}
                        </p>
                     </span>

                     <div className="plan-price flex items-baseline whitespace-nowrap relative mb-8 text-[#fff]">
                        <span className="text-[2rem]">$</span>
                        <span className="flex">
                           <div className="text-[4rem]">{pricing["premium"]?.price?.integer}</div>
                           <div className="text-[2rem] mt-3">{pricing["premium"]?.price?.decimal}</div>
                        </span>
                     </div>
                  </span>

                  <button
                     className="btn-premium w-full rounded-xl mb-10 bg-[#F23D75] h-[2.5rem] cursor-pointer transition-opacity duration-200
                                min-w-[2.5rem] py-3 outline-none border border-transparent flex items-center justify-center"
                  >
                     <span className="text-center text-[0.825rem] truncate text-[#0b0c0c] font-extralight">
                        Start now
                     </span>
                  </button>

                  <ul className="block">
                     {pricing["premium"]?.benefits?.map((bullet, index) => {
                        return (
                           <li key={index} className="flex mb-3 items-center gap-3">
                              {bullet.isChecked ? <CheckSVG /> : <CrossSVG />}
                              <div className="text-[0.825rem] mt-1">{bullet.content}</div>
                           </li>
                        );
                     })}
                  </ul>
               </div>
            </div>

            {/* Business */}
            <div
               className="pricing-card business rounded-r-[0.75rem] w-full max-w-[24rem] bg-[#232525]
                        flex flex-col relative overflow-hidden"
            >
               <div className="pricing-image w-full h-[8rem] overflow-hidden relative">
                  <Image
                     layout="responsive"
                     width={500}
                     height={30}
                     alt="business banner"
                     loading="lazy"
                     decoding="async"
                     datanimg="fill"
                     sizes="(max-width: 767px) 0px, (max-width: 991px) 300px, 400px"
                     src="/images/pricing-business.png"
                  />
               </div>

               <div className="pricing-body p-[2rem] relative">
                  <span className="top-details flex flex-col items-center justify-center">
                     <span className="max-w-full">
                        <h2 className="text-[2rem] text-center font-bold mb-3">{pricing["business"]?.label}</h2>
                        <p className="text-[0.825rem] text-center block mb-[1.8em] text-[#A1A8AA]">
                           {pricing["business"]?.desc}
                        </p>
                     </span>

                     <div className="plan-price flex items-baseline whitespace-nowrap relative mb-8 text-[#fff]">
                        <span className="text-[2rem]">$</span>
                        <span className="flex">
                           <div className="text-[4rem]">{pricing["business"]?.price?.integer}</div>
                           <div className="text-[2rem] mt-3">{pricing["business"]?.price?.decimal}</div>
                        </span>
                     </div>
                  </span>

                  <button
                     className="btn-free w-full rounded-xl mb-10 bg-[#F0B62D] h-[2.5rem] cursor-pointer transition-opacity duration-200
                                min-w-[2.5rem] py-3 outline-none border border-transparent flex items-center justify-center"
                  >
                     <span className="text-center text-[0.825rem] truncate text-[#0b0c0c] font-extralight">
                        Start now
                     </span>
                  </button>
                  <h4 className="text-[1rem] text-[#fff] mb-4 leading-[1]">All the benefits of Premium, plus:</h4>

                  <ul className="block">
                     {pricing["business"]?.benefits?.map((bullet, index) => {
                        return (
                           <li key={index} className="flex mb-3 items-center gap-3">
                              {bullet.isChecked ? <CheckSVG /> : <CrossSVG />}
                              <div className="text-[0.825rem] mt-1">{bullet.content}</div>
                           </li>
                        );
                     })}
                  </ul>
               </div>
            </div>
         </div>
      </>
   );
};

export default Pricing;
