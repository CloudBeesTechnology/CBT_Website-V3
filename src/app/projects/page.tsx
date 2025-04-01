"use client";
import React, { useEffect, useState } from "react";
import { Banner } from "@/components/Banner";
import projectLogo from "../../assets/ProjectSection/svg/docSvgNew.svg"
import Project from "./Project";
import Image from "next/image";

// src/app/ourProjects/page.tsx
export default function OurProjects() {

  const [rotate, setRotate] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setRotate(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const projectBannerText: React.ReactNode = (
    <div className="flex justify-center items-center space-x-10">
      <h3 className="text-white banner_title tracking-wide">
        <span>We Have Design</span><br/>
        <span >Experiences For Over  
        30+  Projects</span>
      </h3>
    </div>
  );

  return (
    <>
      <Banner>
        <div className="absolute bg-blend-overlay flex items-center justify-center min-w-full h-[80vh] lg:h-[60vh] text-white">
          <div className="flex pb-24 flex-col lg:flex-row justify-evenly items-center w-full px-2 md:px-8 min-w-full min-h-full gap-4">
            {/* Text Section */}
            <div className="flex flex-col items-center justify-center space-y-8 text-center flex-grow ">
              <h2 className="title w-full max-w-4xl">{projectBannerText}</h2>
              <div
                className={`para_head max-w-[950px] font-light text-white italic transition-all duration-[1000ms] ease-out flex w-full flex-col items-center ${rotate ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
              >
                {["At CloudBees Tech, we take pride in our diverse portfolio of projects spanning various industries and sectors. Our team's expertise and dedication have led to successful outcomes and satisfied clients"].map((text, index) => (
                  <p key={index} className={`block transition-all duration-[1000ms] ease-out ${rotate ? "scale-100 opacity-100 delay-300" : "scale-50 opacity-0"}`}>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

      </Banner>
      <Project />
    </>
  );
}
