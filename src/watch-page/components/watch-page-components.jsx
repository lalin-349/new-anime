// src/watch-page/WatchPage.jsx
import { useSearchParams } from "react-router-dom";
import { shows } from "../main-data.jsx";
import { useEffect, useRef } from 'react';

export default function WatchPage() {
  const [searchParams] = useSearchParams();
  const playId = searchParams.get("play");
  const show = shows.find(item => item.id === playId);

  if (!show) return <div>Show not found</div>;

  return (
    <MediaContainer
      videoRef={null}
      video={show.video}
      image={show.image}
      title={show.title}
      description={show.description}
    />
  );
}


export function MediaContainer({ videoRef, video, image, title, description }) {

          const containerRef = useRef(null);
const toggleTextRef = useRef(null);

useEffect(() => {
  const container = containerRef.current;
  const toggleText = toggleTextRef.current;
//  if (!container || !toggleText) return; // Prevent null access

  const checkOverflow = () => {
  if (container && toggleText) {
    if (container.scrollHeight > container.clientHeight) {
      toggleText.style.display = 'inline';
    } else {
      toggleText.style.display = 'none';
    }
  }
};

  const handleToggle = () => {
    const recom = document.querySelector('.recom-watch');
    if (window.innerWidth <= 470) {
      if (container.classList.contains('expanded')) {
        container.classList.remove('expanded');
        toggleText.textContent = 'More';
        toggleText.style.bottom = '-140px';
        if (recom) recom.style.marginTop = '200px';
      } else {
        container.classList.add('expanded');
        toggleText.textContent = 'Less';
        toggleText.style.bottom = '-160px';
        container.style.marginBottom = '200px';
        if (recom) recom.style.marginTop = '400px';
      }
    } else if (window.innerWidth <= 500) {
      if (container.classList.contains('expanded')) {
        container.classList.remove('expanded');
        toggleText.textContent = 'More';
        toggleText.style.bottom = '-110px';
      } else {
        container.classList.add('expanded');
        toggleText.textContent = 'Less';
        toggleText.style.bottom = '-150px';
      }
    } else if (window.innerWidth <= 700) {
      if (container.classList.contains('expanded')) {
        container.classList.remove('expanded');
        toggleText.textContent = 'More';
        toggleText.style.bottom = '39px';
      } else {
        container.classList.add('expanded');
        toggleText.textContent = 'Less';
        toggleText.style.bottom = '-50px';
      }
    } else {
      if (container.classList.contains('expanded')) {
        container.classList.remove('expanded');
        toggleText.textContent = 'More';
      } else {
        container.classList.add('expanded');
        toggleText.textContent = 'Less';
      }
    }
  };

  checkOverflow();
  toggleText.addEventListener('click', handleToggle);

  return () => {
    toggleText.removeEventListener('click', handleToggle);
  };
}, [description]);


  return (
    <section id="dis" className="media-container">
      <div className="main-banner">
        <video
        key={video}
          ref={videoRef}
          src={video}
          className="video-tag"
          controls
          preload="metadata"
        />

        <div className="info">
          <div className="box">
            <div className="pic-title">
              <img
               key={image}
                src={image || "/fallback.jpg"}
                alt={title || "Banner image"}
                className="banner-image"
              />
              <h2 className="title">{title || "Untitled"}</h2>
            </div>

            <p className="des" id="textContainer" ref={containerRef}>
              {description || "No description available."}
            </p>

            <button className="toggle-text" id="toggleText" ref={toggleTextRef}>
              More
            </button>
          </div>
        </div>
      </div>

      <div className="recom-watch">Popular Movies</div>
      <p className="text-recom">
        Explore top-rated movies and find your next favorite!
      </p>
    </section>
  );
}
    
export function GridOfShows(props) {
  const {
    class: containerClass,
    button,
    videosrc,
    img,
    image,
    title,
    length
  } = props;

  const imageSrc = img?.src || image || "/fallback.jpg";

  return (
    <div className={containerClass || "default-grid"}>
      <div className={button || "default-button"} data-src={videosrc}>
        <img src={imageSrc} alt={title || "not found"} />
      </div>

      <p>{title || "Untitled"}</p>
      <p>Movie {length || "—"}</p>
    </div>
  );
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
 