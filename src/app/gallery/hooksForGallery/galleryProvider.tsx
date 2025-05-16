"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface ImageData {
    id: number;
    imageUrl: string | any;
  }

interface GalleryContextType {
  setCarousalImage: (request: ImageData[]) => void;
  carousalImage: ImageData[];
  currentIndex: number;
  setCurrentIndex: (request: number) => void;
  handleNext: () => void;
  handlePrev: () => void;
  handleImageClick: (requests: number) => void;
  setShowCarousel: (request: boolean) => void;
  showCarousel: boolean;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

export const GalleryProvider = ({ children }: { children: ReactNode }) => {
  
  //   const [galleryRequests, setGalleryRequests] = useState<string[]>(["Sriram"]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showCarousel, setShowCarousel] = useState<boolean>(false);
  const [carousalImage, setCarousalImage] = useState<ImageData[]>([]);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === carousalImage.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carousalImage.length - 1 : prev - 1
    );
  };

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setShowCarousel(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <GalleryContext.Provider
      value={{
        setCarousalImage,
        carousalImage,
        currentIndex,
        setCurrentIndex,
        showCarousel,
        setShowCarousel,
        handleNext,
        handlePrev,
        handleImageClick,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export const useGalleryContext = (): GalleryContextType => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error("useGalleryContext must be used within a GalleryProvider");
  }
  return context;
};
