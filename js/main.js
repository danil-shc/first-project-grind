const carousel = document.querySelector('.reviews-scroll');
const leftbutton = document.querySelector('.arrow-left');
const rightbutton = document.querySelector('.arrow-right');

leftbutton.addEventListener('click', () => {
  carousel.scrollBy({
    left: -130,
  });
});
rightbutton.addEventListener('click', () => {
  carousel.scrollBy({
    left: 130,
  });
});
const carousel1 = document.querySelector('.tariffs-scroll');
const leftbutton1 = document.querySelector('.left-arrow');
const rightbutton1 = document.querySelector('.right-arrow');

leftbutton1.addEventListener('click', () => {
  carousel1.scrollBy({
    left: -260,
  });
});
rightbutton1.addEventListener('click', () => {
  carousel1.scrollBy({
    left: 260,
  });
});