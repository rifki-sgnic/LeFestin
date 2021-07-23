const mobileMenu = document.querySelector('.mobile-menu');
const mainMenu = document.querySelector('nav');
const menuExit = document.querySelector('.menu-exit');
const body = document.querySelector('body');

window.onload = () => {
  body.classList.remove('preload');
};

mobileMenu.addEventListener('click', () => {
  mainMenu.classList.add('main-active');
});

menuExit.addEventListener('click', () => {
  mainMenu.classList.remove('main-active');
});

window.addEventListener('click', (e) => {
  if (document.getElementById('content').contains(e.target)) {
    mainMenu.classList.remove('main-active');
  }
});

const myNav = document.getElementById('mynav');
window.onscroll = () => {
  if (
    document.body.scrollTop >= 100
    || document.documentElement.scrollTop >= 100
  ) {
    myNav.classList.add('nav-colored');
    myNav.classList.remove('nav-transparent');
  } else {
    myNav.classList.add('nav-transparent');
    myNav.classList.remove('nav-colored');
  }
};
