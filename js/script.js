var slider1 = new Swiper ('.slider1', {
    spaceBetween: 30,
    loop: true,
    effect: "fade",

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 1800,
    }
  });


    var slider2 = new Swiper(".slider2", {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 200000,
      },
      pagination: {
        el: ".modal-swiper-pagination",
        clickable: true,
      },
      navigation: {
            nextEl: '.modal-swiper-button-next',
            prevEl: '.modal-swiper-button-prev',
      },

      breakpoints: {
        0: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        620: {
          slidesPerView: 3,
          spaceBetween: 20,
        },

        738: {
          slidesPerView: 3,
          spaceBetween: 20,
        },

        830: {
          slidesPerView: 4,
          spaceBetween: 20,
        },

        // 940: {
        //   slidesPerView: 4
        // },

        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
         
        1229: {
          slidesPerView: 6,
          spaceBetween: 20,
        }
      }
    });



  const dots = document.querySelector(".dots");
  dots.onclick = function() {
     const navBar = document.querySelector(".nav_phone");
      navBar.classList.toggle("active");
    const logo = document.querySelector(".logo a");
      logo.classList.toggle("active");
    const dots = document.querySelector(".dots");
      dots.classList.toggle("active");

  }

  document.addEventListener("DOMContentLoaded", () => {
    let wordNumbers = ["one", "two", "three", "four", "five", "six", "seven", 
                       "eight", "nine", "ten", "eleven", "twelve", "thirteen", 
                       "fourteen", "fifteen", "sixteen", "seventeen", 
                       "eighteen", "nineteen", "twenty","twentyone","twentytwo","twentythree","twentyfour"];

    for (let i = 1; i <= 24; i++) {
        let picElement = document.getElementById(`pic${wordNumbers[i - 1]}`); // Match picOne, picTwo, etc.

        if (picElement) { // Check if the element exists before adding the event listener
            picElement.addEventListener("click", () => {
                window.location.href = `watch-page/index.html?play=${wordNumbers[i - 1]}`;
            });
        }
    }
});
  document.addEventListener("DOMContentLoaded", () => {
    let wordNumbers = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
    ];

    for (let i = 1; i <= 16; i++) {
      let picElement = document.getElementById(`slide${wordNumbers[i - 1]}`); // Match picOne, picTwo, etc.

      if (picElement) {
        // Check if the element exists before adding the event listener
        picElement.addEventListener("click", () => {
          window.location.href = `watch-page/index.html?slide=${
            wordNumbers[i - 1]
          }`;
        });
      }
    }
  });
