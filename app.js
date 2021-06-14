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
document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});
document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'P'.charCodeAt(0)) {
    return false;
  }
};
