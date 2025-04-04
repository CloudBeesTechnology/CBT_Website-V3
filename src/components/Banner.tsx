"use client";
import Image from "next/image";
import BubbleImg from "../../public/assets/HomeSection/Banner/Images/Bubble.png";
import bannerImg from "../../public/assets/HomeSection/Banner/Images/Vector.svg";
import React from "react";
// ../../../public/
interface BannerProps {
  children: React.ReactNode;
}

export const Banner: React.FC<BannerProps> = ({ children }) => {
  return (
    <div className="relative w-full h-[80vh] lg:h-[60vh] overflow-hidden ">
      {/* Background Image */}
      <div className="relative w-full h-full">
        <Image
          src={bannerImg}
          alt="Career Banner"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>
      <div className="absolute bg-blend-overlay animate-move top-0 h-full w-full ">
        <Image
          src={BubbleImg}
          alt="CBT Banner Image"
          width={150}
          height={50}
          className="animate-spin-custom shadow-md blur-[50px] overflow-hidden"
        />
      </div>
      {/* Render Children Here */}
      <div className="relative z-10  ">
        {children}
      </div>
    </div>
  );
};

export const SecondBanner: React.FC<BannerProps> = ({ children }) => {
  return (
    <div className="relative w-full h-[80vh] lg:h-[60vh] overflow-hidden ">
      {/* Background Image */}
      <div className="relative w-full h-full">
        <Image
          src={bannerImg}
          alt="Career Banner"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>
      <div className="absolute bg-blend-overlay animate-move top-0 h-full w-full ">
        <Image
          src={BubbleImg}
          alt="CBT Banner Image"
          width={150}
          height={50}
          className="animate-spin-custom shadow-md blur-[50px] overflow-hidden"
        />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};