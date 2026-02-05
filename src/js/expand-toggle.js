const COLLAPSED_HEIGHT = 400;

document.querySelectorAll('[data-expand]').forEach(block => {
  const toggleBtn = block.querySelector('[data-expand-toggle]');
  const closeBtn = block.querySelector('[data-expand-close]');
  const content = block.querySelector('[data-expand-content]');
  let isOpen = false;

  if (!toggleBtn || !content) return;

  // Function to open or close with smooth animation
  const setHeight = (open) => {
    const startHeight = block.offsetHeight;
    const endHeight = open ? content.scrollHeight : COLLAPSED_HEIGHT;

    // Lock the start height for animation
    block.style.height = `${startHeight}px`;

    requestAnimationFrame(() => {
      block.style.height = `${endHeight}px`;
    });

    block.classList.toggle('is-open', open);
    toggleBtn.setAttribute('aria-expanded', open);
    
    // ✅ Update the toggle button text
    toggleBtn.textContent = open ? 'Collapse' : 'See more';

    isOpen = open;
  };

  // === 1️⃣ Toggle button: toggles open/closed ===
  toggleBtn.addEventListener('click', () => {
    setHeight(!isOpen);
  });

  // === 2️⃣ Close button inside content: always closes ===
  closeBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    setHeight(false);
  });

  // === 3️⃣ Click outside: closes if open ===
  document.addEventListener('click', (e) => {
    if (!isOpen) return;
    if (!block.contains(e.target)) {
      setHeight(false);
    }
  });
});