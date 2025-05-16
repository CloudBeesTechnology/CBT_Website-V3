
"use client";
import { useEffect } from "react";
import { GalleryProvider } from "../hooksForGallery/galleryProvider";
import DiwaliCelebComp from "./diwaliCelebComp";

const DiwaliCeleb: React.FC = () => {
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
        <DiwaliCelebComp />
      </GalleryProvider>
    </div>
  );
};
export default DiwaliCeleb;
