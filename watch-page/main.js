const playOne = () =>{
    const gg = document.querySelector(".btn1");
    const gb = document.querySelector(".video-tag");
    gb.src = gg.getAttribute("src");
    gb.load();
    gb.play();
    const pic = document.querySelector(".banner-image").src = "/img2/image-1.jpg";
    const title = document.querySelector(".title").textContent = "One piece";
    const description = "The One Piece anime, adapted from Eiichiro Oda's manga, is a legendary tale of adventure, friendship, and dreams. It follows Monkey D. Luffy and his crew, the Straw Hat Pirates, as they sail the Grand Line in search of the mythical treasure known as the One Piece, aiming to make Luffy the King of the Pirates. Renowned for its world-building, humor, and emotional depth, the anime has been airing since 1999 and boasts over 1,000 episodes. Its captivating arcs and unforgettable characters have made it a cornerstone of the anime world.";
    const des = document.querySelector(".des").textContent = description;
}
document.querySelector(".btn1").addEventListener("click",()=> playOne());

const playTwo = () =>{
    const gg = document.querySelector(".btn2");
    const gb = document.querySelector(".video-tag");
    gb.src = gg.getAttribute("src");
    gb.load();
    gb.play();
    const pic = document.querySelector(".banner-image").src = "/img2/image-2.jpg";
    const title = document.querySelector(".title").textContent = "Naruto";
    const description = "The **Naruto** anime, based on Masashi Kishimoto's manga, is a beloved tale of perseverance, friendship, and self-discovery. It follows Naruto Uzumaki, a young ninja ostracized by his village for being the host of the Nine-Tails Fox, a powerful beast sealed within him. Despite this, Naruto dreams of becoming the Hokage, the leader of his village, to earn the respect and recognition of his peers."
    const des = document.querySelector(".des").textContent = description;
 }
document.querySelector(".btn2").addEventListener("click",()=> playTwo());

const playThree = () =>{
    const gg = document.querySelector(".btn3");
    const gb = document.querySelector(".video-tag");
    gb.src = gg.getAttribute("src");
    gb.load();
    gb.play();
    const pic = document.querySelector(".banner-image").src = "/img2/image-4.jpg";
    const title = document.querySelector(".title").textContent = "Jujutsu kaisen";
    const description = "Jujutsu Kaisen is a thrilling anime and manga series that dives into a world of curses and sorcery. The story follows Yuji Itadori, a high school student who accidentally becomes the host of a powerful curse named Sukuna after swallowing a cursed object. Guided by skilled sorcerers like Satoru Gojo, Yuji trains at Tokyo Jujutsu High to battle curses and protect humanity. The series is celebrated for its intense battles, emotional depth, and stunning animation.";
    const des = document.querySelector(".des").textContent = description;
}
document.querySelector(".btn3").addEventListener("click",()=> playThree());

const playFour = () =>{
    const gg = document.querySelector(".btn4");
    const gb = document.querySelector(".video-tag");
    gb.src = gg.getAttribute("src");
    gb.load();
    gb.play();
    const pic = document.querySelector(".banner-image").src = "/img2/image-3.jpg";
    const title = document.querySelector(".title").textContent = "Demon slayer";
    const description = "Demon Slayer: Kimetsu no Yaiba is a captivating anime and manga series set in Taisho-era Japan. It follows Tanjiro Kamado, a kind-hearted boy who becomes a demon slayer after his family is tragically killed by demons, and his sister Nezuko is transformed into one. Tanjiro embarks on a journey to avenge his family and find a cure for Nezuko, encountering fierce battles, breathtaking animation, and a rich cast of characters along the way";
    const des = document.querySelector(".des").textContent = description;
}
document.querySelector(".btn4").addEventListener("click",()=> playFour());

const playFive = () =>{
    const gg = document.querySelector(".btn5");
    const gb = document.querySelector(".video-tag");
    gb.src = gg.getAttribute("src");
    gb.load();
    gb.play();
    const pic = document.querySelector(".banner-image").src = "/img2/tomo.jpg";
    const title = document.querySelector(".title").textContent = "A edit";
}
document.querySelector(".btn5").addEventListener("click",()=> playFive());