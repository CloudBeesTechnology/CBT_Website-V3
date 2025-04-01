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
      <div className="flex flex-col items-center space-y-1 text-center tracking-wide">
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
      <Banner>
        <div className="absolute bg-blend-overlay flex items-center justify-center px-2 h-[80vh] lg:h-[60vh] text-white">
          <div className="flex justify-evenly w-full ">
            <div className="flex flex-col items-center pb-24 justify-center space-y-5">
              <h2 className="title">{BlogsBannerText}</h2>
              <div
                className={`max-w-[950px] w-full para_head text-white font-light italic transition-all duration-[1000ms] ease-out flex text-center ${rotate ? "scale-100 opacity-100" : "scale-50 opacity-0"
                  }`}
              >
                {[
                  "Delve into captivating narratives, thought-provoking insights, and expertly curated content that ignites curiosity and fosters meaningful conversations.",
                ].map((text, index) => (
                  <h3 key={index}>
                    <i
                      className={`block transition-all duration-[1000ms] ease-out ${rotate
                          ? "scale-100 opacity-100 delay-300"
                          : "scale-50 opacity-0"
                        }`}
                    >
                      {text}
                    </i>
                  </h3>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Banner>

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
