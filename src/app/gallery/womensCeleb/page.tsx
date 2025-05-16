"use client";
import { useEffect } from "react";
import { GalleryProvider } from "../hooksForGallery/galleryProvider";
import WomensDayCelebComp from "./womensCelebComp";

const WomensCeleb: React.FC = () => {
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
        <WomensDayCelebComp />
      </GalleryProvider>
    </div>
  );
};
export default WomensCeleb;
