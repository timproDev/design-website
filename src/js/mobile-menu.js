document.querySelectorAll('.site-header').forEach(header => {
  const toggle = header.querySelector('.nav-toggle');

  toggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
  });
});
