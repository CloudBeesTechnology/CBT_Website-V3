import Image from "next/image";
import React from "react";
import { TiChevronLeft } from "react-icons/ti";
import { TiChevronRight } from "react-icons/ti";

interface ImageData {
  id: number;
  imageUrl: any;
}
interface CarouselProps {
  carousalImage: ImageData[];
  currentIndex: number;
  handleNext: () => void;
  handlePrev: () => void;
}

const Carousel: React.FC<CarouselProps> = ({
  carousalImage,
  currentIndex,
  handleNext,
  handlePrev,
}) => {
  return (
    <div className="screen-size relative overflow-hidden">
      <div className="flex relative justify-center max-h-[700px] ">
        <button
          onClick={handlePrev}
          className="absolute md:p-2 left-3 top-[48%] text-center text-dark_gray md:text-4xl text-3xl  bg-medium_lite_gray rounded-full cursor-pointer z-10"
        >
          <TiChevronLeft className="" />
        </button>

        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carousalImage.map((img, index) => (
            <div key={img.id} className="w-full h-full flex-shrink-0 center">
              <Image
                src={img.imageUrl}
                alt={`Slide ${index + 1}`}
                className="w-auto md:h-full h-auto"
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute md:p-2  right-3 top-[48%] text-dark_gray  md:text-4xl text-3xl bg-medium_lite_gray rounded-full cursor-pointer z-10"
        >
          <TiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
