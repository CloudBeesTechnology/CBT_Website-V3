"use client";
import Image from "next/image";
import lifeOfCBT01 from "../../../../public/assets/GallerySection/lifeOfCBT/lifeOfCBT01.png";
import lifeOfCBT02 from "../../../../public/assets/GallerySection/lifeOfCBT/lifeOfCBT02.png";
import lifeOfCBT03 from "../../../../public/assets/GallerySection/lifeOfCBT/lifeOfCBT03.png";
import lifeOfCBT04 from "../../../../public/assets/GallerySection/lifeOfCBT/lifeOfCBT04.png";

import lifeOfCBT05 from "../../../../public/assets/GallerySection/lifeOfCBT/lifeOfCBT05.png";
import lifeOfCBT06 from "../../../../public/assets/GallerySection/lifeOfCBT/lifeOfCBT06.png";
import lifeOfCBT07 from "../../../../public/assets/GallerySection/lifeOfCBT/lifeOfCBT07.png";
import lifeOfCBT08 from "../../../../public/assets/GallerySection/lifeOfCBT/lifeOfCBT08.png";
import lifeOfCBT09 from "../../../../public/assets/GallerySection/lifeOfCBT/lifeOfCBT09.png";
import lifeOfCBT10 from "../../../../public/assets/GallerySection/lifeOfCBT/lifeOfCBT10.png";
import lifeOfCBT11 from "../../../../public/assets/GallerySection/lifeOfCBT/lifeOfCBT11.png";
import lifeOfCBT12 from "../../../../public/assets/GallerySection/lifeOfCBT/lifeOfCBT12.png";
import lifeOfCBT13 from "../../../../public/assets/GallerySection/lifeOfCBT/lifeOfCBT13.png";
import lifeOfCBT14 from "../../../../public/assets/GallerySection/lifeOfCBT/lifeOfCBT14.png";
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
    imageUrl: lifeOfCBT01,
  },
  {
    id: 2,
    imageUrl: lifeOfCBT02,
  },
  {
    id: 3,
    imageUrl: lifeOfCBT03,
  },
  {
    id: 4,
    imageUrl: lifeOfCBT14,
  },
  {
    id: 5,
    imageUrl: lifeOfCBT05,
  },
  {
    id: 6,
    imageUrl: lifeOfCBT13,
  },
  {
    id: 7,
    imageUrl: lifeOfCBT08,
  },
  {
    id: 8,
    imageUrl: lifeOfCBT07,
  },
  {
    id: 9,
    imageUrl: lifeOfCBT12,
  },
  {
    id: 10,
    imageUrl: lifeOfCBT10,
  },
  {
    id: 11,
    imageUrl: lifeOfCBT11,
  },


];

const LifeOfCBTComp: React.FC = () => {
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
              Life{" "}
            </span>
            <span className="text-primary text-2xl sm:text-3xl md:text-4xl">
              Of CBT
            </span>
          </h3>
        </div>
      </div>

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

          <section className="grid grid-cols-2  p-2 screen-size">
            {/* Left Column with multiple images stacked */}
            {/* md:border md:border-primary */}
            <article className="col-span-1 grid grid-rows-1 h-full">
              <figure
                className="relative row-span-1 md:border-b-1 md:border-r-1 md:border-primary "
                onClick={() => handleImageClick(0)}
              >
                <Image
                  src={lifeOfCBT01}
                  alt="lifeOfCBT01"
                  className="w-full h-full"
                />
              </figure>
              <figure
                className="relative row-span-1 md:border-b-1 md:border-r-1 md:border-primary "
                onClick={() => handleImageClick(1)}
              >
                <Image
                  src={lifeOfCBT02}
                  alt="lifeOfCBT03"
                  className="w-full h-full "
                />
              </figure>
            </article>

            {/* Right Column with two stacked images */}
            <article className="col-span-1 grid grid-rows-1 h-full">
              <figure
                className="relative row-span-1 md:border-b-1  md:border-primary "
                onClick={() => handleImageClick(2)}
              >
                <Image
                  src={lifeOfCBT03}
                  alt="lifeOfCBT02"
                  className="w-full h-full"
                />
              </figure>
              <figure
                className="relative row-span-1 md:border-b-1  md:border-primary "
                onClick={() => handleImageClick(3)}
              >
                <Image
                  src={lifeOfCBT14}
                  alt="lifeOfCBT14"
                  className="w-full h-full "
                />
              </figure>
            </article>
          </section>
          <section className="screen-size py-2 px-5">
            <article className="col-span-1 grid ">
              <figure className="relative" onClick={() => handleImageClick(4)}>
                <Image
                  src={lifeOfCBT05}
                  alt="Image 5"
                  className="w-full h-full "
                />
              </figure>
            </article>
          </section>

          <section className="grid grid-cols-2 screen-size p-2">
            {/* Left Column with multiple images stacked */}
            <article className="col-span-1 grid grid-rows-1 h-full ">
              <figure
                className="relative row-span-1 md:border-y-1 md:border-r-1 md:border-primary "
                onClick={() => handleImageClick(5)}
              >
                <Image
                  src={lifeOfCBT13}
                  alt="lifeOfCBT06"
                  className="w-full h-full "
                />
              </figure>
              <figure
                className="relative row-span-1  md:border-b-1 md:border-r-1 md:border-primary "
                onClick={() => handleImageClick(6)}
              >
                <Image
                  src={lifeOfCBT08}
                  alt="lifeOfCBT08"
                  className="w-full h-full "
                />
              </figure>
            </article>

            {/* Right Column with two stacked images */}
            <article className="col-span-1 grid grid-rows-1  h-full ">
              <figure
                className="relative row-span-1 md:border-y-1 md:border-primary "
                onClick={() => handleImageClick(7)}
              >
                <Image
                  src={lifeOfCBT07}
                  alt="lifeOfCBT07"
                  className="w-full h-full "
                />
              </figure>
              <figure
                className="relative row-span-1 md:border-b-1 md:border-primary "
                onClick={() => handleImageClick(8)}
              >
                <Image
                  src={lifeOfCBT12}
                  alt="lifeOfCBT09"
                  className="w-full h-full "
                />
              </figure>
              <figure
                className="relative row-span-1 md:border-b-1 md:border-primary"
                onClick={() => handleImageClick(9)}
              >
                <Image
                  src={lifeOfCBT10}
                  alt="lifeOfCBT10"
                  className="w-full h-full "
                />
              </figure>
            </article>
          </section>
          <section className="screen-size p-2">
            <article className="col-span-1 grid ">
              <figure className="relative" onClick={() => handleImageClick(10)}>
                <Image
                  src={lifeOfCBT11}
                  alt="lifeOfCBT11"
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
export default LifeOfCBTComp;
