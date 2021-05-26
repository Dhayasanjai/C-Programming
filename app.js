const backdrop = document.querySelector('.backdrop');
const nav = document.querySelector('nav');
const navButton = document.querySelector('.toggle-button');
const a = document.querySelector('.navUl');
backdrop.addEventListener('click', () => {
  backdrop.style.display = 'none';
  nav.style.display = 'none';
});
navButton.addEventListener('click', () => {
  backdrop.style.display = 'block';
  nav.style.display = 'block';
});
a.addEventListener('click', () => {
  backdrop.style.display = 'none';
  nav.style.display = 'none';
});
