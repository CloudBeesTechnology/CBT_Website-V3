import { Banner } from "@/components/Banner";
import ServiceLogo from "../../assets/ServiceSection/animation/Service.gif"
import Service from "./Service";
import { LetTalk } from "../home/LetTalk";

// src/app/ourServices/page.tsx
const OurServices: React.FC = () => {
  const serviceBannerText = (
    <>
      <div>
        <div className="flex justify-center items-start space-x-10"></div>
        <div className="flex items-center space-y-1">
          <span className="text-white text_size_1">Comprehensive modernization of an application</span>
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