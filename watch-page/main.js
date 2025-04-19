const playOne = () =>{
    const gg = document.querySelector(".btn1");
    const gb = document.querySelector(".video-tag");
    gb.src = gg.getAttribute("src");
    gb.load();
    gb.play();
}
document.querySelector(".btn1").addEventListener("click",()=> playOne());

const playTwo = () =>{
    const gg = document.querySelector(".btn2");
    const gb = document.querySelector(".video-tag");
    gb.src = gg.getAttribute("src");
    gb.load();
    gb.play();
}
document.querySelector(".btn2").addEventListener("click",()=> playTwo());

const playThree = () =>{
    const gg = document.querySelector(".btn3");
    const gb = document.querySelector(".video-tag");
    gb.src = gg.getAttribute("src");
    gb.load();
    gb.play();
}
document.querySelector(".btn3").addEventListener("click",()=> playThree());

const playFour = () =>{
    const gg = document.querySelector(".btn4");
    const gb = document.querySelector(".video-tag");
    gb.src = gg.getAttribute("src");
    gb.load();
    gb.play();
}
document.querySelector(".btn4").addEventListener("click",()=> playFour());

const playFive = () =>{
    const gg = document.querySelector(".btn5");
    const gb = document.querySelector(".video-tag");
    gb.src = gg.getAttribute("src");
    gb.load();
    gb.play();
}
document.querySelector(".btn5").addEventListener("click",()=> playFive());