(() => {
  document.documentElement.classList.add('an-js');
  const clock = document.querySelector('.an-clock');
  const slides = [...document.querySelectorAll('.an-hero-slide')];
  const dots = [...document.querySelectorAll('.an-hero-dot')];
  const overlay = document.querySelector('.an-overlay');
  const image = document.querySelector('.an-overlay-image');
  const title = document.querySelector('#an-overlay-title');
  const number = document.querySelector('.an-overlay-number');
  const provenance = document.querySelector('.an-overlay-provenance');
  const closeButton = document.querySelector('.an-close');
  const previousButton = document.querySelector('.an-overlay-prev');
  const nextButton = document.querySelector('.an-overlay-next');
  const triggers = [...document.querySelectorAll('.an-visual')];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let activeSlide = 0;
  let activeWork = 0;
  let opener = null;
  let slideTimer = null;

  const updateClock = () => {
    if (!clock) return;
    clock.textContent = new Intl.DateTimeFormat('en-US', {
      hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
    }).format(new Date());
  };

  const showSlide = (index) => {
    if (!slides.length) return;
    activeSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === activeSlide));
    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === activeSlide);
      if (i === activeSlide) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
  };

  const startSlides = () => {
    if (reduceMotion || slides.length < 2) return;
    window.clearInterval(slideTimer);
    slideTimer = window.setInterval(() => showSlide(activeSlide + 1), 5600);
  };

  const showArtwork = (index) => {
    const trigger = triggers[(index + triggers.length) % triggers.length];
    if (!trigger || !image || !title || !number || !provenance) return;
    activeWork = triggers.indexOf(trigger);
    image.src = trigger.dataset.anImage;
    image.alt = `${trigger.dataset.anAlt}, enlarged view`;
    title.textContent = trigger.dataset.anTitle;
    number.textContent = `${trigger.dataset.anNumber} / ${String(triggers.length).padStart(2, '0')}`;
    provenance.textContent = trigger.dataset.anProvenance;
  };

  const openArtwork = (index) => {
    if (!overlay || !closeButton) return;
    opener = triggers[index];
    showArtwork(index);
    overlay.hidden = false;
    document.body.classList.add('an-modal-open');
    closeButton.focus();
  };

  const closeArtwork = () => {
    if (!overlay || overlay.hidden) return;
    overlay.hidden = true;
    document.body.classList.remove('an-modal-open');
    image.removeAttribute('src');
    if (opener) opener.focus();
  };

  updateClock();
  window.setInterval(updateClock, 1000);
  startSlides();
  dots.forEach((dot) => dot.addEventListener('click', () => { showSlide(Number(dot.dataset.anSlide)); startSlides(); }));
  triggers.forEach((trigger, index) => trigger.addEventListener('click', () => openArtwork(index)));
  if (closeButton) closeButton.addEventListener('click', closeArtwork);
  if (previousButton) previousButton.addEventListener('click', () => showArtwork(activeWork - 1));
  if (nextButton) nextButton.addEventListener('click', () => showArtwork(activeWork + 1));
  if (overlay) overlay.addEventListener('click', (event) => { if (event.target === overlay) closeArtwork(); });

  document.addEventListener('keydown', (event) => {
    if (!overlay || overlay.hidden) return;
    if (event.key === 'Escape') closeArtwork();
    if (event.key === 'ArrowLeft') showArtwork(activeWork - 1);
    if (event.key === 'ArrowRight') showArtwork(activeWork + 1);
  });

  const reveals = document.querySelectorAll('.an-reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach((item) => observer.observe(item));
  } else reveals.forEach((item) => item.classList.add('is-visible'));
})();
