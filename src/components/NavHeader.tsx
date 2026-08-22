import { Link, useLocation } from "react-router-dom";
import styles from "./NavHeader.module.css";

interface Props {
  visible: boolean;
}

function scrollToGalleries() {
  document.getElementById("galleries")?.scrollIntoView({ behavior: "smooth" });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function NavHeader({ visible }: Props) {
  const isHome = useLocation().pathname === "/";
  const navHeaderClassName = `${styles.navHeader}${visible ? ` ${styles.navHeaderVisible}` : ""}`;

  return (
    <header className={navHeaderClassName}>
      {isHome ? (
        <button className={styles.navBrand} onClick={scrollToTop}>
          Dagny Strand
        </button>
      ) : (
        <Link className={styles.navBrand} to="/">
          Dagny Strand
        </Link>
      )}

      {isHome ? (
        <button className={styles.navLink} onClick={scrollToGalleries}>
          Galleries
        </button>
      ) : (
        <Link className={styles.navLink} to="/" state={{ scrollTarget: "galleries" }}>
          Galleries
        </Link>
      )}
    </header>
  );
}

export default NavHeader;
