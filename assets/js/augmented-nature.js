(() => {
  const clock = document.querySelector('.an-clock');
  const overlay = document.querySelector('.an-overlay');
  const image = document.querySelector('.an-overlay-image');
  const title = document.querySelector('#an-overlay-title');
  const number = document.querySelector('.an-overlay-number');
  const closeButton = document.querySelector('.an-close');
  const triggers = document.querySelectorAll('.an-visual');
  let opener = null;

  const updateClock = () => {
    if (!clock) return;
    clock.textContent = new Intl.DateTimeFormat('en-US', {
      hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
    }).format(new Date());
  };

  const openArtwork = (trigger) => {
    if (!overlay || !image || !title || !number || !closeButton) return;
    opener = trigger;
    image.src = trigger.dataset.anImage;
    image.alt = `${trigger.dataset.anAlt}, enlarged view`;
    title.textContent = trigger.dataset.anTitle;
    number.textContent = `${trigger.dataset.anNumber} / ${triggers.length}`;
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
  triggers.forEach((trigger) => trigger.addEventListener('click', () => openArtwork(trigger)));
  if (closeButton) closeButton.addEventListener('click', closeArtwork);

  if (overlay) {
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) closeArtwork();
    });
  }

  document.addEventListener('keydown', (event) => {
    if (!overlay || overlay.hidden) return;
    if (event.key === 'Escape') closeArtwork();
    if (event.key === 'Tab') {
      event.preventDefault();
      closeButton.focus();
    }
  });
})();
