"use client";
import { Banner } from "@/components/Banner";
import React, { useEffect, useState } from "react";
import BlogCard from "./blogCard";
import { BlogCardDetails } from "./blogCardDetails";
import ModelForPDF from "./modelForPDF";

const Blogs: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentPdf, setCurrentPdf] = useState<string | undefined>("");
  const [rotate, setRotate] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRotate(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const openModal = (pdf?: string) => {
  
    if (pdf) {
      setCurrentPdf(pdf);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentPdf("");
  };

  const BlogsBannerText: React.ReactNode = (
    <div className="flex justify-center items-center space-x-10">
      <div className="flex flex-col items-center space-y-1 text-center">
        <span className="text-white banner_title">
          Don&apos;t Just Scroll, Learn
        </span>
        <span className="text-white banner_title">
          Discover Valuable Content on Our Blog
        </span>
      </div>
    </div>
  );

  return (
    <div>
      <Banner BlogsBannerText={BlogsBannerText} rotate={rotate} />

      <section className="flex flex-col items-center text-center gap-4 px-4 md:px-10 md:gap-6 mt-14">
        <h3 className="title">
          <span className="text-primary">Our </span>
          <span className="text-dark_gray ">Blog</span>
        </h3>
        <p className="text-gray md:text-lg lg:text-xl">
          How to choose your Programming Language / Tech Stack
        </p>
      </section>

      <div className="w-full px-4 md:px-12 lg:px-16">
        <BlogCard cards={BlogCardDetails} openModal={openModal} />
        {showModal && (
          <ModelForPDF currentPdf={currentPdf} closeModal={closeModal} />
        )}
      </div>
    </div>
  );
};

export default Blogs;
