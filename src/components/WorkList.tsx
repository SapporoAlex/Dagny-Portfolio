import React, { useState } from "react";

interface Work {
  source: string;
  altText: string;
}

interface Props {
  heading: string;
  works: Work[];
}

const WorkList: React.FC<Props> = ({ heading, works }) => {
  const [modalImg, setModalImg] = useState<string | null>(null);

  const openModal = (img: string) => setModalImg(img);
  const closeModal = () => setModalImg(null);
  return (
    <>
      <section className="work-list" id="work-section">
        <h1>{heading}</h1>
        <div id="gallery-section">
          <div className="image-grid">
            {works.map((work, index) => (
              <div
                key={index}
                className="image-card"
                onClick={() => openModal(work.source)}
              >
                <img
                  key={index}
                  src={work.source}
                  alt={work.altText || `Work ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        {modalImg && (
          <div className="modal" onClick={closeModal}>
            <img src={modalImg} alt="Full-size artwork" />
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
          </div>
        )}
      </section>
    </>
  );
};

export default WorkList;
