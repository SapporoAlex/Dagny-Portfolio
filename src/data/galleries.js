// Full-size images are capped at 1600px wide — plenty for the 800px-max
// single-column detail view at retina density — via vite-imagetools'
// `w` directive. It defaults to `withoutEnlargement`, so images already
// narrower than the cap pass through untouched.
import awardWinner1 from "../assets/awardwinners/1.jpg?w=1600";
import awardWinner1Thumb from "../assets/awardwinners/1.jpg?w=480";
import awardWinner2 from "../assets/awardwinners/2.jpg?w=1600";
import awardWinner3 from "../assets/awardwinners/3.jpg?w=1600";
import awardWinner4 from "../assets/awardwinners/4.jpg?w=1600";
import awardWinner5 from "../assets/awardwinners/5.jpg?w=1600";
import awardWinner6 from "../assets/awardwinners/6.jpg?w=1600";
import awardWinner7 from "../assets/awardwinners/7.jpg?w=1600";
import awardWinner8 from "../assets/awardwinners/8.jpg?w=1600";
import awardWinner9 from "../assets/awardwinners/9.jpg?w=1600";
import awardWinner10 from "../assets/awardwinners/10.jpg?w=1600";
import awardWinner11 from "../assets/awardwinners/11.jpg?w=1600";
import awardWinner12 from "../assets/awardwinners/12.jpg?w=1600";
import drawing1 from "../assets/drawings/1.jpg?w=1600";
import drawing1Thumb from "../assets/drawings/1.jpg?w=480";
import drawing2 from "../assets/drawings/2.jpg?w=1600";
import drawing3 from "../assets/drawings/3.jpg?w=1600";
import drawing4 from "../assets/drawings/4.jpg?w=1600";
import drawing5 from "../assets/drawings/5.jpg?w=1600";
import drawing6 from "../assets/drawings/6.jpg?w=1600";
import drawing7 from "../assets/drawings/7.jpg?w=1600";
import drawing8 from "../assets/drawings/8.jpg?w=1600";
import drawing9 from "../assets/drawings/9.jpg?w=1600";
import drawing10 from "../assets/drawings/10.jpg?w=1600";
import drawing11 from "../assets/drawings/11.jpg?w=1600";
import drawing12 from "../assets/drawings/12.jpg?w=1600";
import drawing13 from "../assets/drawings/13.jpg?w=1600";
import july2025Img1 from "../assets/july2025/1.jpg?w=1600";
import july2025Img1Thumb from "../assets/july2025/1.jpg?w=480";
import july2025Img2 from "../assets/july2025/2.jpg?w=1600";
import july2025Img3 from "../assets/july2025/3.jpg?w=1600";
import july2025Img4 from "../assets/july2025/4.jpg?w=1600";
import july2025Img5 from "../assets/july2025/5.jpg?w=1600";
import july2025Img6 from "../assets/july2025/6.jpg?w=1600";
import july2025Img7 from "../assets/july2025/7.jpg?w=1600";
import portrait1 from "../assets/portraits/1.jpg?w=1600";
import portrait1Thumb from "../assets/portraits/1.jpg?w=480";
import portrait2 from "../assets/portraits/2.jpg?w=1600";
import portrait3 from "../assets/portraits/3.jpg?w=1600";
import portrait4 from "../assets/portraits/4.jpg?w=1600";
import portrait5 from "../assets/portraits/5.jpg?w=1600";
import portrait6 from "../assets/portraits/6.jpg?w=1600";
import portrait7 from "../assets/portraits/7.jpg?w=1600";
import portrait8 from "../assets/portraits/8.jpg?w=1600";
import portrait9 from "../assets/portraits/9.jpg?w=1600";
import portrait10 from "../assets/portraits/10.jpg?w=1600";
import portrait11 from "../assets/portraits/11.jpg?w=1600";
import portrait12 from "../assets/portraits/12.jpg?w=1600";
import portrait13 from "../assets/portraits/13.jpg?w=1600";
import wearable1 from "../assets/wearable/1.jpg?w=1600";
import wearable1Thumb from "../assets/wearable/1.jpg?w=480";
import wearable2 from "../assets/wearable/2.jpg?w=1600";
import wearable3 from "../assets/wearable/3.jpg?w=1600";
import wearable4 from "../assets/wearable/4.jpg?w=1600";
import wearable5 from "../assets/wearable/5.jpg?w=1600";
import wearable6 from "../assets/wearable/6.jpg?w=1600";
import wearable7 from "../assets/wearable/7.jpg?w=1600";
import wearable8 from "../assets/wearable/8.jpg?w=1600";
import wearable9 from "../assets/wearable/9.jpg?w=1600";
import wearable10 from "../assets/wearable/10.jpg?w=1600";
import wearable11 from "../assets/wearable/11.jpg?w=1600";

export const galleries = [
  {
    slug: "july-2025",
    galleryName: "July 2025",
    galleryImg: july2025Img1Thumb,
    images: [
      { source: july2025Img1, altText: "image1" },
      { source: july2025Img2, altText: "image2" },
      { source: july2025Img3, altText: "image3" },
      { source: july2025Img4, altText: "image4" },
      { source: july2025Img5, altText: "image5" },
      { source: july2025Img6, altText: "image6" },
      { source: july2025Img7, altText: "image7" },
    ],
  },
  {
    slug: "award-winners",
    galleryName: "Award Winners",
    galleryImg: awardWinner1Thumb,
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
  },
  {
    slug: "drawings",
    galleryName: "Drawings",
    galleryImg: drawing1Thumb,
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
  },
  {
    slug: "portraits",
    galleryName: "Portraits",
    galleryImg: portrait1Thumb,
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
  },
  {
    slug: "wearable-art",
    galleryName: "Wearable Art",
    galleryImg: wearable1Thumb,
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
  },
];
