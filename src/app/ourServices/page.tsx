import { Banner } from "@/components/Banner";

// src/app/ourServices/page.tsx
const OurServices: React.FC = () => {
  const serviceBannerText = (
    <>
      <div>
        <div className="flex justify-center items-start space-x-10"></div>
        <div className="flex items-center space-y-1">
          <span className="text-white text_size_1">Comprehensive modernization of an Application</span>
        </div>
      </div>
    </>
  )
  return (
    <div className="container mx-auto text-center mt-10">
      <Banner serviceBannerText={serviceBannerText} />
    </div>
  );
}
export default OurServices;