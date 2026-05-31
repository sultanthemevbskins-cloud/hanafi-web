/**
 * CTOS Hero Slider
 * Controlled via data-speed attribute on .ctos-hero-slider
 * Editable in Site Editor: click the HTML block inside the slider to change settings.
 */
(function () {
  'use strict';

  function initSlider(slider) {
    var slides  = slider.querySelectorAll('.ctos-hero-slide');
    var dots    = slider.querySelectorAll('.ctos-dot');
    var speed   = parseInt(slider.getAttribute('data-speed') || '5500', 10);
    var current = 0;
    var timer;

    if (!slides.length) return;

    function goTo(index) {
      slides[current].classList.remove('is-active');
      if (dots[current]) dots[current].classList.remove('is-active');
      current = (index + slides.length) % slides.length;
      slides[current].classList.add('is-active');
      if (dots[current]) dots[current].classList.add('is-active');
    }

    function startAuto() {
      clearInterval(timer);
      timer = setInterval(function () { goTo(current + 1); }, speed);
    }

    // Init first slide
    slides[0].classList.add('is-active');
    if (dots[0]) dots[0].classList.add('is-active');
    startAuto();

    // Dot click
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        clearInterval(timer);
        goTo(i);
        startAuto();
      });
    });

    // Pause on hover
    slider.addEventListener('mouseenter', function () { clearInterval(timer); });
    slider.addEventListener('mouseleave', startAuto);

    // Keyboard prev/next when focused
    slider.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft')  { clearInterval(timer); goTo(current - 1); startAuto(); }
      if (e.key === 'ArrowRight') { clearInterval(timer); goTo(current + 1); startAuto(); }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.ctos-hero-slider').forEach(initSlider);
  });
}());
