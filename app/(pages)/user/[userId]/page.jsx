"use client";
import { useParams } from "next/navigation";
import React from "react";

const USerDetailPage = () => {
    const params = useParams();

    console.log(params);

    return <div>User detail</div>;
};

export default USerDetailPage;
