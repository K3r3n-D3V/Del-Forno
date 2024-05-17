let appendNumber = 600;
let prependNumber = 1;
const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  virtual: {
    slides: (function () {
      const slides = [];
      for (var i = 0; i < 600; i += 1) {
        slides.push("Slide " + (i + 1));
      }
      return slides;
    })(),
  },
});

document.querySelector(".slide-1").addEventListener("click", function (e) {
  e.preventDefault();
  swiper.slideTo(0, 0);
});

document.querySelector(".slide-250").addEventListener("click", function (e) {
  e.preventDefault();
  swiper.slideTo(249, 0);
});

document.querySelector(".slide-500").addEventListener("click", function (e) {
  e.preventDefault();
  swiper.slideTo(499, 0);
});

document
  .querySelector(".prepend-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.virtual.prependSlide([
      "Slide " + --prependNumber,
      "Slide " + --prependNumber,
    ]);
  });

document.querySelector(".append-slide").addEventListener("click", function (e) {
  e.preventDefault();
  swiper.virtual.appendSlide("Slide " + ++appendNumber);
});

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var specials22 = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
})


