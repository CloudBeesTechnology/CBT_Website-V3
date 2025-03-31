import { GalleryProvider } from "../hooksForGallery/galleryProvider";
import WomensDayCelebComp from "./womensCelebComp";

const WomensCeleb: React.FC = () => {
  return (
    <div>
      <GalleryProvider>
        <WomensDayCelebComp />
      </GalleryProvider>
    </div>
  );
};
export default WomensCeleb;
