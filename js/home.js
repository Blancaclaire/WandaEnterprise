const button = document.querySelector('.headerMobile__nav-button');
const menu = document.querySelector('.headerMobile__nav-menu');

button.addEventListener('click', () => {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
});