"use client";

import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import classNames from "classnames";
import { LuX } from "react-icons/lu";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { GoogleSVG } from "../../svg";
import Image from "next/image";

export default function LoginModal() {
   const auth = getAuth();
   const { modalOptions, setModalOptions } = useContext(AuthContext);

   const handleLoginWithGoogle = async () => {
      const provider = new GoogleAuthProvider();

      await signInWithPopup(auth, provider)
         .then((res) => {
            console.log(res);
            setModalOptions({ ...modalOptions, isOpened: false });
         })
         .catch((err) => {
            console.log(err);
         });
   };

   return (
      <>
         <div
            className={classNames({
               "login-modal w-[100%] h-[100%] flex flex-col": true,
            })}
         >
            <div className="modal-header flex items-center justify-between">
               <div className="bg-[#323434] w-[100%] h-16 flex items-center justify-between p-4">
                  <span
                     className="z-1 relative font-medium text-[0.825rem]
                                        flex items-center justify-center gap-1"
                  >
                     <Image
                        layout="responsive"
                        width={500}
                        height={30}
                        src="/logo-text.png"
                        alt="Uppbeat logo"
                        className="uppbeat-logo"
                     />
                  </span>

                  <div className="p-2 rounded-full hover:opacity-70">
                     <LuX
                        size={25}
                        onClick={() => {
                           setModalOptions({ ...modalOptions, tab: 0, isOpened: false });
                        }}
                     />
                  </div>
               </div>
            </div>

            <div
               className={classNames({
                  "modal-container w-[200%] transition-transform duration-200": true,
                  "flex flex-1 overflow-y-auto overflow-x-hidden bg-[#232525]": true,
                  "translate-x-[-50%]": modalOptions.tab == 1,
               })}
            >
               <div className="min-w-[50%] w-[50%] px-6 py-12 overflow-hidden">
                  <h2 className="mb-6 text-[1.2rem] font-bold">Log In</h2>
                  <button
                     onClick={handleLoginWithGoogle}
                     className="google-login-btn w-full h-10 rounded-badge text-sm
                              bg-[#3273FF] border-2 border-[#3273FF] flex items-center justify-start gap-12"
                  >
                     <div className="w-[2.2rem] h-[2.2rem] rounded-full bg-white flex items-center justify-center">
                        <GoogleSVG />
                     </div>
                     Sign in with Google
                  </button>

                  <p className="border-b border-[#4e5152] mt-6 mb-10 w-full text-center leading-[0.1rem]">
                     <span className="text-[#fff] bg-[#232525] px-[0.625rem] font-bold">Or</span>
                  </p>

                  <form>
                     <div className="flex flex-col w-full relative">
                        <input
                           type="text"
                           name="_username"
                           placeholder="Email address"
                           className="text-[0.825rem] bg-[#323434] text-[#fff] border-2 border-transparent
                                      h-[2.7rem] rounded-[0.625rem] px-4 outline-none overflow-visible"
                        />
                     </div>
                     <div className="flex flex-col w-full relative">
                        <input
                           type="password"
                           name="password"
                           placeholder="Password"
                           className="text-[0.825rem] bg-[#323434] text-[#fff] border-2 border-transparent
                                     h-[2.7rem] rounded-[0.625rem] px-4 outline-none overflow-visible mt-4"
                        />
                     </div>
                     <p
                        onClick={() => {
                           setModalOptions({ ...modalOptions, tab: 1 });
                        }}
                        className="forgot-password-text text-[#71B190] text-[.75rem] cursor-pointer
                                   mt-2 mb-8 text-right hover:opacity-80"
                     >
                        Lost Your Password?
                     </p>

                     <button
                        type="button"
                        className="login-btn rounded-xl w-full h-[2.7rem] min-w-[2.5rem] bg-[#71B190]
                                   outline-none relative overflow-hidden border border-transparent flex items-center justify-center
                                   transition-opacity duration-200 ease-in-out text-xs hover:opacity-80 mb-4"
                     >
                        Log in
                     </button>
                  </form>
                  <p className="text-xs text-center ">
                     Don&apos;t have an account?
                     <span className="text-[#71B190] px-1 cursor-pointer hover:opacity-80">Sign up</span>
                  </p>
               </div>

               <div className="min-w-[50%] w-[50%] px-6 py-12 overflow-hidden">
                  <h2 className="mb-6 text-[1.2rem] font-bold">Fogot Password?</h2>

                  <p className="mb-4 text-[#A1A8AA] text-[0.75rem]">
                     Please enter your email address below. You will then receive a link to create a new password via
                     email.
                  </p>

                  <form>
                     <div className="flex flex-col w-full relative">
                        <input
                           type="text"
                           name="_username"
                           placeholder="Email address"
                           className="text-[0.825rem] bg-[#323434] text-[#fff] border-2 border-transparent
                                      mb-4 h-[2.7rem] rounded-[0.625rem] px-4 outline-none overflow-visible"
                        />
                     </div>

                     <button
                        className="login-btn rounded-xl w-full h-[2.7rem] min-w-[2.5rem] bg-[#71B190]
                                   outline-none relative overflow-hidden border border-transparent flex items-center justify-center
                                   transition-opacity duration-200 ease-in-out text-xs hover:opacity-80 mb-4"
                     >
                        Send password reset email
                     </button>
                  </form>
                  <p className="text-[0.7rem] text-center text-[#A1A8AA]">
                     This site is protected by reCAPTCHA and the Google{" "}
                     <a className="text-[#71B190]" href="https://policies.google.com/privacy" target="_blank">
                        Privacy Policy
                     </a>{" "}
                     and{" "}
                     <a className="text-[#71B190]" href="https://policies.google.com/terms" target="_blank">
                        Terms of Service
                     </a>{" "}
                     apply.
                  </p>
               </div>
            </div>
         </div>
      </>
   );
}
