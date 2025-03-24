"use client";
import Image, { StaticImageData } from "next/image";
import BubbleImg from "../assets/HomeSection/Banner/Images/Bubble.png";
import React from "react";

interface BannerProps {
  homeLogo?: string;
  homeBannerText?: React.ReactNode;
  serviceLogo?: StaticImageData | string;
  serviceBannerText?: React.ReactNode;
  aboutBannerText?: React.ReactNode;
  rotate?: boolean;
  BlogsBannerText?: React.ReactNode;
  carrerBannerText?: React.ReactNode;
  projectBannerText?: React.ReactNode;

}

export const Banner: React.FC<BannerProps> = ({
  homeLogo,
  homeBannerText,
  serviceLogo,
  serviceBannerText,
  aboutBannerText,
  rotate,
  BlogsBannerText,
  carrerBannerText,
  projectBannerText,
}) => {
  return (
    <div className="relative bg_image h-[700px] min-[890px]:h-screen pb-14 min-[890px]:p-1 center w-full">
      <div className="absolute bg-blend-overlay animate-move bottom-0">
        <Image
          src={BubbleImg}
          alt="CBT Banner Image"
          width={450}
          height={100}
          className="animate-spin-custom shadow-lg blur-[60px]"
        />
      </div>
      {/* Home */}
      {homeLogo && homeBannerText && (
        <div className="flex items-center justify-center w-full text-white">
          <div className="flex justify-evenly items-center max-[890px]:flex-col md:justify-evenly w-full">
            <div className="">
              {/* Logo Wrapper */}
              <div className="relative pb-12">
                <Image
                  src={homeLogo}
                  alt="Home Logo"
                  width={150}
                  height={50}
                  className="animate-bounce-custom"
                />
                <div className="animate-bounce-custom-shadow absolute bottom-0 left-10 right-0 h-[6px] max-w-2/4 bg-black blur-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.3)]"></div>
              </div>
            </div>

            <div className="center flex-col text-center sm:w-2xl">
              <h2 className="text-3xl font-bold">{homeBannerText}</h2>
            </div>
          </div>
        </div>
      )}

      {/* Service */}
      {serviceLogo && serviceBannerText && (
        <div className="flex items-center justify-center w-full text-white">
          <div className="flex justify-evenly items-center max-[890px]:flex-col md:justify-evenly w-full">
            <div className="">
              {/* Logo Wrapper */}
              <div className="pb-12 z-0">
                <Image
                  src={serviceLogo}
                  alt="Service Logo"
                  width={450}
                  // height={150}
                  className="max-[890px]:w-[300px]"
                />
              </div>
            </div>

            <div className="center flex-col text-center sm:w-2xl">
              <h2 className="text-3xl font-bold">{serviceBannerText}</h2>
              {/* <p className="mt-5">
                Our end-to-end approach enhances operations, accelerates
                effectiveness, eliminates of technical issues, reduction in cost
                and updates apps for the future
              </p> */}
            </div>
          </div>
        </div>
      )}

      {/* carrer */}
      {projectBannerText && (
        <div className="flex items-center justify-center min-h-screen text-white">
          <div className="flex justify-evenly w-full ">
            <div className="flex flex-col items-center justify-center space-y-20">
              <h2 className="title">{projectBannerText}</h2>
              <div
                className={`ml-4 text-base sm:text-lg md:text-xl lg:text-[22px] font-medium text-white italic leading-relaxed transition-all duration-[1000ms] ease-out flex flex-col items-center ${rotate ? "scale-100 opacity-100" : "scale-50 opacity-0"
                  }`}
              >
                {["At CloudBees Tech, we take pride in our diverse portfolio of projects spanning various industries and sectors. Our team's expertise and dedication have led to successful outcomes and satisfied clients"].map((text, index) => (
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
      )}


      {/* Who we are */}
      {aboutBannerText && (
        <div className="flex items-center justify-center  text-white">
          <div className="flex justify-evenly w-full ">
            <div className="flex flex-col items-center justify-center space-y-20">
              <h2 className="title">{aboutBannerText}</h2>
              <h3
                className={`ml-4 title_2 transition-all duration-[1000ms] ease-out ${rotate
                  ? "rotate-0 scale-100 opacity-100"
                  : "rotate-[18deg] scale-50 opacity-0"
                  }`}
              >
                <i> Weaving Words Bridging Worlds </i>
              </h3>
            </div>
          </div>
        </div>
      )}

      {/* Blog */}
      {BlogsBannerText && (
        <div className="flex items-center justify-center min-h-screen text-white">
          <div className="flex justify-evenly w-full ">
            <div className="flex flex-col items-center justify-center space-y-20">
              <h2 className="title">{BlogsBannerText}</h2>
              <div
                className={`ml-4 text-base sm:text-lg md:text-xl lg:text-[22px] font-medium text-white italic leading-relaxed transition-all duration-[1000ms] ease-out flex flex-col items-center ${rotate ? "scale-100 opacity-100" : "scale-50 opacity-0"
                  }`}
              >
                {[
                  "Delve into captivating narratives, thought-provoking insights, and expertly curated",
                  "content that ignites curiosity and fosters meaningful conversations.",
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
      )}

      {/* carrer */}
      {carrerBannerText && (
        <div className="flex items-center justify-center min-h-screen text-white">
          <div className="flex justify-evenly w-full ">
            <div className="flex flex-col items-center justify-center space-y-20">
              <h2 className="title">{carrerBannerText}</h2>
              <div
                className={`ml-4 text-base sm:text-lg md:text-xl lg:text-[22px] font-medium text-white italic leading-relaxed transition-all duration-[1000ms] ease-out flex flex-col items-center ${rotate ? "scale-100 opacity-100" : "scale-50 opacity-0"
                  }`}
              >
                {["Make yourself a member of our team and strive ahead in your career.",
                  "Where Careers Align Perfectly"
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
      )}

    </div>
  );
};
