// Year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Click counter (Homepage)
const countBtn = document.getElementById('countBtn');
const countOut = document.getElementById('clickCount');
if (countBtn && countOut){
  let clicks = 0;
  countBtn.addEventListener('click', () => {
    clicks += 1;
    countOut.textContent = clicks;
  });
}

// Theme toggle (both pages)
const themeBtn = document.getElementById('themeToggle');
if (themeBtn){
  themeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
  });
}

// Contact form DOM update (Homepage)
const helloForm = document.getElementById('helloForm');
const helloOut = document.getElementById('helloOut');
if (helloForm && helloOut){
  helloForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('yourName').value.trim();
    helloOut.textContent = name ? `Thanks for reaching out, ${name}! I’ll reply soon.` : 'Thanks for the message! I’ll reply soon.';
    helloForm.reset();
  });
}
