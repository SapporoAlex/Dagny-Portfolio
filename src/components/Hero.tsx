import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

// The current hero shot stays first; the rest sample across every gallery
// so the carousel gives a preview of the full body of work.
import slide1 from "../assets/awardwinners/11.jpg?w=2000";
import slide2 from "../assets/july2025/1.jpg?w=2000";
import slide3 from "../assets/wearable/2.jpg?w=2000";
import slide4 from "../assets/wearable/4.jpg?w=2000";
import slide5 from "../assets/wearable/1.jpg?w=2000";
import slide6 from "../assets/wearable/9.jpg?w=2000";
import slide7 from "../assets/drawings/8.jpg?w=2000";
import slide8 from "../assets/wearable/6.jpg?w=2000";

const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8];
const SLIDE_DURATION_MS = 5000;

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  // Only the current slide plus one lookahead are fetched at a time, so the
  // browser isn't asked to download all 8 hero images up front — each new
  // one loads during the 5s the prior slide is showing, well before its turn.
  const [loadedIndices, setLoadedIndices] = useState(() => new Set([0, 1 % slides.length]));

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((current) => {
        const next = (current + 1) % slides.length;
        const upcoming = (next + 1) % slides.length;
        setLoadedIndices((prev) => (prev.has(upcoming) ? prev : new Set(prev).add(upcoming)));
        return next;
      });
    }, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <header className={styles.heroHeader}>
      <div className={styles.heroSlides}>
        {slides.map((src, index) => (
          <div
            key={src}
            className={`${styles.heroSlide}${index === activeIndex ? ` ${styles.heroSlideActive}` : ""}`}
            style={loadedIndices.has(index) ? { backgroundImage: `url(${src})` } : undefined}
          />
        ))}
      </div>

      <h1>Dagny Strand</h1>
      <p>Visual Artist</p>
      <a
        className={styles.btn}
        href="https://www.instagram.com/dagnystrand"
        target="_blank"
        rel="noreferrer"
      >
        Contact Me
      </a>
    </header>
  );
}

export default Hero;
