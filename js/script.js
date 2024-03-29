
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
    slidesPerView: "auto",
    spaceBetween: 5,
    focusableElements: false,
  });
  const troisiemeSwiper = new Swiper (".swiper-featured-artworks", {
    direction: 'horizontal',
    grabCursor: true,
    effect: 'slide',
    slidesPerView: 2.5,
    spaceBetween: 10
  })
}

if (window.location.href.includes("artwork.html")) {
  let coeurButton = document.querySelector(".bouton-aime");
  let coeurIcon = document.querySelector(".bi-heart");
  coeurButton.addEventListener("click", function(){
    if(coeurIcon.classList.contains("bi-heart-fill")){
      coeurIcon.classList.add("bi-heart");
      coeurIcon.classList.remove("bi-heart-fill");
    } else if (coeurIcon.classList.contains("bi-heart")){
      coeurIcon.classList.add("bi-heart-fill");
      coeurIcon.classList.remove("bi-heart");
    }
  });
}

