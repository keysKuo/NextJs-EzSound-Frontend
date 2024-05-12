"use client";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { createContext, useEffect, useRef, useState } from "react";
import "../firebase/config";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
   const [user, setUser] = useState({});
   const [modalOptions, setModalOptions] = useState({
      isOpened: false,
      type: "login",
      tab: 0,
      ref: useRef(null),
   });

   const router = useRouter();

   const auth = getAuth();

   useEffect(() => {
      const unsubcribed = auth.onIdTokenChanged((user) => {
         console.log("[From AuthProvider]", { user });

         if (user?.uid) {
            setUser(user);
            localStorage.setItem("accessToken", user.accessToken);
            return;
         }
      });

      // rerset user info
      setUser({});
      localStorage.clear();
      // router.push('/login');

      return () => {
         unsubcribed();
      };
   }, [auth]);

   return (
      <AuthContext.Provider value={{ user, setUser, modalOptions, setModalOptions }}>{children}</AuthContext.Provider>
   );
}
