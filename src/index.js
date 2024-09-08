import "./index.html";
import "./card.html";
import "./cart.html";

import "./index.scss";

import Swiper from "swiper";
import { Thumbs, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

const thumbSlider = new Swiper(".card__slider-thumb", {
  spaceBetween: 44,
  slidesPerView: 3,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  modules: [Scrollbar],
});

new Swiper(".card__image", {
  spaceBetween: 10,
  slidesPerView: 1,
  thumbs: {
    swiper: thumbSlider,
    slideThumbActiveClass: "card__thumb-btn_active",
  },
  modules: [Thumbs],
});

new Swiper(".recommended__slider", {
  spaceBetween: 30,
  slidesPerView: 5,
});
