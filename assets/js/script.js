/* Author: Reshma Lihe */

window.onload = function() {
  // Function for navigation
  const hamburger = document.querySelector ('.hamburger');
  const nav = document.querySelector ('.menu');

  hamburger.addEventListener ('click', () => {
    nav.classList.toggle('show');  
    hamburger.classList.toggle('open');
    document.querySelector('html').classList.toggle('no-scroll');
  });

  // Function to like portfolio
  const heart = document.querySelectorAll('.heart');
  heartArray = Array.from(heart);

  heartArray.forEach(e => {
    e.addEventListener('click', () => {
      e.classList.toggle('like');
    })
  });
}

// Function for banner slider
$(document).ready (function() {
  $('.banner-slider').slick ({
  autoplay: true,
  arrows:false,
  autoplaySpeed: 3000,
  });
});