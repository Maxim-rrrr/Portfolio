$(document).ready(() => {

  $('.hamburger-menu').on('click', () => {
    $('.hamburger-menu').toggleClass('hamburger-menu--active')
    $('.mobile-menu').toggleClass('mobile-menu--active')
  })

})