const playOne = () =>{
    const gg = document.querySelector(".btn1");
    const gb = document.querySelector(".video-tag");
    gb.src = gg.getAttribute("src");
    gb.load();
    gb.play();
}
document.querySelector(".btn1").addEventListener("click",()=> playOne());

const playTwo = () =>{
    const gg = document.querySelector(".btn3");
    const gb = document.querySelector(".video-tag");
    gb.src = gg.getAttribute("src");
    gb.load();
    gb.play();
}
document.querySelector(".btn3").addEventListener("click",()=> playTwo());