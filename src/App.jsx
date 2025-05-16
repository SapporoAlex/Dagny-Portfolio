import { useState } from "react";

import WorkList from "./components/WorkList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GalleryMenu from "./GalleryMenu";

import awardWinner1 from "./assets/awardwinners/1.jpg";
import awardWinner2 from "./assets/awardwinners/2.jpg";
import awardWinner3 from "./assets/awardwinners/3.jpg";
import awardWinner4 from "./assets/awardwinners/4.jpg";
import awardWinner5 from "./assets/awardwinners/5.jpg";
import awardWinner6 from "./assets/awardwinners/6.jpg";
import awardWinner7 from "./assets/awardwinners/7.jpg";
import awardWinner8 from "./assets/awardwinners/8.jpg";
import awardWinner9 from "./assets/awardwinners/9.jpg";
import awardWinner10 from "./assets/awardwinners/10.jpg";
import awardWinner11 from "./assets/awardwinners/11.jpg";
import awardWinner12 from "./assets/awardwinners/12.jpg";
import drawing1 from "./assets/drawings/1.jpg";
import drawing2 from "./assets/drawings/2.jpg";
import drawing3 from "./assets/drawings/3.jpg";
import drawing4 from "./assets/drawings/4.jpg";
import drawing5 from "./assets/drawings/5.jpg";
import drawing6 from "./assets/drawings/6.jpg";
import drawing7 from "./assets/drawings/7.jpg";
import drawing8 from "./assets/drawings/8.jpg";
import drawing9 from "./assets/drawings/9.jpg";
import drawing10 from "./assets/drawings/10.jpg";
import drawing11 from "./assets/drawings/11.jpg";
import drawing12 from "./assets/drawings/12.jpg";
import drawing13 from "./assets/drawings/13.jpg";
import july2025Img1 from "./assets/july2025/1.jpg";
import july2025Img2 from "./assets/july2025/2.jpg";
import july2025Img3 from "./assets/july2025/3.jpg";
import july2025Img4 from "./assets/july2025/4.jpg";
import july2025Img5 from "./assets/july2025/5.jpg";
import july2025Img6 from "./assets/july2025/6.jpg";
import july2025Img7 from "./assets/july2025/7.jpg";
import portrait1 from "./assets/portraits/1.jpg";
import portrait2 from "./assets/portraits/2.jpg";
import portrait3 from "./assets/portraits/3.jpg";
import portrait4 from "./assets/portraits/4.jpg";
import portrait5 from "./assets/portraits/5.jpg";
import portrait6 from "./assets/portraits/6.jpg";
import portrait7 from "./assets/portraits/7.jpg";
import portrait8 from "./assets/portraits/8.jpg";
import portrait9 from "./assets/portraits/9.jpg";
import portrait10 from "./assets/portraits/10.jpg";
import portrait11 from "./assets/portraits/11.jpg";
import portrait12 from "./assets/portraits/12.jpg";
import portrait13 from "./assets/portraits/13.jpg";
import wearable1 from "./assets/wearable/1.jpg";
import wearable2 from "./assets/wearable/2.jpg";
import wearable3 from "./assets/wearable/3.jpg";
import wearable4 from "./assets/wearable/4.jpg";
import wearable5 from "./assets/wearable/5.jpg";
import wearable6 from "./assets/wearable/6.jpg";
import wearable7 from "./assets/wearable/7.jpg";
import wearable8 from "./assets/wearable/8.jpg";
import wearable9 from "./assets/wearable/9.jpg";
import wearable10 from "./assets/wearable/10.jpg";
import wearable11 from "./assets/wearable/11.jpg";

function App() {
  const july2025 = {
    galleryName: "July 2025",
    galleryImg: july2025Img1,
    images: [
      { source: july2025Img1, altText: "image1" },
      { source: july2025Img2, altText: "image2" },
      { source: july2025Img3, altText: "image3" },
      { source: july2025Img4, altText: "image4" },
      { source: july2025Img5, altText: "image5" },
      { source: july2025Img6, altText: "image6" },
      { source: july2025Img7, altText: "image7" },
    ],
  };

  const awardWinners = {
    galleryName: "Award Winners",
    galleryImg: awardWinner1,
    images: [
      { source: awardWinner1, altText: "Award Winner 1" },
      { source: awardWinner2, altText: "Award Winner 2" },
      { source: awardWinner3, altText: "Award Winner 3" },
      { source: awardWinner4, altText: "Award Winner 4" },
      { source: awardWinner5, altText: "Award Winner 5" },
      { source: awardWinner6, altText: "Award Winner 6" },
      { source: awardWinner7, altText: "Award Winner 7" },
      { source: awardWinner8, altText: "Award Winner 8" },
      { source: awardWinner9, altText: "Award Winner 9" },
      { source: awardWinner10, altText: "Award Winner 10" },
      { source: awardWinner11, altText: "Award Winner 11" },
      { source: awardWinner12, altText: "Award Winner 12" },
    ],
  };

  const drawings = {
    galleryName: "Drawings",
    galleryImg: drawing1,
    images: [
      { source: drawing1, altText: "Drawing 1" },
      { source: drawing2, altText: "Drawing 2" },
      { source: drawing3, altText: "Drawing 3" },
      { source: drawing4, altText: "Drawing 4" },
      { source: drawing5, altText: "Drawing 5" },
      { source: drawing6, altText: "Drawing 6" },
      { source: drawing7, altText: "Drawing 7" },
      { source: drawing8, altText: "Drawing 8" },
      { source: drawing9, altText: "Drawing 9" },
      { source: drawing10, altText: "Drawing 10" },
      { source: drawing11, altText: "Drawing 11" },
      { source: drawing12, altText: "Drawing 12" },
      { source: drawing13, altText: "Drawing 13" },
    ],
  };

  const portraits = {
    galleryName: "Portraits",
    galleryImg: portrait1,
    images: [
      { source: portrait1, altText: "Portrait 1" },
      { source: portrait2, altText: "Portrait 2" },
      { source: portrait3, altText: "Portrait 3" },
      { source: portrait4, altText: "Portrait 4" },
      { source: portrait5, altText: "Portrait 5" },
      { source: portrait6, altText: "Portrait 6" },
      { source: portrait7, altText: "Portrait 7" },
      { source: portrait8, altText: "Portrait 8" },
      { source: portrait9, altText: "Portrait 9" },
      { source: portrait10, altText: "Portrait 10" },
      { source: portrait11, altText: "Portrait 11" },
      { source: portrait12, altText: "Portrait 12" },
      { source: portrait13, altText: "Portrait 13" },
    ],
  };

  const wearableArt = {
    galleryName: "Wearable Art",
    galleryImg: wearable1,
    images: [
      { source: wearable1, altText: "Wearable Art 1" },
      { source: wearable2, altText: "Wearable Art 2" },
      { source: wearable3, altText: "Wearable Art 3" },
      { source: wearable4, altText: "Wearable Art 4" },
      { source: wearable5, altText: "Wearable Art 5" },
      { source: wearable6, altText: "Wearable Art 6" },
      { source: wearable7, altText: "Wearable Art 7" },
      { source: wearable8, altText: "Wearable Art 8" },
      { source: wearable9, altText: "Wearable Art 9" },
      { source: wearable10, altText: "Wearable Art 10" },
      { source: wearable11, altText: "Wearable Art 11" },
    ],
  };

  const galleryList = [
    july2025,
    awardWinners,
    drawings,
    portraits,
    wearableArt,
  ];

  const [selectedGallery, setSelectedGallery] = useState(
    galleryList[0].galleryName
  );

  const getGalleryByName = (name) =>
    galleryList.find((g) => g.galleryName === name);

  const selected = getGalleryByName(selectedGallery);

  return (
    <>
      <Header />

      <GalleryMenu
        galleryList={galleryList}
        setSelectedGallery={setSelectedGallery}
      />

      {selected && (
        <WorkList heading={selected.galleryName} works={selected.images} />
      )}

      <Footer />
    </>
  );
}

export default App;
