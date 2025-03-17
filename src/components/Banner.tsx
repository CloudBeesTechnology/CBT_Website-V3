import Image from "next/image";
import BannerImg from "@/assets/HomeSection/Banner/Banner.jpg";
import BubbleImg from "@/assets/HomeSection/Banner/Bubble.png";

interface BannerProps {
  topic?: boolean;
  firstTitle: string;
  // secondTitle: string;
  thirdTitle?: string;
  fourTitle?: string;
  FTfirstLetter?: string;
  STsecondLetter?: string;
  TTthirdLetter?: string;
  TTfourLetter?: string;
  desc: string;
}

export const Banner: React.FC<BannerProps> = ({
  topic = false,
  firstTitle,
  // secondTitle,
  thirdTitle = "",
  fourTitle = "",
  FTfirstLetter = "",
  STsecondLetter = "",
  TTthirdLetter = "",
  TTfourLetter = "",
  desc,
}) => {
  return (
    <section className="relative bg_image overflow-hidden h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src={BannerImg}
        alt="Banner Background"
        fill
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Bubble Animation */}
      <div className="absolute bg-blend-overlay animate-move bottom-0">
        <Image
          src={BubbleImg}
          alt="Bubble Image"
          width={600}
          height={100}
          className="animate-spin-custom shadow-lg blur-[60px]"
        />
      </div>

      {/* Content Section */}
      <div className="absolute screen-size text-white max-sm:my-28 center flex-col gap-5 border">
        {topic ? (
          <h1 className="sub-heading max-sm:text-[25px] sm:leading-none">
            <span className="text-primary sm:text-[80px]">{FTfirstLetter}</span>
            {firstTitle}{" "}
            {/* <span className="text-primary sm:text-[80px]">{STsecondLetter}</span>
            {secondTitle}{" "} */}
            <span className="text-primary sm:text-[80px]">{TTthirdLetter}</span>
            {thirdTitle}{" "}
            <span className="text-primary sm:text-[80px]">{TTfourLetter}</span>
            {fourTitle}{" "}
          </h1>
        ) : (
          <h1 className="sub-heading max-sm:text-[25px]">
            {firstTitle} 
          </h1>
        )}
        <p className="desc text-[16px] font-light text-center w-full px-3">
          <em>{desc}</em>
        </p>
      </div>
    </section>
  );
};



// import Image from "next/image";
// import BannerImg from "../assets/HomeSection/Banner/Banner.jpg"
// import BubbleImg from "../assets/HomeSection/Banner/Bubble.png"

// export const Banner = () => {
//     return (
//         <section className="relative bg_image overflow-hidden">
//             <div className="absolute bg-blend-overlay animate-move bottom-0">
//                 <Image
//                     src={BubbleImg}
//                     alt="CBT Banner Image"
//                     width={600}
//                     height={100}
//                     className="animate-spin-custom shadow-lg blur-[60px]"
//                     // className="animate-ping"
//                 />
//             </div>
//         </section>
//     );
// }

