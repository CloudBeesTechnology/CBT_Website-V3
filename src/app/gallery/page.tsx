"use client";
import { Banner } from "@/components/Banner";
import React, { useEffect, useState } from "react";
import LifeOfCBT from "./lifeOfCBT";
import DiwaliCeleb from "./diwaliCeleb";

const Gallery: React.FC = () => {
  const [rotate, setRotate] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setRotate(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const GalleryTitleText: React.ReactNode = (
    <div className="flex justify-center items-center space-x-10">
      <div className="flex flex-col items-center space-y-1">
        <span className="text-white text_size_1">
          Capturing Moments, Creating Memories
        </span>
      </div>
    </div>
  );

  return (
    <main>
      <Banner GalleryTitleText={GalleryTitleText} rotate={rotate} />
      <LifeOfCBT />
      <DiwaliCeleb />
    </main>
  );
};

export default Gallery;
