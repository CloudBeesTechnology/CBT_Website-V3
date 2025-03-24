"use client";
import { Banner } from "@/components/Banner";
import Careers from "./Careers"
import React, { useEffect, useState } from "react";

// src/app/careers/page.tsx
export default function CarrerMain() {
    const [rotate, setRotate] = useState<boolean>(false);
    useEffect(() => {
      const timer = setTimeout(() => {
        setRotate(true);
      }, 200);
  
      return () => clearTimeout(timer);
    }, []);

  const carrerBannerText: React.ReactNode = (
    <div className="flex justify-center items-center space-x-10">
      <div className="flex flex-col items-center space-y-1">
        <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[36px] font-medium">
          Join our tech community
        </span>
       
      </div>
    </div>
  );

  return (
    <div>
      <Banner carrerBannerText={carrerBannerText} rotate={rotate}/>
      <Careers />
    </div>
  );
} 
