"use client";
import Image from "next/image";
import pongalCeleb01 from "../../../assets/GallerySection/pongalCelebImg/pongalCeleb01.png";
import pongalCeleb02 from "../../../assets/GallerySection/pongalCelebImg/pongalCeleb02.png";
import pongalCeleb03 from "../../../assets/GallerySection/pongalCelebImg/pongalCeleb03.png";
import pongalCeleb04 from "../../../assets/GallerySection/pongalCelebImg/pongalCeleb04.png";
import pongalCeleb05 from "../../../assets/GallerySection/pongalCelebImg/pongalCeleb05.png";
import { useEffect, useState } from "react";
import Carousel from "../carousel";
import { useGalleryContext } from "../hooksForGallery/galleryProvider";

interface ImageData {
  id: number;
  imageUrl: string | any;
}

const carousalImg: ImageData[] = [
  {
    id: 1,
    imageUrl: pongalCeleb01,
  },
  {
    id: 2,
    imageUrl: pongalCeleb02,
  },
  {
    id: 3,
    imageUrl: pongalCeleb03,
  },
  {
    id: 4,
    imageUrl: pongalCeleb04,
  },
  {
    id: 5,
    imageUrl: pongalCeleb05,
  },
];
const PongalCelebComp: React.FC = () => {
  const {
    setCarousalImage,
    carousalImage,
    currentIndex,
    showCarousel,
    handleNext,
    handlePrev,
    handleImageClick,
  } = useGalleryContext();

  useEffect(() => {
    if (carousalImg) {
      setCarousalImage(carousalImg);
    }
  }, []);
  return (
    <main className="my-10">
      <header>
        <h3 className="banner_title text-dark_gray text-center pb-6 sm:p-8 lg:pb-10 gap-2">
          <span className="text-dark_gray text-2xl sm:text-3xl md:text-4xl">
            Pongal{" "}
          </span>
          <span className="text-primary  text-2xl sm:text-3xl md:text-4xl">
            Celebration
          </span>
        </h3>
      </header>

      <div className="center">
        <div className=" max-w-7xl  overflow-hidden">
          {showCarousel && (
            <Carousel
              carousalImage={carousalImage}
              currentIndex={currentIndex}
              handleNext={handleNext}
              handlePrev={handlePrev}
            />
          )}
          <section className="grid grid-cols-2 screen-size">
            {/* Left Column with multiple images stacked */}
            <article className="col-span-1 grid grid-rows-1 h-fit  ">
              <figure
                className="relative row-span-1  p-3 md:border-b-1 md:border-r-1 md:border-primary "
                onClick={() => handleImageClick(4)}
              >
                <Image
                  src={pongalCeleb05}
                  alt="pongalCeleb05"
                  className="w-full h-auto "
                />
              </figure>
              <figure
                className="relative row-span-1  p-2 md:border-r-1 md:border-primary"
                onClick={() => handleImageClick(0)}
              >
                <Image
                  src={pongalCeleb01}
                  alt="pongalCeleb01"
                  className="w-full h-auto"
                />
              </figure>
            </article>

            {/* Right Column with two stacked images */}
            <article className="col-span-1 grid grid-rows-1 h-fit ">
              <figure
                className="relative row-span-1  p-2 md:border-b-1 md:border-primary"
                onClick={() => handleImageClick(2)}
              >
                <Image
                  src={pongalCeleb03}
                  alt="pongalCeleb03"
                  className="w-full h-auto"
                />
              </figure>
              <figure
                className="relative row-span-1  p-2"
                onClick={() => handleImageClick(3)}
              >
                <Image
                  src={pongalCeleb04}
                  alt="pongalCeleb04"
                  className="w-full h-auto "
                />
              </figure>
              <figure
                className="relative row-span-1  p-2 md:border-t-1 md:border-primary"
                onClick={() => handleImageClick(1)}
              >
                <Image
                  src={pongalCeleb02}
                  alt="pongalCeleb02"
                  className="w-full h-auto"
                />
              </figure>
            </article>
          </section>
        </div>
      </div>
    </main>
  );
};
export default PongalCelebComp;
