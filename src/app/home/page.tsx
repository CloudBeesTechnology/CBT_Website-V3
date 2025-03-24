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
      <div className="flex flex-wrap justify-center items-start space-y-2 md:space-y-2 lg:space-y-4 xl:space-y-6 space-x-4 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-4">
        {/* Empowering */}
        <div className="flex items-center justify-center space-y-1">
          <span className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl animate-bounce">E</span>
          <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">mpowering</span>
        </div>

        {/* Digital */}
        <div className="flex items-center justify-center space-y-1">
          <span className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl animate-bounce">D</span>
          <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">igital</span>
        </div>

        {/* Transformation */}
        <div className="flex items-center justify-center space-y-1">
          <span className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl animate-bounce">T</span>
          <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">ransformation</span>
        </div>
      </div>

      <div className="text-center mt-0 lg:mt-4 xl:mt-6">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white italic leading-relaxed">
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
