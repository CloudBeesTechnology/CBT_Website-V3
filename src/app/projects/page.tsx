"use client";
import React, { useEffect, useState } from "react";
import { Banner } from "@/components/Banner";
import Project from "./Project";

// src/app/ourProjects/page.tsx
export default function OurProjects() {

  const [rotate, setRotate] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setRotate(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const CarrerBannerText: React.ReactNode = (
    <div className="flex justify-center items-center space-x-10">
      <div className="flex flex-col items-center space-y-1">
        <span className="text-white text_size_1">
          Join our tech community
        </span>
       
      </div>
    </div>
  );

  return (
    <>
        <Banner CarrerBannerText={CarrerBannerText} rotate={rotate}/>
      <Project />
    </>
  );
}
