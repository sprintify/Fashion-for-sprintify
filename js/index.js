/* ScrollReveal functions */
$(document).ready(function() {
  $(".menu-toggle").on('click', function() {
    $(this).toggleClass("on");
    $('.menu-section').toggleClass("on");
    $("nav ul").toggleClass('hidden');
  });

  var reveal = {
  delay    : 65,
  duration : 900,
  distance : '15px',
  easing   : 'ease',
  scale    : .95
};

  window.sr = ScrollReveal();
  sr.reveal('.box', reveal);
  sr.reveal('#about', reveal);
    sr.reveal('.showcase-right',{
	duration:2000,
	origin:'bottom',
	distance:'300px'
});
});
