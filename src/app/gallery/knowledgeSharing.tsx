import Image from "next/image";
import womensDay04 from "../../assets/GallerySection/knowledgeSharImg/knowledgeShar01.png";
const KnowledgeSharing: React.FC = () => {
  return (
    <main>
      <header>
        <h3 className="banner_title text-dark_gray text-center p-6 sm:p-8 lg:p-10 gap-2">
          <span className="text-dark_gray text-2xl sm:text-3xl md:text-4xl">
            Knowledge{" "}
          </span>
          <span className="text-primary  text-2xl sm:text-3xl md:text-4xl">
            Sharing
          </span>
        </h3>
      </header>
      <div className="center">
        <div className=" max-w-7xl  overflow-hidden">
          <section className="screen-size p-2">
            <article className="col-span-1 grid ">
              <figure className="relative">
                <Image
                  src={womensDay04}
                  alt="womensDay04"
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
export default KnowledgeSharing;
