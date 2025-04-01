import { GalleryProvider } from "./galleryProvider";

export default function galleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <GalleryProvider>{children}</GalleryProvider>;
}
