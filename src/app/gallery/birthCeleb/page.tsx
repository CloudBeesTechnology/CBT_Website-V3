"use client";
import { useEffect } from "react";
import { GalleryProvider } from "../hooksForGallery/galleryProvider";
import BirthCelebComp from "./birthCelebComp";

const BirthCeleb: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, []);
  return (
    <div>
      <GalleryProvider>
        <BirthCelebComp />
      </GalleryProvider>
    </div>
  );
};
export default BirthCeleb;
