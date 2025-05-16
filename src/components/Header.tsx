function Header() {
  return (
    <>
      <header>
        <h1>Dagny Strand</h1>
        <p>Visual Artist</p>

        <a
          id="instagram-link"
          href="https://www.instagram.com/dagnystrand"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          className="btn"
          onClick={() =>
            document
              .getElementById("galleries-start")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          View My Work
        </a>
      </header>
    </>
  );
}

export default Header;
