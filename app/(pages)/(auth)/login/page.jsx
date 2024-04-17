"use client";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const auth = getAuth();
    const { user, setUser } = useContext(AuthContext);
    const router = useRouter();

	// setUser({});
	// localStorage.clear();

    const handleLoginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();

        const res = await signInWithPopup(auth, provider);
        console.log(res);
    };

    if (user?.uid) {
        router.push("/");
        return;
    }

    return (
        <div className="flex items-center justify-center mt-20">
            <button onClick={handleLoginWithGoogle} className="h-12 px-6 py-2 rounded-lg border border-gray-200">
                Login with google
            </button>
        </div>
    );
};

export default LoginPage;
