import { GalleryProvider } from "../hooksForGallery/galleryProvider";
import DiwaliCelebComp from "./diwaliCelebComp";

const DiwaliCeleb: React.FC = () => {
  return (
    <div>
      <GalleryProvider>
        <DiwaliCelebComp />
      </GalleryProvider>
    </div>
  );
};
export default DiwaliCeleb;
