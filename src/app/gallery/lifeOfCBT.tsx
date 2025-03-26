import Image from "next/image";
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

const LifeOfCBT: React.FC = () => {
  return (
    <main>
      <header>
        <h3 className="banner_title text-dark_gray text-center p-6 sm:p-8 lg:p-10 gap-2">
          <span className="text-dark_gray text-2xl sm:text-3xl md:text-4xl">
            Life{" "}
          </span>
          <span className="text-primary  text-2xl sm:text-3xl md:text-4xl">
            of CBT
          </span>
        </h3>
      </header>

      <div className="center">
      <div className=" max-w-7xl  overflow-hidden">
      <section className="grid grid-cols-1 md:grid-cols-2  p-2 screen-size">
        {/* Left Column with multiple images stacked */}
        {/* md:border md:border-primary */}
        <article className="col-span-1 grid grid-rows-1 h-full">
          <figure className="relative row-span-1 md:border-b-1 md:border-r-1 md:border-primary ">
            <Image
              src={lifeOfCBT01}
              alt="lifeOfCBT01"
              className="w-full h-full"
            />
          </figure>
          <figure className="relative row-span-1 md:border-b-1 md:border-r-1 md:border-primary ">
            <Image
              src={lifeOfCBT02}
              alt="lifeOfCBT02"
              className="w-full h-full "
            />
          </figure>
        </article>

        {/* Right Column with two stacked images */}
        <article className="col-span-1 grid grid-rows-1 h-full">
          <figure className="relative row-span-1 md:border-b-1  md:border-primary ">
            <Image
              src={lifeOfCBT03}
              alt="lifeOfCBT03"
              className="w-full h-full"
            />
          </figure>
          <figure className="relative row-span-1 md:border-b-1  md:border-primary ">
            <Image
              src={lifeOfCBT04}
              alt="lifeOfCBT04"
              className="w-full h-full "
            />
          </figure>
        </article>
      </section>
      <section className="screen-size p-2">
        <article className="col-span-1 grid ">
          <figure className="relative">
            <Image src={lifeOfCBT05} alt="Image 5" className="w-full h-full " />
          </figure>
        </article>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 screen-size p-2">
        {/* Left Column with multiple images stacked */}
        <article className="col-span-1 grid grid-rows-1 h-full ">
          <figure className="relative row-span-1 md:border-y-1 md:border-r-1 md:border-primary ">
            <Image
              src={lifeOfCBT06}
              alt="lifeOfCBT06"
              className="w-full h-full "
            />
          </figure>
          <figure className="relative row-span-1  md:border-b-1 md:border-r-1 md:border-primary ">
            <Image
              src={lifeOfCBT08}
              alt="lifeOfCBT08"
              className="w-full h-full "
            />
          </figure>
        </article>

        {/* Right Column with two stacked images */}
        <article className="col-span-1 grid grid-rows-1  h-full ">
          <figure className="relative row-span-1 md:border-y-1 md:border-primary ">
            <Image
              src={lifeOfCBT07}
              alt="lifeOfCBT07"
              className="w-full h-full "
            />
          </figure>
          <figure className="relative row-span-1 md:border-b-1 md:border-primary ">
            <Image
              src={lifeOfCBT09}
              alt="lifeOfCBT09"
              className="w-full h-full "
            />
          </figure>
          <figure className="relative row-span-1 md:border-b-1 md:border-primary">
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
          <figure className="relative">
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
export default LifeOfCBT;
