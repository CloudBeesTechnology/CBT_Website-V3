import { GalleryProvider } from "../hooksForGallery/galleryProvider";
import PongalCelebComp from "./pongalCelebComp";

const PongalCeleb: React.FC = () => {
  return (
    <div>
      <GalleryProvider>
        <PongalCelebComp />
      </GalleryProvider>
    </div>
  );
};
export default PongalCeleb;
