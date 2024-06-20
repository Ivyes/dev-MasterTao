const mobileContainer = document.querySelector('.mobile-container');
const burger = document.querySelector('.btn-burger');

function addClass() {
    mobileContainer.classList.toggle('show');
}

burger.addEventListener('click', addClass);

