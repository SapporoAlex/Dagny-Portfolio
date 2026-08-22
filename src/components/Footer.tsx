import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.instagramLink}
        href="https://www.instagram.com/dagnystrand"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-instagram" aria-hidden="true"></i>
        <span>@dagnystrand</span>
      </a>
      <p className={styles.credits}>&copy; {new Date().getFullYear()} Dagny Strand</p>
    </footer>
  );
}

export default Footer;
