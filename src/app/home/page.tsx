"use client";
import CBTPolygonLogo from "../../assets/HomeSection/Banner/svg/CBT_LOGO.svg";
import Progress from "./Progress";
import { LifeCBT } from "./LifeAtCbt";
import { OurClient } from "./OurClient";
import { Technologies } from "./Technologies";
import Products from "../products/Products";
import { Banner } from "@/components/Banner";
import { LetTalk } from "./LetTalk";
import ProdLink from "./ProdLink";
import OurServices from "./OurServices";
import OurProduct from "./OurProduct";

const Home: React.FC = () => {    

  const homeBannerText = (
    <>
      <div className="flex flex-wrap max-sm:p-2 justify-center items-start space-y-2 md:space-y-2 lg:space-y-4 xl:space-y-6 space-x-4 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-4">
        {/* Empowering */}
        <div className="flex items-center banner_title justify-center space-y-1">
          <span className="text-primary animate-bounce">E</span>
          <span className="text-white ">mpowering</span>
        </div>

        {/* Digital */}
        <div className="flex items-center banner_title justify-center space-y-1">
          <span className="text-primary  animate-bounce">D</span>
          <span className="text-white ">igital</span>
        </div> 

        {/* Transformation */}
        <div className="flex items-center banner_title justify-center space-y-1">
          <span className="text-primary  animate-bounce">T</span>
          <span className="">ransformation</span>
        </div>
      </div>

      <div className="text-center mt-0 p-2 lg:mt-4 xl:mt-6">
        <p className="para_head p-2 text-white italic leading-relaxed">
          CloudBees Tech providing smart digital solutions solving complex challenges and delivering innovative solutions that help our customers ahead
        </p>
      </div>
    </>
  );

  return (
    <>
      <Banner
        homeLogo={CBTPolygonLogo}
        homeBannerText={homeBannerText}
       
      />
      <OurProduct/>
      <ProdLink />
      <OurServices />
      <Progress />
      <LifeCBT />
      <OurClient />
      <Technologies />
      <LetTalk />
    </>
  );
};

export default Home;
