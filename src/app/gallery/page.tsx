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
      <Banner>
        <div className="absolute bg-blend-overlay flex items-center justify-center h-[80vh] lg:h-[60vh] text-white">
          <div className="flex justify-evenly w-full ">
            <div className="flex flex-col items-center justify-center space-y-5">
              <h2 className="title">{GalleryTitleText}</h2>
              <div
                className={`ml-4 para_head text-white italic leading-relaxed transition-all duration-[1000ms] ease-out flex flex-col items-center ${
                  rotate ? "scale-100 opacity-100" : "scale-50 opacity-0"
                }`}
              >
                {[
                  "Each piece on display tells a unique story, inviting you to immerse yourself in the",
                  "beauty of life's most precious encounters.",
                ].map((text, index) => (
                  <h3 key={index}>
                    <i
                      className={`block transition-all duration-[1000ms] ease-out ${
                        rotate
                          ? "scale-100 opacity-100 delay-300"
                          : "scale-50 opacity-0"
                      }`}
                    >
                      {text}
                    </i>
                  </h3>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Banner>
      <div className="my-20">
        <GalleryThumnail />
      </div>
    </main>
  );
};

export default Gallery;
