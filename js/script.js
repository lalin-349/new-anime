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
      delay: 16000000000000,
    }
  });



    var slider2 = new Swiper(".slider2", {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
      loop: true,
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
          slidesPerView: 2
        },
        620: {
          slidesPerView: 3
        },

        738: {
          slidesPerView: 3
        },

        830: {
          slidesPerView: 4
        },

        // 940: {
        //   slidesPerView: 4
        // },

        1024: {
          slidesPerView: 5
        },
         
        1229: {
          slidesPerView: 6
        }
      }
    });

    const dots = document.querySelector(".dots");
    dots.onclick = function() {
    const navphone =document.querySelector(".nav_phone")
  .navphone.classList.toggle("active");
}



