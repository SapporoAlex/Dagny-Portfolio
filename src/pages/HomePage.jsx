import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../components/Hero";
import NavHeader from "../components/NavHeader";
import GalleryList from "../components/GalleryList";
import Footer from "../components/Footer";
import useNavVisibility from "../hooks/useNavVisibility";
import { galleries } from "../data/galleries";

function HomePage() {
  const [revealAfter, setRevealAfter] = useState(() => window.innerHeight);
  const location = useLocation();
  const scrollTarget = location.state?.scrollTarget;

  useEffect(() => {
    const onResize = () => setRevealAfter(window.innerHeight);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Arriving from another page's "Galleries" link should land on the
  // gallery grid, not the hero — jump before paint.
  useLayoutEffect(() => {
    if (!scrollTarget) return;
    document.getElementById(scrollTarget)?.scrollIntoView({ behavior: "auto", block: "start" });
  }, [scrollTarget]);

  const navVisible = useNavVisibility(revealAfter, { startVisible: Boolean(scrollTarget) });

  return (
    <>
      <NavHeader visible={navVisible} />
      <Hero />
      <GalleryList galleries={galleries} />
      <Footer />
    </>
  );
}

export default HomePage;
