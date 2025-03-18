// import Image from "next/image";
// import BubbleImg from "../assets/HomeSection/Banner/Images/Bubble.png";

// interface BannerProps {
//     homeLogo: string;
//     homeBannerText: React.ReactNode;
// }

// export const Banner: React.FC<BannerProps> = ({ homeLogo, homeBannerText }) => {
//     return (
//         <div className="relative bg_image overflow-hidden">
//             <div className="absolute bg-blend-overlay animate-move bottom-0">
//                 <Image
//                     src={BubbleImg}
//                     alt="CBT Banner Image"
//                     width={500}
//                     height={100}
//                     className="animate-spin-custom shadow-lg blur-[60px]"
//                 />
//             </div>

//             <div className="flex items-center justify-center min-h-screen px-16 text-white">
//                 <div className="flex justify-between">
//                     <div className="">
//                         <Image
//                             src={homeLogo}
//                             alt="Home Logo"
//                             width={150}
//                             height={50}
//                         />
//                     </div>
//                     <div className="">
//                         <h2 className="text-3xl font-bold">{homeBannerText}</h2>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
