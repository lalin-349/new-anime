// import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FirstBanner, SecondSlider, FirstPageGrid } from "./App.jsx";
import { Navbar } from "./components/header.jsx";
import { Context, AutoPlayVideo } from "./components/mainbody.jsx";
import { Footer } from "./components/footer.jsx";
// import WatchPage from "./watch-page/components/watch-page-components.jsx";
import { GridOfWatchPage } from "./App.jsx";
import './watch-page/style.css'
// import Swiper from 'swiper';
import "./swiper-bundle.min.css";
import "./js/swiper-bundle.min.js"
import "./index.css";
import "./banner.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/new-anime">
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <FirstBanner />
            <Context />
            <SecondSlider />
            <AutoPlayVideo />
            <FirstPageGrid />
            <Footer />
          </>
        }
      />
      <Route
  path="/watch-page"
  element={
    <div className="site">
      <Navbar />
      <GridOfWatchPage />
      <Footer />
    </div>
  }
/>

    </Routes>
  </BrowserRouter>
);