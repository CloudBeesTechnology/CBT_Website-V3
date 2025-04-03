"use client";

import React, { useEffect, useState } from "react";
import CBTPolygonLogo from "../../../public/assets/HomeSection/Banner/svg/CBT_LOGO.svg";
import Progress from "./Progress";
import { LifeCBT } from "./LifeAtCbt";
import { OurClient } from "./OurClient";
import { Technologies } from "./Technologies";
import { Banner } from "@/components/Banner";
import { LetTalk } from "./LetTalk";
import ProdLink from "./ProdLink";
import OurServices from "./OurServices";
import OurProduct from "./OurProduct";
import Image from "next/image";

const Home: React.FC = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  // Trigger the animation when the page is loaded or refreshed
  useEffect(() => {
    setAnimationTriggered(true);
  }, []);

  const homeBannerText = (
    <div className=" mb-16 center flex-col w-full sm:max-w-[70%] px-2">
    <div className="flex flex-wrap justify-center items-start space-x-4   text-center">
        {/* Empowering */}
        <div className={`banner_title ${animationTriggered ? 'fall-animation' : ''}`}>
        <span className="text-primary inline-block animate-bounce banner_letter">E</span>
        <span className="text-white">mpowering</span>
      </div>

      {/* Digital */}
      <div className={`banner_title ${animationTriggered ? 'fall-animation' : ''}`}>
        <span className="text-primary inline-block animate-bounce  banner_letter">D</span>
        <span className="text-white">igital</span>
      </div>

      {/* Transformation */}
      <div className={`banner_title ${animationTriggered ? 'fall-animation' : ''}`}>
        <span className="text-primary inline-block animate-bounce  banner_letter">T</span>
        <span className="text-white">ransformation</span>
      </div>
    </div>

      <div className="text-center w-full max-w-4xl mt-5">
        <p className="para_head text-white italic font-light">
          CloudBees Tech providing smart digital solutions solving complex challenges and delivering innovative solutions that help our customers ahead.
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Passing Banner content to the Banner component */}
      
      <Banner>
        <div className="absolute  bg-blend-overlay flex justify-center sm:justify-evenly items-center h-[80vh] lg:h-[60vh] max-[890px]:flex-col md:justify-evenly w-full">
          {/* Logo */}
          <div className="flex  items-center justify-center w-full text-white  sm:max-w-[30%] ">
            <div className="relative pb-12">
              <Image
                src={CBTPolygonLogo}
                alt="Home Logo"
                width={150}
                height={50}
                className="animate-bounce-custom"
              />
              <div className="animate-bounce-custom-shadow absolute bottom-0 left-10 right-0 h-[6px] max-w-2/4 bg-black blur-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.3)]"></div>
            </div>
          </div>

          {/* Banner Text */}
          {homeBannerText}
        </div>
      </Banner>
      
      <OurProduct />
      <ProdLink />
      <OurServices />
      <Progress />
      <LifeCBT />
      <OurClient />
      <Technologies />
      <LetTalk />
    </>
  );
};

export default Home;
