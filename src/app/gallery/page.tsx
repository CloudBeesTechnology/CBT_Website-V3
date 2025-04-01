"use client";
import { Banner } from "@/components/Banner";
import React, { useEffect, useState } from "react";
import LifeOfCBT from "./lifeOfCBT";
import DiwaliCeleb from "./diwaliCeleb";
import Anniversary from "./anniversary";
import PongalCeleb from "./pongalCeleb";
import WomensDayCeleb from "./womensDayCeleb";
import KnowledgeSharing from "./knowledgeSharing";

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
        <span className="text-white banner_title text-center tracking-wide">
          Capturing Moments, Creating Memories
        </span>
      </div>
    </div>
  );

  return (
    <main>
      <Banner>
        <div className="absolute bg-blend-overlay flex items-center justify-center px-2 h-[80vh] lg:h-[60vh] text-white">
          <div className="flex justify-evenly w-full ">
            <div className="flex flex-col items-center pb-24 space-y-5">
              <h2 className="title max-w-4xl">{GalleryTitleText}</h2>
              <div
                className={` max-w-[950px] w-full para_head text-white font-light italic flex transition-all duration-[1000ms] ease-out text-center ${rotate ? "scale-100 opacity-100" : "scale-50 opacity-0"
                  }`}
              >
                {[
                  "Each piece on display tells a unique story, inviting you to immerse yourself in the beauty of life's most precious encounters.",
                ].map((text, index) => (
                  <h3 key={index}>
                    <i
                      className={`block transition-all duration-[1000ms] ease-out ${rotate
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
      <div className="my-10">

        <LifeOfCBT />
        <DiwaliCeleb />
        <Anniversary />
        <PongalCeleb />
        <WomensDayCeleb />
        {/* <KnowledgeSharing /> */}
      </div>
    </main>
  );
};

export default Gallery;
