"use client";

import React, { useContext, useEffect } from "react";
import { LuSearch } from "react-icons/lu";
import { AuthContext } from "../context/AuthProvider";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";

const MobileHeader = () => {
   const { user, setUser, modalOptions, setModalOptions } = useContext(AuthContext);
   const auth = getAuth();
   const router = useRouter();

   useEffect(() => {}, [user]);

   const handleLogout = async () => {
      await signOut(auth)
         .then(() => {
            window.location.reload();
         })
         .catch((err) => {
            console.log(err);
         });
   };

   return (
      <div className="lg:fixed sticky w-full z-10 max-w-full bg-[#151919] flex items-center justify-end  top-0 right-0 gap-2">
         <a className="lg:hidden px-6 max-h-[2.5rem] block me-auto" href="/">
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.0222 0.88908C21.99 0.285316 23.9834 2.25733 23.9834 5.79326C23.9834 9.25512 21.8563 12.1999 18.915 12.7952C18.3801 12.9101 17.8284 12.9219 17.2891 12.8302V23.0732C17.2891 27.9452 13.5891 32.3141 9.04002 33.238L8.24796 33.3987C3.70023 34.3239 0.000244141 31.4588 0.000244141 26.5868V12.2683C0.000244141 5.35861 5.47784 4.65282 5.47784 4.65282C5.50089 4.64753 5.523 4.6413 5.54476 4.63517C5.56901 4.62834 5.59284 4.62164 5.61704 4.61648C8.58483 4.01412 10.5782 5.98473 10.5782 9.52066C10.5782 12.9825 8.45119 15.9273 5.5196 16.5226C4.98475 16.6376 4.43299 16.6495 3.89372 16.5576V25.7957C3.89372 28.3715 5.84951 30.0696 8.25353 29.5804L9.04559 29.4197C11.4566 28.9306 13.4054 26.4386 13.4054 23.8628V8.54095C13.4054 1.6312 18.883 0.924019 18.883 0.924019C18.9087 0.918851 18.9333 0.912116 18.9576 0.905473L18.9576 0.905453L18.9577 0.905439C18.9792 0.899541 19.0006 0.893669 19.0222 0.88908ZM5.35117 12.8344C6.4091 12.6247 7.10511 11.6031 7.10511 10.2488C7.10511 8.90712 6.42859 8.17897 5.35117 8.39699C4.27374 8.61502 3.57773 9.63247 3.57773 10.9658C3.57773 12.2991 4.29323 13.044 5.35117 12.8344ZM16.9898 7.23559C16.9898 8.5675 17.7026 9.31941 18.7633 9.10418C19.8296 8.88755 20.5172 7.86031 20.5172 6.51862C20.5172 5.17692 19.8407 4.44877 18.7633 4.6668C17.6859 4.88482 16.9898 5.90367 16.9898 7.23559ZM17.9489 32.3002C17.6001 32.1103 17.1906 32.0665 16.8097 32.1782C16.4288 32.29 16.1073 32.5483 15.9152 32.8969C15.8414 33.0367 14.0694 36.1617 10.1202 36.342C9.92335 36.3512 9.7302 36.3992 9.5518 36.4833C9.37341 36.5675 9.21326 36.686 9.08051 36.8323C8.94776 36.9786 8.845 37.1496 8.77811 37.3358C8.71121 37.5219 8.68148 37.7195 8.69062 37.9171C8.69976 38.1148 8.74759 38.3087 8.83138 38.4878C8.91517 38.6669 9.03327 38.8277 9.17894 38.961C9.32462 39.0943 9.49502 39.1975 9.68041 39.2646C9.8658 39.3318 10.0626 39.3616 10.2594 39.3525C15.9444 39.0925 18.4515 34.5265 18.5559 34.3323C18.7428 33.9818 18.7839 33.5713 18.6701 33.1905C18.5564 32.8096 18.2971 32.4896 17.9489 32.3002Z"
                  fill="#71B190"
               ></path>
            </svg>
         </a>

         <div style={{ boxShadow: "rgba(11, 12, 12, 0.2)" }} className="header-right  p-4  flex gap-2 justify-end">
            {!user?.uid ? (
               <>
                  <button className="md:hidden block rotate-90 mx-1">
                     <LuSearch size={20} />
                  </button>

                  <Link href="/pricing" className="text-[0.825rem] bg-main px-3 pt-2 pb-1 rounded-lg">
                     Pricing
                  </Link>
                  <button className="text-xs bg-[#71B190] px-3 pt-2 pb-1 rounded-lg">Sign Up</button>
                  <button
                     onClick={() => {
                        setModalOptions({ ...modalOptions, isOpened: true });
                     }}
                     className="text-xs bg-main px-3 pt-2 pb-1 rounded-lg"
                  >
                     Log In
                  </button>
               </>
            ) : (
               <>
                  <button className="md:hidden block rotate-90 mx-1">
                     <LuSearch size={20} />
                  </button>

                  <Link href="/pricing" className="text-xs bg-main px-3 pt-2 pb-1 rounded-lg">
                     Pricing
                  </Link>
                  <button
                     className="flex items-center justify-center gap-2 
                            text-xs bg-[#71B190] px-3 pt-2 pb-1 rounded-lg"
                  >
                     <FaStar size={16} />
                     Go Premium
                  </button>
                  <div className="dropdown dropdown-end">
                     <div tabIndex={0} role="button" className="w-[2rem] h-[2rem] rounded-full bg-transparent">
                        <Image
                           layout="responsive"
                           width={500}
                           height={30}
                           className="rounded-full w-full h-full"
                           src={user?.photoURL}
                           alt=""
                        />
                     </div>
                     <ul tabIndex={0} className="dropdown-content mt-5 z-[1] p-2 shadow bg-[#323434] rounded-2xl w-52">
                        <li
                           className="flex text-center cursor-default flex-col
                                    text-[1.2rem] py-4 px-2 items-center justify-center"
                        >
                           <h2 className="">{user?.displayName}</h2>
                           <button
                              className="w-full h-[2rem] bg-[#71B190] rounded-badge text-[0.62rem] px-2 
                                        leading-3 my-4 hover:opacity-80
                                        flex text-center items-center justify-center"
                           >
                              Manage your Uppbeat account
                           </button>

                           <span
                              onClick={handleLogout}
                              className="cursor-pointer text-[#71B190] text-[0.825rem] underline hover:no-underline"
                           >
                              Log out
                           </span>
                        </li>
                     </ul>
                  </div>
               </>
            )}
         </div>
      </div>
   );
};

export default MobileHeader;
