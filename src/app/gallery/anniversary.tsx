import Image from "next/image";
import anniversary01 from "../../assets/GallerySection/anniversaryImg/anniversary01.png";
import anniversary02 from "../../assets/GallerySection/anniversaryImg/anniversary02.png";
import anniversary03 from "../../assets/GallerySection/anniversaryImg/anniversary03.png";
import anniversary04 from "../../assets/GallerySection/anniversaryImg/anniversary04.png";
import anniversary05 from "../../assets/GallerySection/anniversaryImg/anniversary05.png";
const Anniversary: React.FC = () => {
  return (
    <main>
      <header>
        <h3 className="banner_title text-dark_gray text-center p-6 sm:p-8 lg:p-10 gap-2">
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
          
          <section className="grid grid-cols-1 md:grid-cols-2  p-2 screen-size">
            {/* Left Column with multiple images stacked */}
            <article className="col-span-1 grid grid-rows-1 h-full">
              <figure className="relative row-span-1 md:border-b-1 md:border-r-1 md:border-primary">
                <Image
                  src={anniversary01}
                  alt="anniversary01"
                  className="w-full h-full"
                />
              </figure>
              <figure className="relative row-span-1 md:border-b-1 md:border-r-1 md:border-primary">
                <Image
                  src={anniversary03}
                  alt="anniversary03"
                  className="w-full h-full "
                />
              </figure>
            </article>

            {/* Right Column with two stacked images */}
            <article className="col-span-1 grid grid-rows-1 h-full">
              <figure className="relative row-span-1 md:border-b-1  md:border-primary">
                <Image
                  src={anniversary02}
                  alt="anniversary02"
                  className="w-full h-full"
                />
              </figure>
              <figure className="relative row-span-1 md:border-b-1  md:border-primary">
                <Image
                  src={anniversary05}
                  alt="anniversary05"
                  className="w-full h-full "
                />
              </figure>
            </article>
          </section>
          <section className="screen-size p-2">
            <article className="col-span-1 grid ">
              <figure className="relative">
                <Image
                  src={anniversary04}
                  alt="anniversary04"
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
export default Anniversary;
