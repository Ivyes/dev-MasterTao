const mobileContainer = document.querySelector(".mobile-container");
const burger = document.querySelector(".hamburger");
const body = document.querySelector("body");

function addClass() {
	mobileContainer.classList.toggle("show");
	burger.classList.toggle("is-active");
	body.classList.toggle("overflow-hidden");
}

burger.addEventListener("click", addClass);

const bannerSlider = new Swiper('.banner-slider', {
  	speed: 400,
	spaceBetween: 100,
	direction: 'horizontal',
	slidesPerView: 1,
	pagination: {
    el: '.swiper-pagination',
	},
	navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
