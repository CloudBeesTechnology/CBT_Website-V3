import { SecondBanner } from "@/components/Banner";
import ServiceLogo from "../../../public/assets/ServiceSection/animation/Service.gif"
import Service from "./Service";
import { LetTalk } from "../home/LetTalk";
import Image from "next/image";

// src/app/ourServices/page.tsx
const OurServices: React.FC = () => {
  const serviceBannerText = (
    <>
      <div className="max-lg:mt-16">
        <div className="flex justify-center items-center "></div>
        <h3 className="text-center center ">
          <span className="text-white banner_title tracking-wide">Comprehensive Modernization Of An Application</span>
        </h3>
        <div className="text-center italic para_head font-light mt-4  xl:mt-6">
          <p className="para_head text-white italic ">
            Our end-to-end approach enhances operations, accelerates effectiveness, eliminates of technical issues, reduction in cost and updates apps for the future
          </p>
        </div>
      </div>
    </>
  )
  return (
    <div className="">
      <SecondBanner>
        <div className="absolute bg-blend-overlay flex items-center justify-center  min-lg:pb-24 min-w-full h-[80vh] lg:h-[60vh] text-white">
          <div className="flex flex-col lg:flex-row justify-evenly items-center w-full px-2 md:px-8 min-w-full min-h-full gap-4">
            {/* Text Section */}
            <div className="flex flex-col items-center justify-center mt-6 max-w-4xl md:w-2xl text-center flex-grow">
              <h2 className="title">{serviceBannerText}</h2>
              <div></div>
            </div>
          </div>
        </div>
      </SecondBanner>
      <Service />
      <LetTalk />
    </div>
  );
}
export default OurServices;