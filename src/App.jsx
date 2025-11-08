import MovieClipImage from './assets/img2/movie-clapper-open.png'
// import './App.css'
import { Firstslider, SecondSliderComponent, FirstGrid } from './components/mainbody.jsx'
import { MainBanner, Secondslider, FirstofGridData } from './js/data.js'

import { useState, useRef, useEffect  } from "react";
import { useSearchParams } from "react-router-dom";
import { MediaContainer, GridOfShows } from "./watch-page/components/watch-page-components.jsx";
import { shows } from "./watch-page/main-data.jsx";


export function FirstBanner() {
  return (
    <div className="banner swiper-container slider1">
      <div className="swiper-wrapper">
        {MainBanner.map((prop, index) => (
          <Firstslider
            key={index}
            title={prop.title}
            duration={prop.duration}
            year={prop.year}
            id={prop.id} 
            IdOfTheShow={prop.id}
            description={prop.description}
            smallboxpic={{
              img: {
                src: prop.smallboxpic.img.src,
                alt: prop.smallboxpic.img.alt
              }
            }}
            backgroundImage={prop.backgroundImage}
          />
        ))}
      </div>

      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
}




export function SecondSlider(){
  return (
<div className="navigation-contain-box">
<div className="swiper-container slider2">
    {/* <!-- Additional required wrapper --> */}
    <div className="slider-box swiper-wrapper">
{Secondslider.map((prop, index)=>(
  <SecondSliderComponent 
  key={index} 
  id={prop.id} 
  IdOfTheShow={prop.id}
  title={prop.title}
  min={prop.min}
  img={{
    src:prop.img.src
  }}
  />
))}
    </div>
    </div>
  <div className="swiper-button-next modal-swiper-button-next"></div>
    <div className="swiper-button-prev modal-swiper-button-prev"></div>
    <div className="swipe-for-more">swipe</div>
</div>
  )
}

export function FirstPageGrid(){
  return (
<div className="latest-container"> 
    <div className="movies-cards">
      <div className="latest-movies">
             <img src={MovieClipImage} alt="Null"/>
             <p>Latest Movies</p>
        </div>
        <div className="the-cards">  
{FirstofGridData.map((props, index)=>(
  <FirstGrid 
  key={index} 
  id={props.id}
  IdOfTheShow={props.id} 
  img={
  {
    src:props.img.src
  }
}
title={props.title}
min={props.min}
/>
))}
          
        </div>
          </div>
          </div>
  )
}












export function GridOfWatchPage() {
  const videoRef = useRef(null);
  const [searchParams] = useSearchParams();
  const playId = searchParams.get("play");
  
  // Only use playable items for the banner
  const playableItems = shows.filter(show => show.type === "playable");
  const defaultShow = playableItems.find(show => show.id === playId) || playableItems[0];
  const [selected, setSelected] = useState(defaultShow);
  
  const handleGridClick = (show) => {
    const normalized = {
      video: show.video || show.src || "", // ✅ fallback to src
      image: show.image || show.img?.src || "/fallback.jpg", // ✅ fallback to img.src
      title: show.title || "Untitled",
      description: show.description || "No description available.",
      length: show.length || show.min || "—",
      id: show.id,
      type: "playable" // ✅ force it to behave like a playable item
    };
    
  setSelected(normalized);
};

  useEffect(() => {
    console.log("Selected updated:", selected);
    if (videoRef.current && document.contains(videoRef.current)) {
      videoRef.current.load();
      videoRef.current.play();
      // videoRef.current.play().catch(() => {
      //   console.warn("Autoplay blocked or interrupted.");
      // });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selected]);
  
  
  return (
    <>
      <MediaContainer
        videoRef={videoRef}
        video={selected.video}
        image={selected.image}
        title={selected.title}
        description={selected.description}
      />

      <div className="the-cards">
        {shows
          .filter(show => show.type === "styled")
          .map((show, index) => (
            <div key={index} onClick={() => handleGridClick(show)}>
              <GridOfShows
                class={show.class}
                button={show.button}
                videosrc={show.video}
                img={{ src: show.image || show.img.src }}
                title={show.title}
                length={show.length}
                />
            </div>
          ))}
      </div>
    </>
  );
}



// export function GridOfWatchPage() {
//   const videoRef = useRef(null);
//   const [selected, setSelected] = useState(shows[0]);

//   const handlePlay = (show) => {
//     setSelected(show);
//     setTimeout(() => {
//       videoRef.current?.load();
//       videoRef.current?.play();
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }, 0);
//   };

//   return (
//     <>
//       <MediaContainer
//         videoRef={videoRef}
//         video={selected.src}
//         image={selected.img.src}
//         title={selected.title}
//         description={selected.description}
//       />

//       <div className="the-cards">
//         {shows.map((show, index) => (
//           <div key={index} onClick={() => handlePlay(show)}>
            // <GridOfShows
            //   class={show.class}
            //   button={show.button}
            //   videosrc={show.src}
            //   img={show.img}
            //   title={show.title}
            //   length={show.length}
            // />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
