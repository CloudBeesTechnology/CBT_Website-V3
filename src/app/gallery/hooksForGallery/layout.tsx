"use client";
import { useEffect } from "react";
import { GalleryProvider } from "./galleryProvider";

export default function galleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
     useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, []);
  return <GalleryProvider>{children}</GalleryProvider>;
}
