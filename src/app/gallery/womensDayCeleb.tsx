import Image from "next/image";
import womensDay01 from "../../assets/GallerySection/womenDayImg/womensDay01.png";
import womensDay02 from "../../assets/GallerySection/womenDayImg/womensDay02.png";
import womensDay03 from "../../assets/GallerySection/womenDayImg/womensDay03.png";
import womensDay04 from "../../assets/GallerySection/womenDayImg/womensDay04.png";
import womensDay05 from "../../assets/GallerySection/womenDayImg/womensDay05.png";
import womensDay06 from "../../assets/GallerySection/womenDayImg/womensDay06.png";
const WomensDayCeleb: React.FC = () => {
  return (
    <main>
      <header>
        <h3 className="banner_title text-dark_gray text-center p-6 sm:p-8 lg:p-10 gap-2">
          <span className="text-dark_gray text-2xl sm:text-3xl md:text-4xl">
            Women’s Day{" "}
          </span>
          <span className="text-primary  text-2xl sm:text-3xl md:text-4xl">
            Celebration
          </span>
        </h3>
      </header>

      <div className="center">
      <div className=" max-w-7xl  overflow-hidden">
      <section className="grid grid-cols-1 md:grid-cols-2  p-2 screen-size">
        {/* Left Column with multiple images stacked */}
        <article className="col-span-1 grid grid-rows-1 h-full">
          <figure className="relative row-span-1 md:border-b-1 md:border-r-1 md:border-primary">
            <Image
              src={womensDay01}
              alt="womensDay01"
              className="w-full h-full"
            />
          </figure>
          <figure className="relative row-span-1 md:border-b-1 md:border-r-1 md:border-primary">
            <Image
              src={womensDay05}
              alt="womensDay05"
              className="w-full h-full"
            />
          </figure>
        </article>

        {/* Right Column with two stacked images */}
        <article className="col-span-1 grid grid-rows-1 h-full">
          <figure className="relative row-span-1 md:border-b-1  md:border-primary">
            <Image
              src={womensDay02}
              alt="womensDay02"
              className="w-full h-full"
            />
          </figure>
          <figure className="relative row-span-1 md:border-b-1  md:border-primary">
            <Image
              src={womensDay06}
              alt="womensDay06"
              className="w-full h-full"
            />
          </figure>
        </article>
      </section>
     
      <section className="screen-size p-2">
        <article className="col-span-1 grid ">
          <figure className="relative">
            <Image
              src={womensDay03}
              alt="womensDay03"
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
export default WomensDayCeleb;
