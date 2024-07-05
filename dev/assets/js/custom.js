const mobileContainer = document.querySelector(".mobile-container");
const burger = document.querySelector(".hamburger");
const body = document.querySelector("body");

function addClass() {
	mobileContainer.classList.toggle("show");
	burger.classList.toggle("is-active");
	body.classList.toggle("overflow-hidden");
}

burger.addEventListener("click", addClass);

const swiper = new Swiper(".banner-slider", {
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
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
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
const advantagesSlideLength = document.querySelectorAll('.advantages .swiper-slide').length

const swiperAdvantages = new Swiper('#advantages', {
    spaceBetween: 12,
    loop: true,
    simulateTouch: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        enabled: true,
    },
    breakpoints: {
        1025: {
            spaceBetween: 0,
            loop: false,
            slidesPerGroup: advantagesSlideLength,
            simulateTouch: false,
            pagination: {
                enabled: false,
                el: '.swiper-pagination',
            }
        }
    }
  });