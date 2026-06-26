document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open);
  });
}

document.querySelectorAll('[data-expandable]').forEach((card) => {
  const button = card.querySelector('.toggle-button');
  const text = card.querySelector('.expandable-text');
  if (!button || !text) return;

  button.addEventListener('click', (event) => {
    const expanded = text.classList.toggle('expanded');
    button.classList.toggle('expanded', expanded);
    button.setAttribute(
      'aria-label',
      expanded ? 'Contraer información' : 'Expandir información'
    );

    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

document.querySelectorAll('.nav-has-submenu > button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const parent = btn.closest('.nav-has-submenu');
    const open = parent.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open);
  });
});
