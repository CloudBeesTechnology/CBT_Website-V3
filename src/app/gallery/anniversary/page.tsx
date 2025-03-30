"use client";
import Image from "next/image";
import anniversary01 from "../../../assets/GallerySection/anniversaryImg/anniversary01.png";
import anniversary02 from "../../../assets/GallerySection/anniversaryImg/anniversary02.png";
import anniversary03 from "../../../assets/GallerySection/anniversaryImg/anniversary03.png";
import anniversary04 from "../../../assets/GallerySection/anniversaryImg/anniversary04.png";
import anniversary05 from "../../../assets/GallerySection/anniversaryImg/anniversary05.png";
import anniversary06 from "../../../assets/GallerySection/anniversaryImg/anniversary06.png";
import anniversary07 from "../../../assets/GallerySection/anniversaryImg/anniversary07.png";
import { useState } from "react";
import Carousel from "../carousel";

interface ImageData {
  id: number;
  imageUrl: string | any;
}

const carousalImage: ImageData[] = [
  {
    id: 1,
    imageUrl: anniversary02,
  },
  {
    id: 2,
    imageUrl: anniversary06,
  },
  {
    id: 3,
    imageUrl: anniversary01,
  },
  {
    id: 4,
    imageUrl: anniversary03,
  },
  {
    id: 5,
    imageUrl: anniversary04,
  },
  {
    id: 6,
    imageUrl: anniversary05,
  },
  {
    id: 7,
    imageUrl: anniversary07,
  },
  
];

const Anniversary: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showCarousel, setShowCarousel] = useState<boolean>(false);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === carousalImage.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carousalImage.length - 1 : prev - 1
    );
  };

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setShowCarousel(true);
  };
  return (
    <main className="my-10">
      <header>
        <h3 className="banner_title  text-dark_gray text-center pb-6 sm:p-8 lg:pb-10 gap-2">
          <span className="text-dark_gray text-2xl sm:text-3xl md:text-4xl">
            1st Year{" "}
          </span>
          <span className="text-primary  text-2xl sm:text-3xl md:text-4xl">
            Anniversary
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
          <section className="grid grid-cols-2 p-2 screen-size">
            {/* Left Column with multiple images stacked */}
            <article className="col-span-1 grid grid-rows-1 h-fit">
            <figure
                className="relative row-span-1 md:border-b-1 md:border-r-1  md:border-primary"
                onClick={() => handleImageClick(5)}
              >
                <Image
                  src={anniversary05}
                  alt="anniversary01"
                  className="w-full h-auto"
                />
              </figure>
              <figure
                className="relative row-span-1 md:border-b-1 md:border-r-1  md:border-primary"
                onClick={() => handleImageClick(0)}
              >
                <Image
                  src={anniversary02}
                  alt="anniversary01"
                  className="w-full h-auto"
                />
              </figure>
              <figure
                className="relative row-span-1 md:border-b-1 md:border-r-1 md:border-primary"
                onClick={() => handleImageClick(1)}
              >
                <Image
                  src={anniversary06}
                  alt="anniversary06"
                  className="w-full h-auto "
                />
              </figure>
              <figure className="relative row-span-1 md:border-r-1 md:border-primary p-2"  onClick={() => handleImageClick(4)}>
                <Image
                  src={anniversary04}
                  alt="anniversary04"
                  className="w-full h-full "
                />
              </figure>
            </article>

            {/* Right Column with two stacked images */}
            <article className="col-span-1 grid grid-rows-1 h-fit">
              <figure
                className="relative row-span-1 md:border-b-1  md:border-primary"
                onClick={() => handleImageClick(2)}
              >
                <Image
                  src={anniversary01}
                  alt="anniversary02"
                  className="w-full h-auto"
                />
              </figure>
              <figure
                className="relative row-span-1 p-2  md:border-b-1  md:border-primary"
                onClick={() => handleImageClick(6)}
              >
                <Image
                  src={anniversary07}
                  alt="anniversary02"
                  className="w-full h-auto"
                />
              </figure>
              <figure
                className="relative row-span-1  "
                onClick={() => handleImageClick(3)}
              >
                <Image
                  src={anniversary03}
                  alt="anniversary05"
                  className="w-full h-auto "
                />
              </figure>
            </article>
          </section>
         
       
        </div>
      </div>
    </main>
  );
};
export default Anniversary;
