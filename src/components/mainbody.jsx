import  play  from "../assets/img/1play.png"
import calender from "../assets/img/calendar.png"
import { useEffect } from 'react'
import loopvideo from "../assets/video/one.mp4"
import React from "react";
import { useNavigate } from "react-router-dom";

export function Firstslider(prop){
  const navigate = useNavigate();

  useEffect(() => {
    if (window.Swiper) {
      new window.Swiper('.slider1', {
        spaceBetween: 30,
        loop: true,
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 18000,
        },
      });
    }
  }, []);

  const handleClick = () => {
    if (!prop.id) {
      console.warn("Missing prop.id for navigation");
      return;
    }
    navigate(`/watch-page?play=${prop.id}`);
  };
    return (
        <>
        <div className="card-items swiper-slide">
         <div className="banner-pics" style={{ '--bg-image': `url(${prop.backgroundImage})` }}>
          <div className="banner-info ">
            <div className="main-name"> {prop.title}</div>
            <div className="symbols">
                <div className="hours">
                    <img src={play} alt="not found" />
                    <p>{prop.duration}</p>
                </div>
                <div className="calender">
                    <img src={calender} alt="not found" />
                <p>{prop.year}</p>
            </div>
            </div>
            <div className="titles">{prop.description}</div>
            <div className="button" id={prop.IdOfTheShow} onClick={handleClick}>Watch</div>
          </div>


            <div className="main-pics">
                <img src={prop.smallboxpic.img.src} alt={prop.smallboxpic.img.alt} />
             </div>
            </div>
        </div>
        </>
    )
}



export function Context(){
  return (<>
    <div className="text-inside">
    <div className="text-container">
        <h2> Explore the World</h2>
        <h6> of Anime</h6>
        <a href="watch-page" className="button-link"><div className="button"> View Collection</div></a>
    </div>
</div>

<div className="recom">
     <p>Top Film Recommendations</p>
 </div>
 </>
  )
}


export function SecondSliderComponent(prop) {
  const navigate = useNavigate();

  useEffect(() => {
    new Swiper(".slider2", {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: { delay: 2000 },
      pagination: {
        el: ".modal-swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".modal-swiper-button-next",
        prevEl: ".modal-swiper-button-prev",
      },
      breakpoints: {
        0: { slidesPerView: 3, spaceBetween: 5 },
        620: { slidesPerView: 3, spaceBetween: 20 },
        738: { slidesPerView: 3, spaceBetween: 20 },
        830: { slidesPerView: 4, spaceBetween: 20 },
        1024: { slidesPerView: 5, spaceBetween: 20 },
        1229: { slidesPerView: 6, spaceBetween: 20 },
      },
    });
  }, []);

  const handleClick = () => {
    if (!prop.id) {
      console.warn("Missing prop.id for navigation");
      return;
    }
    navigate(`/watch-page?play=${prop.id}`);
  };

  return (
    <div
      className="card-items2 swiper-slide"
      id={prop.IdOfTheShow}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="slides">
        <img src={prop.img?.src || prop.image} alt="image not found" />
      </div>
      <p>{prop.title}</p>
      <p>Movie {prop.min}</p>
    </div>
  );
}

export function AutoPlayVideo(){
  return (
    <div className="black-container">
    <div className="box1">
        <h3>“The selection and quality on LAnime are unmatched. My go-to for movie nights!”</h3>
        <p>Lalin sekhar, Front end Developer </p>
    </div>
    <div className="box2">
        <video src={loopvideo} autoPlay loop muted></video>
    </div>
</div>
  )
}

export function FirstGrid(props){
const navigate = useNavigate();
 const handleClick = () => {
    if (!props.id) {
      console.warn("Missing prop.id for navigation");
      return;
    }
    navigate(`/watch-page?play=${props.id}`);
  };
  return(
<div className="movies-box"  id={props.id} onClick={handleClick}> 
            
            <div className="movies-pic" >
                <img src={props.img.src} alt="not found"/>
            </div>
           
            <p>{props.title}</p>
            <p>Movies{props.min}</p>
        </div>
  )
}











// export function SecondSliderComponent(prop){

//   useEffect(() => {
//     new Swiper(".slider2", {
//       slidesPerView: 2,
//       slidesPerGroup: 1,
//       spaceBetween: 20,
//       loop: true,
//       autoplay: {
//         delay: 2000,
//       },
//       pagination: {
//         el: ".modal-swiper-pagination",
//         clickable: true,
//       },
//       navigation: {
//         nextEl: ".modal-swiper-button-next",
//         prevEl: ".modal-swiper-button-prev",
//       },
//       breakpoints: {
//         0: { slidesPerView: 3, spaceBetween: 5 },
//         620: { slidesPerView: 3, spaceBetween: 20 },
//         738: { slidesPerView: 3, spaceBetween: 20 },
//         830: { slidesPerView: 4, spaceBetween: 20 },
//         1024: { slidesPerView: 5, spaceBetween: 20 },
//         1229: { slidesPerView: 6, spaceBetween: 20 },
//       },
//     });
//   }, []);

// // const navigate = useNavigate(); // If you're using React Router

// //   const wordNumbers = [
// //     "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
// //     "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen"
// //   ];

// //   const handleClick = (word) => {
// //     // If using React Router:
// //     navigate(`/watch-page/index.html?slide=${word}`);

// //     // Or if using plain redirect:
// //     // window.location.href = `watch-page/index.html?slide=${word}`;
// //   };

//   return(
//     <div className="card-items2 swiper-slide" id={prop.IdOfTheShow} >
//         <div className="slides"> 
          
//         <img src={prop.img.src}  alt="image not found" />
            
//     </div>
//         <p>{prop.title}</p>
//         <p>Movie {prop.min}</p>
//     </div>
//   ) 
// }

