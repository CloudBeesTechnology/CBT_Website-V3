import Image from "next/image";
import BannerImg from "../assets/HomeSection/Banner/Banner.jpg"
import BubbleImg from "../assets/HomeSection/Banner/Bubble.png"

export const Banner = () => {
    return (
        <div className="relative bg_image overflow-hidden">


            <div className="absolute bg-blend-overlay animate-move bottom-0">
                <Image
                    src={BubbleImg}
                    alt="CBT Banner Image"
                    width={600}
                    height={100}
                    className="animate-spin-custom"
                    // className="animate-ping"
                />
            </div>

        </div>
    );
}

