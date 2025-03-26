import Image, { StaticImageData } from "next/image";

import { BsArrowRight } from "react-icons/bs";
type BlogCardDetails = {
  imageUrl: string | StaticImageData;
  title: string;
  content: string;
  pdf?: string;
};

type BlogCardProps = {
  cards: BlogCardDetails[];
  openModal: (pdf?: string) => void;
};

const BlogCard: React.FC<BlogCardProps> = ({ cards, openModal }) => {
 
  return (
    <section className="center">
      <div className="center flex-wrap gap-20 py-24 place-items-center">
        {cards.map((val, index) => (
          <article
            key={index}
            className="max-w-[360px] rounded-2xl overflow-hidden text-center"
          >
         
            <div className="group">
              <figure className="overflow-hidden rounded-t-2xl">
                <Image
                  src={val.imageUrl}
                  alt={val.title}
                  className="w-full h-auto object-cover rounded-t-2xl transform transition-transform duration-500 group-hover:scale-105"
                />
              </figure>

              <div className="p-4 border-x-1 border-b-1 py-5 border-blogYellow bg-blogWhite min-h-[280px] rounded-b-2xl group-hover:border-ash_gray group-hover:bg-lite_gray flex flex-col">
                <h2 className="text-dark_gray mb-2 text-lg font-medium group-hover:text-primary transition-colors duration-300">
                  {val.title}
                </h2>

                <p className="text-dark_gray mb-4 pt-1">{val.content}</p>

                <p className="center gap-1 text-dark_gray mt-auto transition-colors duration-300 group-hover:text-primary">
                  <span
                    className="border-b-1 border-transparent group-hover:border-primary cursor-pointer"
                    onClick={() => openModal(val.pdf)}
                  >
                    Read More
                  </span>
                  <BsArrowRight className="ml-1" />
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
      
    </section>
  );
};
export default BlogCard;
