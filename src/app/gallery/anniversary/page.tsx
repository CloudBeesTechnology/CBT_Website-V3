import { GalleryProvider } from "../hooksForGallery/galleryProvider";
import AnniversaryComp from "./anniversaryComp";

const Anniverary: React.FC = () => {
  return (
    <GalleryProvider>
      <AnniversaryComp />
    </GalleryProvider>
  );
};
export default Anniverary;
