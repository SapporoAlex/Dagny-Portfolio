import { Navigate, useParams } from "react-router-dom";

import NavHeader from "../components/NavHeader";
import WorkList from "../components/WorkList";
import Footer from "../components/Footer";
import useNavVisibility from "../hooks/useNavVisibility";
import { galleries } from "../data/galleries";

function GalleryPage() {
  const { slug } = useParams();
  const gallery = galleries.find((g) => g.slug === slug);
  const navVisible = useNavVisibility(0);

  if (!gallery) return <Navigate to="/" replace />;

  return (
    <>
      <NavHeader visible={navVisible} />
      <WorkList heading={gallery.galleryName} works={gallery.images} />
      <Footer />
    </>
  );
}

export default GalleryPage;
