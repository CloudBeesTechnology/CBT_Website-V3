import { Banner } from "@/components/Banner";
import CBTPolygonLogo from "../../assets/HomeSection/Banner/svg/CBT_LOGO.svg";
import Count from "./Count";
import Progress from "./Progress";
import { LifeCBT } from "./LifeAtCbt";
import { OurClient } from "./OurClient";


const Home: React.FC = () => {

  const homeBannerText = (
    <>
      <div className="flex justify-center items-start space-x-10">
        {/* Empowering */}
        <div className="flex items-center space-y-1">
          <span className="text-primary text_size_1 animate-bounce">E</span>
          <span className="text-white text_size_1">mpowering</span>
        </div>

        {/* Digital */}
        <div className="flex items-center space-y-1">
          <span className="text-primary text_size_1 animate-bounce">D</span>
          <span className="text-white text_size_1">igital</span>
        </div>

        {/* Transformation */}
        <div className="flex items-center space-y-1">
          <span className="text-primary text_size_1 animate-bounce">T</span>
          <span className="text-white text_size_1">ransformation</span>
        </div>

      </div>
      <div className="text-center mt-6">
        <p className="text_size_2 text-white italic leading-relaxed">
          CloudBees Tech providing smart digital solutions solving <br/> complex challenges and delivering innovative solutions that <br/> help our customers ahead
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
      <Count/>
      <Progress/>
      <LifeCBT/>
      <OurClient/>
    </>
  );
};

export default Home;
