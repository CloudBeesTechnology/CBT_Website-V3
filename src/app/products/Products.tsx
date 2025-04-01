import Image from "next/image";
import FeatureCard from "@/components/FeatureCard";
import image1 from "../../assets/HomeSection/ContentImages/HRMS.png";
import image2 from "../../assets/HomeSection/ContentImages/home-2.png";
import image3 from "../../assets/HomeSection/ContentImages/FLEET MANAGEMENT.png";
import logo1 from "../../assets/HomeSection/ClientLogos/Hr_360e_logo.png";
import image4 from "../../assets/HomeSection/ClientLogos/css device.png";
import { AiFillCaretRight } from "react-icons/ai";

export default function ProductPage() {
  const features = [
    {
      id: 1,
      clientLogo: logo1,
      description:
        "The HRMS Portal and Employee Login System is a robust, secure, and highly customizable solution designed to automate and optimize various HR processes, making them more efficient and accessible.",
      imageSrc: image1,
    }
  ];

  const featuresPoints = [
    {
      id: 2,
      title: "POS",
      points: [
        "Orders sent directly to the kitchen display.",
        "Contactless payment support (Apple Pay, Google Pay, NFC).",
        "Secure cloud storage and backup.",
        "Real-time tracking of ingredients and menu item availability.",
      ],
      imageSrc: image2,
    },
    {
      id: 3,
      title: "FLEET MANAGEMENT",
      points: [
        "Real-time vehicle location updates.",
        "Integrated Google Maps for easy routing.",
        "Cash & Digital Payments Easy payout management.",
        "Ensure passenger safety.",
      ],
      imageSrc: image3,
    },
    {
      id: 4,
      title: "CLOUD STAFFING SERVICE",
      points: [
        "Connects users with skilled professionals.",
        "Easy booking and management.",
        "Tech-driven seamless experience.",
        "Services: cleaning, plumbing, painting, electrical, etc.",
        "Convenient, reliable, and high-quality.",
      ],
      imageSrc: image4,
    },
  ];

  return (
    <section className="screen-size flex flex-col space-y-12 my-14 md:space-y-4 p-3 w-full ">
        <h2 className="title text-center text-primary">HR360E
      </h2>
      {features.map((feature) => (
        <FeatureCard key={feature.id} {...feature} isEven={feature.id % 2 === 0} />
      ))}

      {featuresPoints.map((feature) => {
        const isEven = feature.id % 2 === 0;
        return (
             <div
                     key={feature.id}
                     className={`flex justify-between items-center flex-col md:flex-row md:text-left sm:p-2 ${
                       isEven ? "md:flex-row-reverse" : ""
                     }`}
                   >   
                     <div className="w-full md:w-[600px] center ">
                       <Image src={feature.imageSrc} alt={feature.title} width={550}/>
                     </div>
                     <div className="  flex flex-col  max-sm:mt-7 sm:mx-2 ">
                      <div className="w-[1000px]:w-[450px]">
                          <h3 className="sub_title leading-snug text-primary mb-3 sm:mb-5">
                         {feature.title}
                       </h3>
                       <div className="text-gray  list-disc list-inside para w-full">
                         {feature.points.map((point, index) => (
                           <p key={index} className="flex gap-5 ">
                             <span className="text-primary pt-1"><AiFillCaretRight/></span> {point}</p>
                         ))}
                       </div>
                       </div>
                     </div>
                   </div>
        );
      })}
    </section>
  );
}