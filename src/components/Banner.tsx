import Image, { StaticImageData } from "next/image";
import BubbleImg from "../assets/HomeSection/Banner/Images/Bubble.png";

interface BannerProps {
  homeLogo?: string;
  homeBannerText?: React.ReactNode;
  serviceLogo?: StaticImageData | string;
  serviceBannerText?: React.ReactNode;
  aboutBannerText?: React.ReactNode;
  rotate?: boolean;
  BlogsBannerText?: React.ReactNode;
}

export const Banner: React.FC<BannerProps> = ({
  homeLogo,
  homeBannerText,
  serviceLogo,
  serviceBannerText,
  aboutBannerText,
  rotate,
  BlogsBannerText,
}) => {
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
                <div className="animate-bounce-custom-shadow absolute bottom-0 left-10 right-0 h-[6px] max-w-2/4 bg-black blur-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.3)]"></div>
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

      {/* Who we are */}
      {aboutBannerText && (
        <div className="flex items-center justify-center min-h-screen text-white">
          <div className="flex justify-evenly w-full ">
            <div className="flex flex-col items-center justify-center space-y-20">
              <h2 className="title">{aboutBannerText}</h2>
              <h3
                className={`ml-4 title_2 transition-all duration-[1000ms] ease-out ${
                  rotate
                    ? "rotate-0 scale-100 opacity-100"
                    : "rotate-[18deg] scale-50 opacity-0"
                }`}
              >
                <i> Weaving Words Bridging Worlds </i>
              </h3>
            </div>
          </div>
        </div>
      )}

      {/* Blog */}
      {BlogsBannerText && (
        <div className="flex items-center justify-center min-h-screen text-white">
          <div className="flex justify-evenly w-full ">
            <div className="flex flex-col items-center justify-center space-y-20">
              <h2 className="title">{BlogsBannerText}</h2>
              <div
                className={`ml-4 title_2 transition-all duration-[1000ms] ease-out flex flex-col items-center ${
                  rotate ? "scale-100 opacity-100" : "scale-50 opacity-0"
                }`}
              >
                {[
                  "Delve into captivating narratives, thought-provoking insights, and expertly curated",
                  "content that ignites curiosity and fosters meaningful conversations.",
                ].map((text, index) => (
                  <h3 key={index}>
                    <i
                      className={`block transition-all duration-[1000ms] ease-out ${
                        rotate
                          ? "scale-100 opacity-100 delay-300"
                          : "scale-50 opacity-0"
                      }`}
                    >
                      {text}
                    </i>
                  </h3>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
