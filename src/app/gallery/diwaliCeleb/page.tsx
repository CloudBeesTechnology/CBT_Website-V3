"use client";
import Image from "next/image";
// import diwaliCeleb01 from "../../assets/GallerySection/diwaliCelebImg/diwaliCeleb01.png";
// import diwaliCeleb02 from "../../assets/GallerySection/diwaliCelebImg/diwaliCeleb02.png";
// import diwaliCeleb03 from "../../assets/GallerySection/diwaliCelebImg/diwaliCeleb03.png";
// import diwaliCeleb04 from "../../assets/GallerySection/diwaliCelebImg/diwaliCeleb04.png";

import diwaliCeleb01 from "../../../assets/GallerySection/diwaliCelebImg/diwaliCeleb01.png";
import diwaliCeleb02 from "../../../assets/GallerySection/diwaliCelebImg/diwaliCeleb02.png";
import diwaliCeleb03 from "../../../assets/GallerySection/diwaliCelebImg/diwaliCeleb03.png";
import diwaliCeleb04 from "../../../assets/GallerySection/diwaliCelebImg/diwaliCeleb04.png";
import { useState } from "react";
import Carousel from "../carousel";

interface ImageData {
  id: number;
  imageUrl: string | any;
}

const carousalImage: ImageData[] = [
  {
    id: 1,
    imageUrl: diwaliCeleb01,
  },
  {
    id: 2,
    imageUrl: diwaliCeleb02,
  },
  {
    id: 3,
    imageUrl: diwaliCeleb03,
  },
  {
    id: 4,
    imageUrl: diwaliCeleb04,
  },

  // {
  //   id: 13,
  //   imageUrl: lifeOfCBT13,
  // },
  // {
  //   id: 14,
  //   imageUrl: lifeOfCBT14,
  // },
];
const DiwaliCeleb: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showCarousel, setShowCarousel] = useState<boolean>(false);

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => ((prevIndex + 1) % carousalImage.length) 
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carousalImage.length - 1 : prevIndex - 1
    );
  };

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setShowCarousel(true);
  };
  return (
    <main>
      <header>
        <h3 className="banner_title text-dark_gray center p-6 sm:p-8 lg:p-10 gap-2 ">
          <span className="text-dark_gray text-2xl sm:text-3xl md:text-4xl">
            Diwali
          </span>
          <span className="text-primary text-2xl sm:text-3xl md:text-4xl">
            Celebration
          </span>
        </h3>
      </header>
      <div className="center">
        <div className=" max-w-7xl overflow-hidden">
          {showCarousel && (
            <Carousel
              carousalImage={carousalImage}
              currentIndex={currentIndex}
              handleNext={handleNext}
              handlePrev={handlePrev}
            />
          )}
          <section className="grid grid-cols-2 screen-size p-2">
            {/* Left Column with multiple images stacked */}
            <article className="col-span-1 grid grid-rows-1   h-full ">
              <figure
                className="relative row-span-1 md:border-b-1 md:border-r-1 md:border-primary"
                onClick={() => handleImageClick(0)}
              >
                <Image
                  src={diwaliCeleb01}
                  alt="diwaliCeleb01"
                  className="w-full h-full"
                />
              </figure>
              <figure
                className="relative  row-span-1  md:border-r-1 md:border-primary"
                onClick={() => handleImageClick(2)}
              >
                <Image
                  src={diwaliCeleb03}
                  alt="diwaliCeleb03"
                  className="w-full h-full "
                />
              </figure>
            </article>

            {/* Right Column with two stacked images */}
            <article className="col-span-1 grid grid-rows-1 h-full">
              <figure
                className="relative row-span-1 md:border-b-1  md:border-primary"
                onClick={() => handleImageClick(1)}
              >
                <Image
                  src={diwaliCeleb02}
                  alt="diwaliCeleb02"
                  className="w-full h-full "
                />
              </figure>
              <figure
                className="relative row-span-1 "
                onClick={() => handleImageClick(3)}
              >
                <Image
                  src={diwaliCeleb04}
                  alt="diwaliCeleb04"
                  className="w-full h-full "
                />
              </figure>
            </article>
          </section>
        </div>
      </div>
    </main>
  );
};
export default DiwaliCeleb;
