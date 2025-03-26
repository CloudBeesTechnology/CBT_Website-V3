"use client";
import Image, { StaticImageData } from "next/image";
import BubbleImg from "../assets/HomeSection/Banner/Images/Bubble.png";
import bannerImg from "../assets/HomeSection/Banner/Images/Vector.svg";
import React from "react";

interface BannerProps {
  homeLogo?: string;
  homeBannerText?: React.ReactNode;
  serviceLogo?: StaticImageData | string;
  serviceBannerText?: React.ReactNode;
  aboutBannerText?: React.ReactNode;
  rotate?: boolean;
  BlogsBannerText?: React.ReactNode;
  GalleryTitleText?: React.ReactNode;
  carrerBannerText?: React.ReactNode;
  projectBannerText?: React.ReactNode;
  projectLogo?: StaticImageData;
  productBannerText?: React.ReactNode;
}

export const Banner: React.FC<BannerProps> = ({
  homeLogo,
  homeBannerText,
  serviceLogo,
  serviceBannerText,
  aboutBannerText,
  rotate,
  BlogsBannerText,  
  GalleryTitleText,
  carrerBannerText,
  projectBannerText,
  projectLogo,
  productBannerText,
}) => {
  return (
    <div className="relative w-full h-[80vh]  lg:h-[60vh]">
    {/* Background Image */}
    <Image
      src={bannerImg}
      alt="Career Banner"
      layout="fill"
      objectFit="cover"
      // className="absolute top-0 left-0 w-full h-full"
    />
      <div className="absolute bg-blend-overlay animate-move top-0 h-full border">
        <Image
          src={BubbleImg}
          alt="CBT Banner Image"
          width={150}
          height={50}
          className="animate-spin-custom shadow-md blur-[50px] overflow-hidden"
        />
      </div>
      </div>
  );
};
