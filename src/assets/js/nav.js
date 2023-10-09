const nav = document.querySelector('#nav');
const overlay = document.querySelector('#nav-overlay');
const button = document.querySelector('#nav-button');

button.addEventListener('click', () => toggleNav());
overlay.addEventListener('click', () => toggleNav());

function toggleNav() {
  nav.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
}