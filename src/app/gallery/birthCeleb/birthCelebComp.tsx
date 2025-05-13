"use client";
import Image from "next/image";
import birthCeleb01 from "../../../../public/assets/GallerySection/birthCelebImg/birthCeleb01.jpg";
import birthCeleb02 from "../../../../public/assets/GallerySection/birthCelebImg/birthCeleb02.jpg";
import birthCeleb03 from "../../../../public/assets/GallerySection/birthCelebImg/birthCeleb03.jpg";
import birthCeleb05 from "../../../../public/assets/GallerySection/birthCelebImg/birthCeleb05.jpg";
import birthCeleb04 from "../../../../public/assets/GallerySection/birthCelebImg/birthCeleb04.jpg";
import birthCeleb06 from "../../../../public/assets/GallerySection/birthCelebImg/birthCeleb06.jpg";
import birthCeleb07 from "../../../../public/assets/GallerySection/birthCelebImg/birthCeleb07.jpg";
import birthCeleb08 from "../../../../public/assets/GallerySection/birthCelebImg/birthCeleb08.jpg";
import birthCeleb09 from "../../../../public/assets/GallerySection/birthCelebImg/birthCeleb09.jpg";
import birthCeleb10 from "../../../../public/assets/GallerySection/birthCelebImg/birthCeleb10.jpg";

import { useEffect } from "react";
import Carousel from "../carousel";
import { useGalleryContext } from "../hooksForGallery/galleryProvider";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

interface ImageData {
  id: number;
  imageUrl: string | any;
}



const carousalImg: ImageData[] = [
  {
    id: 1,
    imageUrl: birthCeleb03,
  },
  {
    id: 2,
    imageUrl: birthCeleb02,
  },
  {
    id: 3,
    imageUrl: birthCeleb08,
  },
  {
    id: 4,
    imageUrl: birthCeleb04,
  },
  {
    id: 5,
    imageUrl: birthCeleb05,
  },
  {
    id: 6,
    imageUrl: birthCeleb10,
  },
  {
    id: 7,
    imageUrl: birthCeleb06,
  },
  {
    id: 8,
    imageUrl: birthCeleb09,
  },
 
];

const BirthCelebComp: React.FC = () => {
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
        <div className="p-4 sm:p-6 lg:p-8 w-full flex items-center justify-between my-3 sm:my-5 px-4 sm:px-12 relative">
          <Link
            href="/gallery"
            className="text-lg sm:text-xl text-dark_gray z-10"
            aria-label="Go back to gallery"
          >
            <FaArrowLeft />
          </Link>

          <div className="absolute left-0 right-0 flex justify-center">
            <h3 className="banner_title text-dark_gray text-center p-6 sm:p-8 lg:p-10 gap-2">
              <span className="text-dark_gray text-2xl sm:text-3xl md:text-4xl">
                Birthday{" "}
              </span>
              <span className="text-primary text-2xl sm:text-3xl md:text-4xl">
                Celebration
              </span>
            </h3>
          </div>
        </div>
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
          <section className="grid grid-cols-2 screen-size ">
            {/* Left Column with multiple images stacked */}
            <article className="col-span-1 grid grid-rows-1 h-full">
              <figure
                className="relative row-span-1 md:border-b-1 md:border-r-1 md:border-primary p-1"
                onClick={() => handleImageClick(0)}
              >
                <Image
                  src={birthCeleb03}
                  alt="birthCeleb03"
                  className="w-full h-full"
                />
              </figure>
              <figure
                className="relative  row-span-1  md:border-r-1 md:border-primary p-1"
                onClick={() => handleImageClick(2)}
              >
                <Image
                  src={birthCeleb08}
                  alt="birthCeleb08"
                  className="w-auto h-auto"
                />
              </figure>
            </article>

            {/* Right Column with two stacked images */}
            <article className="col-span-1 grid grid-rows-1 h-full">
              <figure
                className="relative row-span-1 md:border-b-1  md:border-primary p-1"
                onClick={() => handleImageClick(1)}
              >
                <Image
                  src={birthCeleb02}
                  alt="birthCeleb07"
                  className="w-full h-full "
                />
              </figure>
              <figure
                className="relative row-span-1 p-1"
                onClick={() => handleImageClick(3)}
              >
                <Image
                  src={birthCeleb04}
                  alt="birthCeleb02"
                  className="w-full h-full "
                />
              </figure>
            </article>
          </section>
          <section className="grid grid-cols-2 screen-size ">
            {/* Left Column with multiple images stacked */}
            <article className="col-span-1 grid grid-rows-1 h-full">
              <figure
                className="relative row-span-1 md:border-b-1 md:border-t-1 md:border-r-1 md:border-primary p-1"
                onClick={() => handleImageClick(4)}
              >
                <Image
                  src={birthCeleb05}
                  alt="birthCeleb05"
                  className="w-full h-full "
                />
              </figure>
              <figure
                className="relative row-span-1 md:border-r-1  md:border-primary p-1"
                onClick={() => handleImageClick(5)}
              >
                <Image
                  src={birthCeleb10}
                  alt="birthCeleb10"
                  className="w-full h-full "
                />
              </figure>
            </article>
            {/* Right Column with two stacked images */}

            <article className="col-span-1 grid grid-rows-1 h-full">
              <figure
                className="relative row-span-1 md:border-b-1 md:border-t-1  md:border-primary p-1"
                onClick={() => handleImageClick(6)}
              >
                <Image
                  src={birthCeleb06}
                  alt="birthCeleb06"
                  className="w-full h-full "
                />
              </figure>
              <figure
                className="relative row-span-1 p-1"
                onClick={() => handleImageClick(7)}
              >
                <Image
                  src={birthCeleb09}
                  alt="birthCeleb09"
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
export default BirthCelebComp;
