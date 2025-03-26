"use client";

import React, { useEffect, useState } from "react";
import CBTPolygonLogo from "../../assets/HomeSection/Banner/svg/CBT_LOGO.svg";
import Progress from "./Progress";
import { LifeCBT } from "./LifeAtCbt";
import { OurClient } from "./OurClient";
import { Technologies } from "./Technologies";
import Products from "../products/Products";
import { Banner } from "@/components/Banner";
import { LetTalk } from "./LetTalk";
import ProdLink from "./ProdLink";
import OurServices from "./OurServices";
import OurProduct from "./OurProduct";

const Home: React.FC = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  // Trigger the animation when the page is loaded or refreshed
  useEffect(() => {
    setAnimationTriggered(true);
  }, []);

  const homeBannerText = (
    <div className="flex flex-wrap justify-center items-start space-x-4 space-y-6 text-center">
      {/* Empowering */}
      <div className={`banner_title ${animationTriggered ? 'fall-animation' : ''}`}>
        <span className="text-primary animate-bounce">E</span>
        <span className="text-white">mpowering</span>
      </div>

      {/* Digital */}
      <div className={`banner_title ${animationTriggered ? 'fall-animation' : ''}`}>
        <span className="text-primary animate-bounce">D</span>
        <span className="text-white">igital</span>
      </div>

      {/* Transformation */}
      <div className={`banner_title ${animationTriggered ? 'fall-animation' : ''}`}>
        <span className="text-primary animate-bounce">T</span>
        <span className="text-white">ransformation</span>
      </div>

      <div className="text-center">
        <p className="para_head p-2 text-white italic font-light">
          CloudBees Tech providing smart digital solutions solving complex challenges and delivering innovative solutions that help our customers ahead.
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Passing Banner content to the Banner component */}
      <Banner>
        <div className="absolute bg-blend-overlay flex justify-evenly items-center h-[80vh] lg:h-[60vh] max-[890px]:flex-col md:justify-evenly w-full">
          {/* Logo */}
          <div className="flex items-center justify-center w-full text-white">
            <div className="relative pb-12">
              <img
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

      {/* Other components */}
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
