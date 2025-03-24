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
        <div className="flex flex-wrap justify-center items-start space-y-6 sm:space-y-0 space-x-4 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10"></div>
        <div className="flex items-center space-y-1">
          <span className="text-white text_size_1">Comprehensive modernization of an application</span>
        </div>
        <div className="text-center mt-6">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white italic leading-relaxed">
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