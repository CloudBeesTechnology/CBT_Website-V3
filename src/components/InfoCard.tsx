// components/InfoCard.tsx
"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface InfoCardProps {
  iconImg: StaticImageData;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ iconImg, title, description }) => {
  return (
    <div className="center my-12 sm:my-16  relative flex-col border text-center shadow-lg rounded-2xl p-6 w-full max-w-[400px] h-72">
      <div className="absolute -top-5 left-1/2 shadow-[0px_-10px_3px_1px_#DCDCDC] hover:shadow-primary transition-shadow duration-300 bg-white transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-40 h-40 rounded-full  ">
      <Image src={iconImg} alt={title} width={80} height={80} className=" " />    
        </div>
      <div className="center flex-col z-20 text-center  ">
      <h3 className="text_size_2 mt-10">{title}</h3>
      <p className="text-gray para mt-2">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
