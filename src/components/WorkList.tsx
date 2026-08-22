import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useInView from "../hooks/useInView";
import styles from "./WorkList.module.css";

interface Work {
  source: string;
  altText: string;
}

interface Props {
  heading: string;
  works: Work[];
}

interface FadeImageProps {
  work: Work;
  index: number;
  onOpen: (source: string) => void;
}

function FadeImage({ work, index, onOpen }: FadeImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  const [ref, inView] = useInView<HTMLDivElement>(loaded, {
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px",
  });
  const imageCardClassName = `${styles.imageCard}${inView ? ` ${styles.imageCardVisible}` : ""}`;

  return (
    <div ref={ref} className={imageCardClassName} onClick={() => onOpen(work.source)}>
      <img
        ref={imgRef}
        src={work.source}
        alt={work.altText || `Work ${index + 1}`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

function WorkList({ heading, works }: Props) {
  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <section className={styles.workList}>
      <h1>{heading}</h1>
      <div className={styles.imageColumn}>
        {works.map((work, index) => (
          <FadeImage key={index} work={work} index={index} onOpen={setModalImg} />
        ))}
      </div>

      <Link
        className={styles.backLink}
        to="/"
        state={{ scrollTarget: "galleries" }}
      >
        Back to Galleries →
      </Link>

      {modalImg && (
        <div className={styles.modal} onClick={() => setModalImg(null)}>
          <img src={modalImg} alt="Full-size artwork" />
          <span className={styles.closeBtn} onClick={() => setModalImg(null)}>
            &times;
          </span>
        </div>
      )}
    </section>
  );
}

export default WorkList;
