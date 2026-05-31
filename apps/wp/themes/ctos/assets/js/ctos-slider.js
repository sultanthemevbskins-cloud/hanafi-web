/**
 * CTOS Hero Slider
 * Features: auto-rotate, dot nav, keyboard, touch/swipe, pause on hover
 * Speed: set data-speed="5500" (ms) on the .ctos-hero-slider element
 */
(function () {
  'use strict';

  var SWIPE_THRESHOLD = 50; // px — minimum swipe distance

  function initSlider(slider) {
    var slides  = slider.querySelectorAll('.ctos-hero-slide');
    var dots    = slider.querySelectorAll('.ctos-dot');
    var speed   = parseInt(slider.getAttribute('data-speed') || '5500', 10);
    var current = 0;
    var timer;
    var touchStartX = 0;
    var touchStartY = 0;
    var isDragging  = false;

    if (!slides.length) return;

    /* ── Core navigation ── */
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

    function advance(dir) {
      clearInterval(timer);
      goTo(current + dir);
      startAuto();
    }

    /* ── Init ── */
    slides[0].classList.add('is-active');
    if (dots[0]) dots[0].classList.add('is-active');
    startAuto();

    /* ── Dot clicks ── */
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { clearInterval(timer); goTo(i); startAuto(); });
    });

    /* ── Pause on mouse hover ── */
    slider.addEventListener('mouseenter', function () { clearInterval(timer); });
    slider.addEventListener('mouseleave', startAuto);

    /* ── Keyboard (when slider focused) ── */
    slider.setAttribute('tabindex', '0');
    slider.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft')  advance(-1);
      if (e.key === 'ArrowRight') advance(1);
    });

    /* ── Touch / swipe ── */
    slider.addEventListener('touchstart', function (e) {
      var t = e.changedTouches[0];
      touchStartX = t.clientX;
      touchStartY = t.clientY;
      isDragging  = true;
      clearInterval(timer);
    }, { passive: true });

    slider.addEventListener('touchmove', function (e) {
      if (!isDragging) return;
      var dx = e.changedTouches[0].clientX - touchStartX;
      var dy = e.changedTouches[0].clientY - touchStartY;
      /* Cancel swipe if vertical scroll is dominant */
      if (Math.abs(dy) > Math.abs(dx)) { isDragging = false; }
    }, { passive: true });

    slider.addEventListener('touchend', function (e) {
      if (!isDragging) { startAuto(); return; }
      var dx = e.changedTouches[0].clientX - touchStartX;
      isDragging = false;
      if (Math.abs(dx) >= SWIPE_THRESHOLD) {
        goTo(dx < 0 ? current + 1 : current - 1);
      }
      startAuto();
    }, { passive: true });

    slider.addEventListener('touchcancel', function () {
      isDragging = false;
      startAuto();
    }, { passive: true });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.ctos-hero-slider').forEach(initSlider);
  });
}());
