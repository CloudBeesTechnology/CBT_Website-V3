"use client";
import { useEffect } from "react";
import { GalleryProvider } from "../hooksForGallery/galleryProvider";
import LifeOfCBTComp from "./lifeOfCBTComp"

const LifeOfCBT:React.FC=()=>{
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
    <LifeOfCBTComp />
    </GalleryProvider>
  </div>
)
}
export default LifeOfCBT;