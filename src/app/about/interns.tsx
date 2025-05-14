import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import underline from "../../../public/assets/AboutSection/HeaderImages/Line Design.svg";

type Interns = {
  imageUrl: string | StaticImageData;
  name: string;
  position: string;
  skills: string[];
};

type InternsProps = {
  interns: Interns[];
};

const Interns: React.FC<InternsProps> = ({ interns }) => {
  return (
    <div className="flex flex-col items-center w-full mx-auto p-6 mb-20">
      <div className="text-center mb-10 ">
        <h2 className="title">Interns</h2>
        <Image
          src={underline}
          alt="underline"
          className="mb-4 w-full max-w-[270px] object-cover"
        />
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  w-full">
        {interns.map((intern, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full px-4 py-6 "
          >
            <Image
              src={intern.imageUrl}
              alt={intern.name}
              width={270}
              height={372}
              className="mb-4 w-full max-w-[270px] object-cover"
            />
            <div className="flex flex-col items-center text-center px-4 py-4 w-full">
              <h3 className="text-gray para_head ">{intern.name}</h3>
              <p className="text-dark_gray para font-medium  pt-1 ">
                {intern.position}
              </p>
              <p className="text-dark_gray text-center sub_para w-full sm:w-82  pt-1">
              <span className="font-medium">Skill : </span>{ intern.skills.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interns;
