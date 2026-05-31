/**
 * CTOS Hero Slider — exact match to Vercel production
 *
 * Uses translateX horizontal sliding with clone-based infinite loop:
 *   [clone-last | slide-1 | slide-2 | slide-3 | clone-first]
 * index 0 = clone-last, 1..3 = real slides, 4 = clone-first
 * On transitionend: if we landed on a clone, silently snap to the real slide.
 *
 * Auto-advance every 5 000 ms. Pause on hover/touch.
 * Touch/swipe: 50 px threshold, vertical scroll not hijacked.
 * Keyboard: ArrowLeft/ArrowRight when slider is focused.
 */
(function () {
  'use strict';

  var SLIDE_COUNT   = 3;
  var AUTO_DELAY    = 5000;
  var SWIPE_MIN     = 50;
  var PAUSE_AFTER   = 3000;  // resume auto after manual interaction

  function initSlider(slider) {
    var track  = slider.querySelector('.ctos-hero-track');
    var dots   = slider.querySelectorAll('.ctos-dot');
    if (!track) return;

    var index   = 1;  // start on real slide 1
    var paused  = false;
    var timer;
    var touchX0 = 0, touchY0 = 0, dragging = false;

    /* ── helpers ── */
    function activeDot() { return (index - 1 + SLIDE_COUNT) % SLIDE_COUNT; }

    function updateDots() {
      var ad = activeDot();
      dots.forEach(function (d, i) {
        d.classList.toggle('is-active', i === ad);
      });
    }

    function moveTo(i, animate) {
      if (!animate) track.classList.add('no-transition');
      index = i;
      track.style.transform = 'translateX(-' + (index * (100 / (SLIDE_COUNT + 2))) + '%)';
      if (!animate) {
        // force reflow then re-enable transition
        track.offsetHeight; // eslint-disable-line
        track.classList.remove('no-transition');
      }
      updateDots();
    }

    /* ── Set initial track width: (SLIDE_COUNT + 2) slides side-by-side ── */
    track.style.width = (SLIDE_COUNT + 2) * 100 + '%';
    var slides = track.children;
    for (var s = 0; s < slides.length; s++) {
      slides[s].style.width = (100 / (SLIDE_COUNT + 2)) + '%';
    }

    /* ── Init position without animation ── */
    moveTo(1, false);
    updateDots();

    /* ── Infinite loop on transitionend ── */
    track.addEventListener('transitionend', function () {
      if (index === 0) {
        moveTo(SLIDE_COUNT, false);
      } else if (index === SLIDE_COUNT + 1) {
        moveTo(1, false);
      }
    });

    /* ── Navigation ── */
    function goNext() { moveTo(index + 1, true); }
    function goPrev() { moveTo(index - 1, true); }

    function goTo(realIndex) {  // 1-based real index
      moveTo(realIndex, true);
    }

    /* ── Auto advance ── */
    function startAuto() {
      clearInterval(timer);
      if (!paused) timer = setInterval(goNext, AUTO_DELAY);
    }
    function stopAutoTemporarily(ms) {
      clearInterval(timer);
      paused = true;
      setTimeout(function () { paused = false; startAuto(); }, ms);
    }

    startAuto();

    /* ── Dot clicks ── */
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        goTo(i + 1);
        stopAutoTemporarily(PAUSE_AFTER);
      });
    });

    /* ── Hover pause ── */
    slider.addEventListener('mouseenter', function () { clearInterval(timer); });
    slider.addEventListener('mouseleave', function () { if (!paused) startAuto(); });

    /* ── Keyboard ── */
    slider.setAttribute('tabindex', '0');
    slider.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft')  { goPrev(); stopAutoTemporarily(PAUSE_AFTER); }
      if (e.key === 'ArrowRight') { goNext(); stopAutoTemporarily(PAUSE_AFTER); }
    });

    /* ── Touch / pointer swipe ── */
    var el = track;

    el.addEventListener('pointerdown', function (e) {
      touchX0  = e.clientX;
      touchY0  = e.clientY;
      dragging = true;
      el.setPointerCapture(e.pointerId);
      clearInterval(timer);
    });

    el.addEventListener('pointerup', function (e) {
      if (!dragging) return;
      dragging = false;
      var dx = touchX0 - e.clientX;
      var dy = touchY0 - e.clientY;
      if (Math.abs(dx) > SWIPE_MIN && Math.abs(dx) > Math.abs(dy)) {
        if (dx > 0) goNext(); else goPrev();
      }
      stopAutoTemporarily(PAUSE_AFTER);
    });

    el.addEventListener('pointercancel', function () {
      dragging = false;
      stopAutoTemporarily(PAUSE_AFTER);
    });

    /* Prevent text selection during drag */
    el.style.userSelect = 'none';
    el.style.touchAction = 'pan-y';
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.ctos-hero-slider').forEach(initSlider);
  });
}());
