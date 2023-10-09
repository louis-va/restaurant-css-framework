const nav = document.querySelector('#nav');
const overlay = document.querySelector('#nav-overlay');
const button = document.querySelector('#nav-button');
const navLine1 = document.querySelector('#nav-line-1');
const navLine2 = document.querySelector('#nav-line-2');

button.addEventListener('click', () => toggleNav());
overlay.addEventListener('click', () => toggleNav());

function toggleNav() {
  nav.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
  navLine1.classList.toggle('rotate-45');
  navLine1.classList.toggle('translate-y-[3px]');
  navLine2.classList.toggle('-rotate-45');
  navLine2.classList.toggle('-translate-y-[3px]');
}