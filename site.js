// Direct Primary Care Foundation — shared behavior

// Current year in the footer
Array.prototype.forEach.call(document.querySelectorAll('.year'), function (el) {
  el.textContent = new Date().getFullYear();
});

// Scroll-aware nav: solid navy bar appears once past the hero top
(function () {
  var nav = document.querySelector('.nav');
  if (!nav) return;
  var onScroll = function () {
    if (window.pageYOffset > 40) { nav.classList.add('scrolled'); }
    else { nav.classList.remove('scrolled'); }
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

// Gentle scroll reveal (matches the original's fade-in feel)
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
  els.forEach(function (el) { io.observe(el); });
  window.addEventListener('load', function () {
    document.querySelectorAll('.hero .reveal').forEach(function (el, i) {
      setTimeout(function () { el.classList.add('in'); }, i * 140);
    });
  });
})();
