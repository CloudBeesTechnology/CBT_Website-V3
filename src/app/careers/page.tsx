"use client";
import React, { useEffect, useState } from "react";
import { Banner } from "@/components/Banner";
import Careers from "./Careers"

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
        <span className="text-white banner_title">
          Join our tech community
        </span>
      </div>
    </div>
  );

  return (
    <div>
      <Banner carrerBannerText={carrerBannerText} rotate={rotate} />
      <Careers />
    </div>
  );
}
