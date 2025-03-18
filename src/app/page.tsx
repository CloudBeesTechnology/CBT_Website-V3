import { Banner } from "@/components/Banner";
import CBTPolygonLogo from "../assets/HomeSection/Banner/svg/CBT_LOGO.svg";


const Home: React.FC = () => {

  const homeBannerText = (
    <>
      <div className="flex justify-center items-start space-x-10">
        {/* Empowering */}
        <div className="flex items-center space-y-1">
          <span className="text-yellow text-5xl animate-bounce">E</span>
          <span className="text-white text-3xl">mpowering</span>
        </div>

        {/* Digital */}
        <div className="flex items-center space-y-1">
          <span className="text-yellow text-5xl animate-bounce">D</span>
          <span className="text-white text-3xl">igital</span>
        </div>

        {/* Transformation */}
        <div className="flex items-center space-y-1">
          <span className="text-yellow text-5xl animate-bounce">T</span>
          <span className="text-white text-3xl">ransformation</span>
        </div>

      </div>
      <div className="text-center mt-6">
        <p className="text-lg text-white italic font-medium">
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
      <div className="flex items-center justify-center">
        <div className="container mx-auto text-center mt-10">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Website!</h1>
          <p className="text-lg">This is the home page. You can find all the information about our services, products, and much more here.</p>
        </div>
      </div>
    </>
  );
};

export default Home;
