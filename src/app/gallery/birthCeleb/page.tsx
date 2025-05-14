import { GalleryProvider } from "../hooksForGallery/galleryProvider";
import BirthCelebComp from "./birthCelebComp";

const BirthCeleb: React.FC = () => {
  return (
    <div>
      <GalleryProvider>
        <BirthCelebComp />
      </GalleryProvider>
    </div>
  );
};
export default BirthCeleb;
