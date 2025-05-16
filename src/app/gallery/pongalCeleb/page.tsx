"use client";
import { useEffect } from "react";
import { GalleryProvider } from "../hooksForGallery/galleryProvider";
import PongalCelebComp from "./pongalCelebComp";

const PongalCeleb: React.FC = () => {
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
        <PongalCelebComp />
      </GalleryProvider>
    </div>
  );
};
export default PongalCeleb;
