const mobileContainer = document.querySelector(".mobile-container");
const burger = document.querySelector(".hamburger");

function addClass() {
	mobileContainer.classList.toggle("show");
	burger.classList.toggle("is-active");
}

burger.addEventListener("click", addClass);
