"use client";
import { Banner } from "@/components/Banner";
import React, { useEffect, useState } from "react";
import BlogCard from "./blogCard";

const Blogs: React.FC = () => {
  const [rotate, setRotate] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setRotate(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);
  const BlogsBannerText: React.ReactNode = (
    <div className="flex justify-center items-start space-x-10">
      <div className="flex flex-col items-center space-y-1">
        <span className="text-white text_size_1">
          Don&apos;t Just Scroll, Learn
        </span>
        <span className="text-white text_size_1">
          Discover Valuable Content on Our Blog
        </span>
      </div>
    </div>
  );

  return (
    <div>
      <Banner BlogsBannerText={BlogsBannerText} rotate={rotate} />
      <section className="flex flex-col items-center p-8">
        <h3 className="title">
          <span className="text-primary">Our </span>
          <span className="text-dark_gray">Blog</span>
        </h3>
        <p className="text-[20px] text-gray">How to choose your Programming Language / Tech Stack</p>
      </section>
      <BlogCard />
    </div>
  );
};

export default Blogs;
