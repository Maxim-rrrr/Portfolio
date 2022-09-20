document.querySelector('.hamburger-menu__box').addEventListener('click', () => {
  document.querySelector('.hamburger-menu').classList.toggle('hamburger-menu--active');
  document.querySelector('.mobile-menu').classList.toggle('mobile-menu--active');
})