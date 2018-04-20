$(document).ready(function() {
  $(".menu-toggle").on('click', function() {
    $(this).toggleClass("on");
    $('.menu-section').toggleClass("on");
    $("nav ul").toggleClass('hidden');
  });

  var reveal = {
  delay    : 100,
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
    

/*external js
https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js
https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/CSSPlugin.min.js
*/

window.onload = function () {
    var logo = document.getElementById("logo");
    TweenLite.from(logo, 1.5, {
        ease: Back.easeOut.config(1.7),
        opacity: 0,
        left: '130%',
        delay: 3,
        scaleX:1.8, scaleY:1.8
    });
    
    
   
}








