import Image, { StaticImageData }  from "next/image";
import BubbleImg from "../assets/HomeSection/Banner/Images/Bubble.png";

interface BannerProps {
    homeLogo?: StaticImageData | string;
    homeBannerText?: React.ReactNode;
    serviceLogo?: StaticImageData | string;
    serviceBannerText?: React.ReactNode;
}

export const Banner: React.FC<BannerProps> = ({ homeLogo, homeBannerText, serviceLogo, serviceBannerText }) => {
    return (
        <div className="relative bg_image overflow-hidden">
            <div className="absolute bg-blend-overlay animate-move bottom-0">
                <Image
                    src={BubbleImg}
                    alt="CBT Banner Image"
                    width={500}
                    height={100}
                    className="animate-spin-custom shadow-lg blur-[60px]"
                />
            </div>
            {/* Home */}
            {homeLogo && homeBannerText && (
            <div className="flex items-center justify-center min-h-screen text-white">
                <div className="flex justify-evenly w-full">
                    <div className="flex items-center justify-center">
                        {/* Logo Wrapper */}
                        <div className="relative pb-12">
                            <Image
                                src={homeLogo}
                                alt="Home Logo"
                                width={150}
                                height={50}
                                className="animate-bounce-custom"
                            />
                            <div className="animate-bounce-custom-shadow absolute bottom-0 
                            left-10 right-0 h-[6px] max-w-2/4 bg-black blur-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.3)]"></div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <h2 className="text-3xl font-bold">{homeBannerText}</h2>
                    </div>
                </div>
            </div>
            )}

            {/* Service */}
            {serviceLogo && serviceBannerText && (
            <div className="flex items-center justify-center min-h-screen text-white">
                <div className="flex justify-evenly w-full">
                    <div className="flex items-center justify-center">
                        {/* Logo Wrapper */}
                        <div className="pb-12 z-0">
                            <Image
                                src={serviceLogo}
                                alt="Service Logo"
                                width={300}
                                height={150}
                            />
                            {/* <div className="animate-bounce-custom-shadow absolute bottom-0 left-10 right-0 h-[6px] max-w-2/4 bg-black blur-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.3)]"></div> */}
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <h2 className="text-3xl font-bold">{serviceBannerText}</h2>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
};
