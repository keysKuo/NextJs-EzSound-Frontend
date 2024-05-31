"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import classNames from "classnames";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

export default function ModalRoot() {
   const { modalOptions, setModalOptions } = useContext(AuthContext);

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (modalOptions.isOpened && modalOptions.ref.current && !modalOptions.ref.current.contains(event.target)) {
            setModalOptions({ ...modalOptions, tab: 0, isOpened: false });
         }
      };

      document.body.addEventListener("click", handleClickOutside);

      // Loại bỏ event listener khi component unmount
      return () => {
         document.body.removeEventListener("click", handleClickOutside);
      };
   }, [modalOptions, setModalOptions]);

   return (
      <div className="flex">
         <div
            className={classNames({
               "w-full h-[100%] overflow-hidden z-[1000] bg-modal": true,
               "fixed top-0 right-0 left-0 bottom-0": true,
               block: modalOptions.isOpened,
               hidden: !modalOptions.isOpened,
            })}
         >
            <div
               ref={modalOptions.ref}
               className="max-w-[340px] relative top-0 right-0 ml-auto h-[100%]
                    overflow-hidden"
            >
               <div className="h-[100%]">
                  {modalOptions.type === 'login' && <LoginModal />}
                  {modalOptions.type === 'register' && <RegisterModal />}
                  
               </div>
            </div>
         </div>
      </div>
   );
}
