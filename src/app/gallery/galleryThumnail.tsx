"use client";
import Image from "next/image"; // Import Image component from Next.js
import lifeOfCBT from "../../assets/GallerySection/Thumnail/lifeOfCBT.png";
import diwaliCeleb from "../../assets/GallerySection/Thumnail/diwaliCeleb.png";
import anniversary from "../../assets/GallerySection/Thumnail/anniversary.png";
import pongalCeleb from "../../assets/GallerySection/Thumnail/pongalCeleb.png";
import womensCeleb from "../../assets/GallerySection/Thumnail/womensCeleb.png";
import { useRouter } from "next/navigation";

interface ImageData {
  id: number;
  routeUrl: string;
  imageUrl: string | any;
  firstName: string;
  lastName: string;
}

const imageArray: ImageData[] = [
  {
    id: 1,
    routeUrl: "gallery/lifeOfCBT",
    imageUrl: lifeOfCBT,
    firstName: "Life",
    lastName: " of CBT",
  },
  {
    id: 2,
    routeUrl: "gallery/diwaliCeleb",
    imageUrl: diwaliCeleb,
    firstName: "Diwali ",
    lastName: " Celebration",
  },
  {
    id: 3,
    routeUrl: "gallery/anniversary",
    imageUrl: anniversary,
    firstName: "1st Year",
    lastName: " Anniversary",
  },
  {
    id: 4,
    routeUrl: "gallery/pongalCeleb",
    imageUrl: pongalCeleb,
    firstName: "Pongal",
    lastName: " Celebration",
  },
  {
    id: 5,
    routeUrl: "gallery/womensCeleb",
    imageUrl: womensCeleb,
    firstName: "Women’s Day",
    lastName: " Celebration",
  },
];

const GalleryThumnail: React.FC = () => {
  const router = useRouter(); // Initialize router

  const handleClick = (route: string) => {
    router.push(route); // Navigate programmatically on click
  };
  //   onClick={() => handleClick(item.route)}
  return (
    <main>
      {/* grid grid-cols-2 */}
      <div className="center">
        <div className=" max-w-7xl  overflow-hidden">
          <section className="center flex flex-wrap gap-10  screen-size ">
            {imageArray.map((item) => (
              <div
                key={item.id}
                onClick={() => handleClick(item.routeUrl)}
                className="max-w-xl border border-primary rounded-lg shadow-lg overflow-hidden px-2 pt-2"
              >
                <figure className="overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.firstName}
                    layout="responsive"
                    width={300}
                    height={200}
                    className=" w-[618px] h-[348px] overflow-hidden cursor-pointer transform transition-transform duration-500 hover:scale-102"
                  />
                </figure>
                <figcaption className="p-3 text-center text-[20px] font-semibold">
                  <span className="text-primary">{item.firstName}</span>
                  <span className="text-gray">{item.lastName}</span>
                </figcaption>
              </div>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
};

export default GalleryThumnail;
