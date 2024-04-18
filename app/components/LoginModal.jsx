"use client";

import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import classNames from "classnames";
import { LuX } from "react-icons/lu";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function LoginModal() {
    const auth = getAuth();
    const { showLoginModal, setShowLoginModal } = useContext(AuthContext);
    const handleLoginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();

        await signInWithPopup(auth, provider)
            .then(res => {
                console.log(res);
                setShowLoginModal(false);
            })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <div className="flex">
            <div
                className={classNames({
                    "w-full h-[100%] overflow-hidden z-[1000] bg-modal": true,
                    "absolute top-0 right-0 left-0 bottom-0": true,
                    block: showLoginModal,
                    hidden: !showLoginModal,
                })}
            >
                <div
                    className="max-w-[340px] relative top-0 right-0 ml-auto h-[100%]
                    overflow-hidden"
                >
                    <div className="h-[100%]">
                        <div className="login-modal w-[100%] h-[100%] flex flex-col">
                            <div className="modal-header flex items-center justify-between">
                                <div className="bg-[#323434] w-[100%] h-16 flex items-center justify-between p-4">
                                    <span
                                        className="z-1 relative font-medium text-[0.825rem]
                                        flex items-center justify-center gap-1"
                                    >
                                        <img src="/logo-text.png" alt="Uppbeat logo" className="uppbeat-logo" />
                                    </span>

                                    <div className="p-2 rounded-full hover:bg-active">
                                        <LuX
                                            size={25}
                                            onClick={() => {
                                                setShowLoginModal(false);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div
                                className="modal-container w-[200%] transition-transform duration-200
                                flex flex-1 overflow-y-auto overflow-x-hidden bg-[#232525]"
                            >
                                <div className="min-w-[50%] w-[50%] px-6 py-12 overflow-hidden">
                                    <h2 className="mb-6 text-[1.2rem] font-bold">Log In</h2>
                                    <button
                                        onClick={handleLoginWithGoogle}
                                        className="google-login-btn w-full h-10 rounded-badge text-sm
                                        bg-[#3273FF] border-2 border-[#3273FF] flex items-center justify-start gap-14"
                                    >
                                        <div className="w-[2.2rem] h-[2.2rem] rounded-full bg-white flex items-center justify-center">
                                            <svg
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 48 48"
                                                className="w-[50%]"
                                            >
                                                <g>
                                                    <path
                                                        fill="#EA4335"
                                                        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                                                    ></path>
                                                    <path
                                                        fill="#4285F4"
                                                        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                                                    ></path>
                                                    <path
                                                        fill="#FBBC05"
                                                        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                                                    ></path>
                                                    <path
                                                        fill="#34A853"
                                                        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                                                    ></path>
                                                    <path fill="none" d="M0 0h48v48H0z"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        Login with Google
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
                                            className="forgot-password-text text-[#71B190] text-[.75rem] cursor-pointer
                                            mt-2 mb-8 text-right hover:opacity-80"
                                        >
                                            Lost Your Password?
                                        </p>

                                        <button
                                            className="login-btn rounded-xl w-full h-[2.7rem] min-w-[2.5rem] bg-[#71B190]
                                            outline-none relative overflow-hidden border border-transparent flex items-center justify-center
                                            transition-opacity duration-200 ease-in-out text-xs hover:opacity-80 mb-4"
                                        >
                                            Log in
                                        </button>
                                    </form>
                                    <p className="text-xs text-center ">
                                        Don't have an account?
                                        <span className="text-[#71B190] px-1 cursor-pointer hover:opacity-80">
                                            Sign up
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
