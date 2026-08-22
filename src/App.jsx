import { HashRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery/:slug" element={<GalleryPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
