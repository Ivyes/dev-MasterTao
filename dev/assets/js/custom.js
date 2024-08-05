const mobileContainer = document.querySelector(".mobile-container");
const burger = document.querySelector(".hamburger");
const body = document.querySelector("body");

function addClass() {
	mobileContainer.classList.toggle("show");
	burger.classList.toggle("is-active");
	body.classList.toggle("overflow-hidden");
}

burger.addEventListener("click", addClass);

const swiperBanner = new Swiper(".banner-slider", {
	loop: true,
	spaceBetween: 20,

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	navigation: {
		enabled: false,
	},

	breakpoints: {
		// При разрешении >= 1025
		1025: {
			navigation: {
				enabled: true,
				nextEl: ".banner-slider-btn-next",
				prevEl: ".banner-slider-btn-prev",
			},
		},
	},
});

// JS download file name

const downloadFile = document.querySelectorAll(".download-file");
const fileName = document.querySelector('.file-name');

downloadFile.forEach(item => {
	item.addEventListener('change', function () {
		fileName.innerHTML = item.files[0].name;
	})
});

// Swiper advantages
const advantagesSlideLength = document.querySelectorAll('.advantages .swiper-slide').length;
console.log(advantagesSlideLength);

const swiperAdvantages = new Swiper('#advantages', {
  	speed: 400,
	spaceBetween: 12,
	loop: true,
	simulateTouch: true,
	slidesPerView: 1,

	pagination: {
		el: '.swiper-pagination',
		enabled: true,
		clickable: true,
	},

	breakpoints: {
		1025: {
			spaceBetween: 0,
			loop: false,
			slidesPerView: 4,
			slidesPerGroup: advantagesSlideLength,
			simulateTouch: false,

			pagination: {
				enabled: false,
			}
		}
	}
});

// default slider

const defaultSlider = new Swiper('#delivery', {
	speed: 400,
	spaceBetween: 30,
	loop: true,
	slidesPerView: 1,

	navigation: {
		enabled: true,
		nextEl: ".swiper-button-delivery-prev",
		prevEl: ".swiper-button-delivery-next",
	},

	pagination: {
		el: '.swiper-pagination',
		enabled: true,
		clickable: true,
	},

	breakpoints: {
		800: {
			slidesPerView: 2,
		},

		1024: {
			slidesPerView: 2,
			pagination: {
				enabled: false,
			},
		},

		1300: {
			slidesPerView: 3,
			pagination: {
				enabled: false,
			},
		},
	},
});

const servicesSlider = new Swiper('#services', {
	speed: 400,
	spaceBetween: 30,
	loop: true,
	slidesPerView: 1,

	navigation: {
		enabled: true,
		nextEl: ".swiper-button-services-prev",
		prevEl: ".swiper-button-services-next",
	},

	pagination: {
		el: '.swiper-pagination',
		enabled: true,
		clickable: true,
	},

	breakpoints: {
		800: {
			slidesPerView: 2,
		},

		1024: {
			slidesPerView: 2,
			pagination: {
				enabled: false,
			},
		},

		1300: {
			slidesPerView: 3,
			pagination: {
				enabled: false,
			},
		},
	},
});