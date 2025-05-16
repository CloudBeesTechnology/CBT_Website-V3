"use client";
import { useEffect } from "react";
import { GalleryProvider } from "../hooksForGallery/galleryProvider";
import AnniversaryComp from "./anniversaryComp";

const Anniverary: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, []);
  return (
    <GalleryProvider>
      <AnniversaryComp />
    </GalleryProvider>
  );
};
export default Anniverary;
