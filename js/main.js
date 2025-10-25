$(document).ready(function() {
  const $carousel = $('.reviews-scroll');
  const scrollAmount = 300;

  $('.arrow-left').on('click', function() {
    $carousel.animate({
      scrollLeft: $carousel.scrollLeft() + scrollAmount
    }, 100);
  });
  $('.arrow-right').on('click', function() {
    $carousel.animate({
      scrollLeft: $carousel.scrollLeft() - scrollAmount
    }, 100);
  });
});

$(document).ready(function() {
  const $carousel = $('.tariffs-scroll');
  const scrollAmount = 500;

  $('.left-arrow').on('click', function() {
    $carousel.animate({
      scrollLeft: $carousel.scrollLeft() + scrollAmount
    }, 100);
  });

  $('.right-arrow').on('click', function() {
    $carousel.animate({
      scrollLeft: $carousel.scrollLeft() - scrollAmount
    }, 100);
  });
});