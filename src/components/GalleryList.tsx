import { Link } from "react-router-dom";
import styles from "./GalleryList.module.css";

interface Gallery {
  slug: string;
  galleryName: string;
  galleryImg: string;
}

interface Props {
  galleries: Gallery[];
}

function GalleryList({ galleries }: Props) {
  return (
    <section id="galleries" className={styles.galleryList}>
      <h2>Galleries</h2>
      <div className={styles.galleryGrid}>
        {galleries.map((gallery) => (
          <Link
            key={gallery.slug}
            to={`/gallery/${gallery.slug}`}
            className={styles.galleryCard}
          >
            <img src={gallery.galleryImg} alt={gallery.galleryName} loading="lazy" />
            <span className={styles.galleryCardLabel}>{gallery.galleryName}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default GalleryList;
