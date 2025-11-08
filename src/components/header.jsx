import { useEffect } from "react";
export function Navbar(){
useEffect(() => {
  const dots = document.querySelector(".dots");
  const navBar = document.querySelector(".nav_phone");
  const logo = document.querySelector(".logo a");
  const dis = document.getElementById("dis");

  if (dots) {
    dots.onclick = function () {
      if (navBar) navBar.classList.toggle("active");
      if (logo) logo.classList.toggle("active");

      dots.classList.toggle("active");
      dots.classList.toggle("hide");

      if (dis) {
        dis.style.display = dots.classList.contains("hide") ? "none" : "block";
      }
    };
  }
}, []);


    return (
     <nav>
    <div className="main-head">
        <div className="task_content">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="./2nd-page/index2.html">Browse</a></li>
            </ul>
        </div>

        <div className="logo"><a href="#">LAnime</a></div>

        <div className="task_content2">
            <ul>
                <li><a href="https://lalin-349.github.io/portfolio/index.html">About me</a></li>
                <li><a href="https://lalin-349.github.io/portfolio/contact.html">Contact</a></li>
            </ul>
        </div>        
    </div>

    <div className="dots">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
    </div>

    <div className="nav_phone">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">Browse</a></li>
            <li><a href="https://lalin-349.github.io/portfolio/index.html">About me</a></li>
            <li><a href="https://lalin-349.github.io/portfolio/contact.html">Contact</a></li>
        </ul>
    </div>
        </nav>
    )
}//  nav bar responsive 
    