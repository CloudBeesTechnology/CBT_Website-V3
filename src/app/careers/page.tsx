"use client";
import React, { useEffect, useState } from "react";
import { Banner } from "@/components/Banner";
import Careers from "./Careers"

// src/app/careers/page.tsx
export default function CarrerMain() {
  const [rotate, setRotate] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setRotate(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const carrerBannerText: React.ReactNode = (
    <div className="flex justify-center items-center space-x-10">
      <div className="flex flex-col items-center space-y-1">
        <span className="text-white banner_title text-center tracking-wide">
          Join Our Tech Community
        </span>
      </div>
    </div>
  );

  return (
    <div>
      <Banner >
        <div className="absolute bg-blend-overlay flex items-center justify-center px-2 h-[80vh] lg:h-[60vh] text-white">
          <div className="flex justify-evenly w-full ">
            <div className="flex flex-col pb-24 items-center justify-center space-y-5">
              <h2 className="title">{carrerBannerText}</h2>
              <div
                className={`para_head text-white italic text-center font-light transition-all duration-[1000ms] ease-out  ${rotate ? "scale-100 opacity-100" : "scale-50 opacity-0"
                  }`}
              >
                {[
                  "Make yourself a member of our team and strive ahead in your career, Where Careers Align Perfectly.",
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
      <Careers />
    </div>
  );
}
