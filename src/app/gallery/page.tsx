"use client";
import { Banner } from "@/components/Banner";
import React, { useEffect, useState } from "react";

import GalleryThumnail from "./galleryThumnail";

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
        <span className="text-white banner_title text-center">
          Capturing Moments, Creating Memories
        </span>
      </div>
    </div>
  );

  return (
    <main>
      <Banner GalleryTitleText={GalleryTitleText} rotate={rotate} />
      <div className="my-20">
        <GalleryThumnail />
      </div>
    </main>
  );
};

export default Gallery;
