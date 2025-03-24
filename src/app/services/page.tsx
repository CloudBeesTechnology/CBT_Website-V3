"use client";
import { Banner } from "@/components/Banner";
import ServiceLogo from "../../assets/ServiceSection/animation/Service.gif"
import Service from "./Service";
import { LetTalk } from "../home/LetTalk";

// src/app/ourServices/page.tsx
const OurServices: React.FC = () => {
  const serviceBannerText = (
    <>
      <div>
        <div className="flex flex-wrap justify-center items-start space-y-2 md:space-y-2 lg:space-y-4 xl:space-y-6 space-x-4 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-4"></div>
        <div className="flex items-center space-y-1">
          <span className="text-white text-xl sm:text-4xl md:text-5xl lg:text-[36px] font-medium capitalize">Comprehensive modernization of an application</span>
        </div>
        <div className="text-center mt-0 lg:mt-4 xl:mt-6">
          <p className="text-base sm:text-lg md:text-xl lg:text-[22px] font-medium text-white italic leading-relaxed">
            Our end-to-end approach enhances operations, accelerates effectiveness, eliminates of technical issues, reduction in cost and updates apps for the future
          </p>
        </div>
      </div>
    </>
  )
  return (
    <div className="">
      <Banner
        serviceLogo={ServiceLogo}
        serviceBannerText={serviceBannerText}
      />
      <Service/>
      <LetTalk/>
    </div>
  );
}
export default OurServices;