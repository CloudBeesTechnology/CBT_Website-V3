import { GalleryProvider } from "../hooksForGallery/galleryProvider";
import LifeOfCBTComp from "./lifeOfCBTComp"

const LifeOfCBT:React.FC=()=>{
return (
  <div>
    <GalleryProvider>
    <LifeOfCBTComp />
    </GalleryProvider>
  </div>
)
}
export default LifeOfCBT;