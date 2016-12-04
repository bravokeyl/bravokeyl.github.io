'use strict';

jQuery(document).ready(function(){
  jQuery('.match-height').matchHeight();
});

window.sr = ScrollReveal({ duration: 500 });
sr.reveal('.scroll-reveal');

var hamburger = document.getElementById('hamburger-icon');
hamburger.onclick = function() {
  hamburger.classList.toggle('active');
  document.body.classList.toggle('show');
};
