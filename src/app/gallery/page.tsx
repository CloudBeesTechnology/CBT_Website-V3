"use client";

import { Banner } from "@/components/Banner";
import React, { useEffect, useState } from "react";
import lifeOfCBT01 from "../../assets/GallerySection/lifeOfCBT/lifeOfCBT01.png";
import lifeOfCBT02 from "../../assets/GallerySection/lifeOfCBT/lifeOfCBT02.png";
import lifeOfCBT03 from "../../assets/GallerySection/lifeOfCBT/lifeOfCBT03.png";
import lifeOfCBT04 from "../../assets/GallerySection/lifeOfCBT/lifeOfCBT04.png";

import lifeOfCBT05 from "../../assets/GallerySection/lifeOfCBT/lifeOfCBT05.png";
import lifeOfCBT06 from "../../assets/GallerySection/lifeOfCBT/lifeOfCBT06.png";
import lifeOfCBT07 from "../../assets/GallerySection/lifeOfCBT/lifeOfCBT07.png";
import lifeOfCBT08 from "../../assets/GallerySection/lifeOfCBT/lifeOfCBT08.png";
import lifeOfCBT09 from "../../assets/GallerySection/lifeOfCBT/lifeOfCBT09.png";
import lifeOfCBT10 from "../../assets/GallerySection/lifeOfCBT/lifeOfCBT10.png";
import lifeOfCBT11 from "../../assets/GallerySection/lifeOfCBT/lifeOfCBT11.png";

import Image from "next/image";
import { GalleryDetails } from "./galleryDetails";

const Gallery: React.FC = () => {
  const [rotate, setRotate] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setRotate(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const BannerTitleText: React.ReactNode = (
    <div className="flex justify-center items-center space-x-10">
      <div className="flex flex-col items-center space-y-1">
        <span className="text-white text_size_1">
          Capturing Moments, Creating Memories
        </span>
      </div>
    </div>
  );

  const BannerTextArray = [
    "Delve into captivating narratives, thought-provoking insights, and expertly curated",
    "content that ignites curiosity and fosters meaningful conversations.",
  ];

  return (
    <main>
      <Banner
        BannerTitleText={BannerTitleText}
        rotate={rotate}
        BannerTextArray={BannerTextArray}
      />

      <h3 className="title_4 text-dark_gray center p-10">
        <span className="text-dark_gray">Diwali</span>
        <span className="text-primary">Celebration</span>
      </h3>
      <section className="grid grid-cols-2 gap-20 p-10 screen-size">
        {/* Left Column with multiple images stacked */}
        <div className="col-span-1 grid grid-rows-2 gap-4  h-full">
          <div className="relative">
            <Image
              src={lifeOfCBT01}
              alt="Image 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src={lifeOfCBT02}
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column with two stacked images */}
        <div className="col-span-1 grid grid-rows-2 gap-4  h-full">
          <div className="relative">
            <Image
              src={lifeOfCBT03}
              alt="Image 5"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src={lifeOfCBT04}
              alt="Image 6"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="screen-size gap-20 p-10">
        <div className="col-span-1 grid ">
          <div className="relative">
            <Image
              src={lifeOfCBT05}
              alt="Image 5"
              className="w-full h-fit object-cover"
            />
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 screen-size gap-20 p-10">
        {/* Left Column with multiple images stacked */}
        <div className="col-span-1 grid grid-rows-2 gap-4 h-full">
          <div className="relative">
            <Image
              src={lifeOfCBT06}
              alt="Image 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src={lifeOfCBT07}
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column with two stacked images */}
        <div className="col-span-1 grid grid-rows-3 gap-4  h-full ">
          <div className="relative">
            <Image
              src={lifeOfCBT08}
              alt="Image 5"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src={lifeOfCBT09}
              alt="Image 6"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src={lifeOfCBT10}
              alt="Image 6"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="screen-size gap-20 p-10">
        <div className="col-span-1 grid ">
          <div className="relative">
            <Image
              src={lifeOfCBT11}
              alt="Image 5"
              className="w-full h-fit object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <h3 className="title_4 text-dark_gray center p-10">
          <span className="text-dark_gray">Diwali</span>
          <span className="text-primary">Celebration</span>
        </h3>
        <div className="grid grid-cols-2  screen-size gap-20 p-10">
          {/* Left Column with multiple images stacked */}
          <div className="col-span-1 grid grid-rows-2 gap-4  h-full">
            <div className="relative">
              <Image
                src={lifeOfCBT01}
                alt="Image 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative">
              <Image
                src={lifeOfCBT02}
                alt="Image 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column with two stacked images */}
          <div className="col-span-1 grid grid-rows-2 gap-4  h-full">
            <div className="relative">
              <Image
                src={lifeOfCBT03}
                alt="Image 5"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative">
              <Image
                src={lifeOfCBT04}
                alt="Image 6"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <main className="screen-size">
        <header>
          <h2 className="title_4 center ">
            <span className="text-dark_gray">Life</span>
            <span className="text-primary">of CBT</span>
          </h2>
        </header>
        <div className="flex flex-wrap gap-5  justify-center">
          {GalleryDetails?.lifeOfCBT?.map((image, index) => (
            <figure
              key={index}
              className={`overflow-hidden  ${
                image.name.endsWith("5") ? "w-full" : "w-auto h-fit  md:w-[48%]"
              }`}
            >
              <Image
                src={image.imageUrl}
                alt={image.name}
                className="w-auto h-auto object-cover "
              />
            </figure>
          ))}
        </div>
      </main> */}
      {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
      {/* <main className="screen-size">
        <header>
          <h2 className="title_4 text-center">
            <span className="text-dark_gray">Life</span>
            <span className="text-primary">of CBT</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          {GalleryDetails?.lifeOfCBT?.map((image, index) => (
            <figure
              key={index}
              className={`overflow-hidden  
          ${image.name.endsWith("5") ? "col-span-2 w-full" : "w-full"} h-fit`}
            >
              <Image
                src={image.imageUrl}
                alt={image.name}
                className="w-full h-auto object-cover"
              />
            </figure>
          ))}
        </div>
      </main>

      <main className="screen-size">
        <header>
          <h2 className="title_4 center">
            <span className="text-dark_gray">Diwali </span>
            <span className="text-primary">Celebration</span>
          </h2>
        </header>
        <div className="flex flex-wrap gap-5  justify-center ">
          {GalleryDetails?.diwaliCelebration?.map((image, index) => (
            <figure
              key={index}
              className={`overflow-hidden   ${
                image.name.endsWith("5") || image.name.endsWith("6")
                  ? "w-full"
                  : "w-auto h-fit md:w-[48%]"
              }`}
            >
              <Image
                src={image.imageUrl}
                alt={image.name}
                className="w-auto h-auto object-cover"
              />
            </figure>
          ))}
        </div>
      </main> */}
    </main>
  );
};

export default Gallery;
