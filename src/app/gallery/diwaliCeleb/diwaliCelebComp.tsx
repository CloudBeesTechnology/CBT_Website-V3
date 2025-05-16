"use client";
import Image from "next/image";
import diwaliCeleb01 from "../../../../public/assets/GallerySection/diwaliCelebImg/diwaliCeleb01.png";
import diwaliCeleb02 from "../../../../public/assets/GallerySection/diwaliCelebImg/diwaliCeleb02.png";
import diwaliCeleb03 from "../../../../public/assets/GallerySection/diwaliCelebImg/diwaliCeleb03.png";
import diwaliCeleb04 from "../../../../public/assets/GallerySection/diwaliCelebImg/diwaliCeleb04.png";
import diwaliCeleb05 from "../../../../public/assets/GallerySection/diwaliCelebImg/diwaliCeleb05.png";
import diwaliCeleb06 from "../../../../public/assets/GallerySection/diwaliCelebImg/diwaliCeleb06.png";
import diwaliCeleb07 from "../../../../public/assets/GallerySection/diwaliCelebImg/diwaliCeleb07.png";
import diwaliCeleb08 from "../../../../public/assets/GallerySection/diwaliCelebImg/diwaliCeleb08.png";
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

  {
    id: 5,
    imageUrl: diwaliCeleb05,
  },
  {
    id: 6,
    imageUrl: diwaliCeleb06,
  },
  {
    id: 7,
    imageUrl: diwaliCeleb07,
  },
  {
    id: 8,
    imageUrl: diwaliCeleb08,
  },
];
const DiwaliCelebComp: React.FC = () => {
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
                Diwali
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
          <section className="grid grid-cols-2 screen-size ">
            <article className="col-span-1 grid grid-rows-1 h-full">
              <figure
                className="relative row-span-1 md:border-b-1 md:border-t-1 md:border-r-1 md:border-primary"
                onClick={() => handleImageClick(4)}
              >
                <Image
                  src={diwaliCeleb05}
                  alt="diwaliCeleb05"
                  className="w-full h-full "
                />
              </figure>
              <figure
                className="relative row-span-1 md:border-r-1  md:border-primary"
                onClick={() => handleImageClick(5)}
              >
                <Image
                  src={diwaliCeleb06}
                  alt="diwaliCeleb06"
                  className="w-full h-full "
                />
              </figure>
            </article>
            <article className="col-span-1 grid grid-rows-1 h-full">
              <figure
                className="relative row-span-1 md:border-b-1 md:border-t-1  md:border-primary"
                onClick={() => handleImageClick(6)}
              >
                <Image
                  src={diwaliCeleb07}
                  alt="diwaliCeleb07"
                  className="w-full h-full "
                />
              </figure>
              <figure
                className="relative row-span-1"
                onClick={() => handleImageClick(7)}
              >
                <Image
                  src={diwaliCeleb08}
                  alt="diwaliCeleb08"
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
export default DiwaliCelebComp;
