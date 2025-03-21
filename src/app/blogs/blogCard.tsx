import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import jira from "../../assets/blog/blogImg/Jira.png";

const BlogCard: React.FC = () => {
  return (
    <div className="flex justify-center gap-14">
      <div className="max-w-sm rounded-2xl overflow-hidden ">
        <Image
          src={jira}
          alt="jira"
          width={310}
          height={540}
          className="rounded-lg max-w-full object-cover"
        />
        <div className="p-4 border border-blogYellow">
          <h2 className="text-dark_gray mb-2 blog_title_1">{"AI support in Jira"}</h2>
          <p className="text-gray-600 line-clamp-3 mb-4">{"description"}</p>
          <a
            href="#"
            className="text-blue-600 font-medium flex items-center hover:underline"
          >
            Read More <BsArrowRight className="ml-1 w-5 h-5" />
          </a>
        </div>
      </div>
      {/* 2 */}
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border">
        {/* <img src={imageSrc} alt={title} className="w-full h-64 object-cover" /> */}
        <Image
          src={jira}
          alt="jira"
          width={310}
          height={540}
          className="rounded-lg max-w-full object-cover"
        />
        <div className="p-4 ">
          <h2 className="text-xl font-semibold mb-2">{"Jira"}</h2>
          <p className="text-gray-600 line-clamp-3 mb-4">{"description"}</p>
          <a
            href="#"
            className="text-blue-600 font-medium flex items-center hover:underline"
          >
            Read More <BsArrowRight className="ml-1 w-5 h-5" />
          </a>
        </div>
      </div>
      {/* 3 */}
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border">
        {/* <img src={imageSrc} alt={title} className="w-full h-64 object-cover" /> */}
        <Image
          src={jira}
          alt="jira"
          width={310}
          height={540}
          className="rounded-lg max-w-full object-cover"
        />
        <div className="p-4 ">
          <h2 className="text-xl font-semibold mb-2">{"Jira"}</h2>
          <p className="text-gray-600 line-clamp-3 mb-4">{"description"}</p>
          <a
            href="#"
            className="text-blue-600 font-medium flex items-center hover:underline"
          >
            Read More <BsArrowRight className="ml-1 w-5 h-5" />
          </a>
        </div>
      </div>
      {/* 4 */}
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border">
        {/* <img src={imageSrc} alt={title} className="w-full h-64 object-cover" /> */}
        <Image
          src={jira}
          alt="jira"
          width={310}
          height={540}
          className="rounded-lg max-w-full object-cover"
        />
        <div className="p-4 ">
          <h2 className="text-xl font-semibold mb-2">{"Jira"}</h2>
          <p className="text-gray-600 line-clamp-3 mb-4">{"description"}</p>
          <a
            href="#"
            className="text-blue-600 font-medium flex items-center hover:underline"
          >
            Read More <BsArrowRight className="ml-1 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
