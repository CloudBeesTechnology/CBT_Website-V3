"use client";
import Image, { StaticImageData } from "next/image";

interface FeatureCardProps {
  title?: string;
  description: string;
  imageSrc: StaticImageData;
  clientLogo?:StaticImageData,
  isEven: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, imageSrc, clientLogo, isEven }) => {
  return (
    <div className={` flex justify-between items-center flex-col sm:my-14  md:flex-row md:text-left sm:p-2 w-full  ${isEven ? "md:flex-row-reverse" : ""}`}>
      <div className="w-full max-w-[600px] center max-sm:mt-5 ">
        <Image src={imageSrc} alt="Image not found" width={550} />
      </div>
      <div className="w-full  sm:px-2 flex  flex-col items-center text-center max-sm:mt-7 sm:mx-2 ">
      <div className="gap-2 sm:gap-5 center max-lg:flex-col mb-3">
  {clientLogo && <Image src={clientLogo} alt="Image not found" className="max-w-[200px] " />}
  {title && <h3 className="sub_title text-dark_gray ">
    <span className="text-primary">{title.split(" ")[0]}</span> {title.split(" ").slice(1).join(" ")}
  </h3>}
</div>    
        <p className="text-gray max-w-4xl para">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;



// import Image, { StaticImageData } from "next/image";

// interface FeatureCardProps {
//   title?: string;
//   description: string;
//   imageSrc: StaticImageData;
//   clientLogo?:StaticImageData,
//   isEven: boolean;
// }

// const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, imageSrc, clientLogo, isEven }) => {
//   return (
//     <div className={`center flex-col md:flex-row md:text-left sm:p-2 w-full  ${isEven ? "md:flex-row-reverse" : ""}`}>
//       <div className="w-full md:w-1/2 center ">
//         <Image src={imageSrc} alt="Image not found" width={400} height={250}  />
//       </div>
//       <div className="w-full md:w-1/2 sm:px-2 flex  flex-col items-center text-center max-sm:mt-7 sm:mx-2">
//       <div className="gap-2 sm:gap-5 center flex-col max-sm:flex-col mb-5">
//   {clientLogo && <Image src={clientLogo} alt="Image not found" className=" w-full max-w-[150px] h-[50px]" />}
//   {title && <h3 className="title w-[500px] text-dark_gray text-left">
//     <span className="text-primary">{title.split(" ")[0]}</span> {title.split(" ").slice(1).join(" ")}
//   </h3>}
//         <p className="text-gray max-w-lg text-left para">{description}</p>
// </div>    
//       </div>
//     </div>
//   );
// };

// export default FeatureCard;
