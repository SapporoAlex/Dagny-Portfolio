interface Gallery {
  galleryName: string;
  galleryImg: string;
}

interface Props {
  galleryList: Gallery[];
  setSelectedGallery: (title: string) => void;
}

function GalleryMenu({ galleryList, setSelectedGallery }: Props) {
  return (
    <>
      <div id="galleries-start">
        <h2>Galleries</h2>
        <div id="galleries">
          {galleryList.map((gallery, index) => (
            <div
              key={index}
              className="gallery-btn"
              onClick={() => {
                setSelectedGallery(gallery.galleryName);
                document
                  .getElementById("work-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                cursor: "pointer",
                backgroundImage: `url(${gallery.galleryImg})`,
              }}
            >
              <h2>{gallery.galleryName}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GalleryMenu;
