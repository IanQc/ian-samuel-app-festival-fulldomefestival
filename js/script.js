/*if (swiper) {

  var swiper = new Swiper(".swiper-screenshots", {
    loop: true,
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

}
*/
/*

  var swiperFiltres = new Swiper(".swiper-filters", {
    direction: 'horizontal',
    grabCursor: true,
    effect: 'slide',
    spaceBetween: 3
  });





  var swiperVedette = new Swiper(".swiper-featured-artworks", {
    direction: 'horizontal',
    grabCursor: true,
    effect: 'slide',
    slidesPerView: 3,
    spaceBetween: 3
  });



let coeurButton = document.querySelector(".bouton-aime");
let coeurIcon = document.querySelector(".bi-heart");

if (coeurIcon) {
  coeurButton.addEventListener('hover', function () {
    
    coeurIcon.classList.add("purple");
  })
}



/*
  var swiper = new Swiper(".swiper-screenshots", {
    loop: true,
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
*/

let swiperlp = document.querySelector(".swiper-screenshots");
let swiper_app = document.querySelector(".swiper-filters");

if (swiperlp){
  const premierSwiper = new Swiper (".swiper-screenshots", {
    loop: true,
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
} else if (swiper_app){
  const deuxiemeSwiper = new Swiper (".swiper-filters", {
    direction: 'horizontal',
    grabCursor: true,
    effect: 'slide',
    spaceBetween: 3
  });
  const troisiemeSwiper = new Swiper (".swiper-featured-artworks", {
    direction: 'horizontal',
    grabCursor: true,
    effect: 'slide',
    slidesPerView: 3,
    spaceBetween: 3
  })
}




