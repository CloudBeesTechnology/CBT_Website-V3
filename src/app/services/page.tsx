import { Banner } from "@/components/Banner";
import ServiceLogo from "../../assets/ServiceSection/animation/Service.gif"
import Service from "./Service";
import { LetTalk } from "../home/LetTalk";
import Image from "next/image";

// src/app/ourServices/page.tsx
const OurServices: React.FC = () => {
  const serviceBannerText = (
    <>
      <div>
        <div className="flex justify-center items-center space-x-10"></div>
        <div className="flex items-center space-y-1">
          <span className="text-white banner_title">Comprehensive modernization of an application</span>
        </div>
        <div className="text-center mt-0 lg:mt-4 xl:mt-6">
          <p className="para_head text-white italic leading-relaxed">
            Our end-to-end approach enhances operations, accelerates effectiveness, eliminates of technical issues, reduction in cost and updates apps for the future
          </p>
        </div>
      </div>
    </>
  )

  return (
    <div className="">
      <Banner>
        <div className="absolute bg-blend-overlay flex items-center justify-center min-w-full h-[80vh] lg:h-[60vh] text-white">
          <div className="flex flex-col lg:flex-row justify-evenly items-center w-full px-4 md:px-8 min-w-full min-h-full gap-4">
            {/* Text Section */}
            <div className="flex flex-col items-center justify-center mt-6 max-w-4xl md:w-2xl text-center flex-grow">
              <h2 className="title">{serviceBannerText}</h2>
              <div></div>
            </div>
          </div>
        </div>
      </Banner>
      <Service />
      <LetTalk />
    </div>
  );
}
export default OurServices;