import { log } from "console";
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
            className="max-w-[320px] rounded-2xl overflow-hidden text-center"
          >
         
            <div className="group">
              <figure className="overflow-hidden rounded-t-2xl">
                <Image
                  src={val.imageUrl}
                  alt={val.title}
                  className="w-full h-auto sm:h-[280px] object-cover rounded-t-2xl transform transition-transform duration-500 group-hover:scale-105"
                />
              </figure>

              <div className="p-4 border-x-1 border-b-1 py-5 border-blogYellow bg-blogWhite sm:min-h-[220px] rounded-b-2xl group-hover:border-ash_gray  flex flex-col">
                <h2 className="text-dark_gray mb-2 text-lg font-medium   ">
                  <span className="hover:text-primary transition-colors duration-300">{val.title}</span>
                </h2>

                <p className="text-dark_gray pt-1 line-clamp-3">{val.content}</p>

                <p className="center gap-1 text-dark_gray mt-auto ">
                  <span
                    className="border-b-1 flex items-end gap-1 border-transparent hover:border-primary cursor-pointer transition-colors duration-300 hover:text-primary"
                    
                    onClick={() =>{
                      // console.log(val.pdf);
                      openModal(val.pdf);
                    } }
                  >
                    Read More
                  <BsArrowRight  onClick={() => openModal(val.pdf)} className="ml-1 cursor-pointer transition-colors duration-300" />
                  </span>
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
