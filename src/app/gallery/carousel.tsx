import Image from "next/image";
import React from "react";
import { FaCircleChevronRight } from "react-icons/fa6";
import { FaCircleChevronLeft } from "react-icons/fa6";

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
    <div className="screen-size relative">
      {/* Image Carousel */}
      <div className="flex relative justify-center max-h-[700px]">
        <button
          onClick={handlePrev}
          className="absolute left-10 top-[48%] text-medium_lite_gray  md:text-4xl text-2xl  bg-dark_gray rounded-full cursor-pointer"
        >
          {/* Prev */}
          <FaCircleChevronLeft />
        </button>

        <div className="top-0 transition-all duration-500 ease-in-out fade-in opacity-100">
          <Image
            src={carousalImage[currentIndex]?.imageUrl}
            alt={`${carousalImage[currentIndex]?.id}`}
            className="w-full h-full"
          />
        </div>

        <button
          onClick={handleNext}
          className="absolute right-10 top-[48%] text-medium_lite_gray md:text-4xl text-2xl bg-dark_gray rounded-full cursor-pointer"
        >
          {/* Next */}
          <FaCircleChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
