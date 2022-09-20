$(document).ready(() => {

  // Поэкранный скролл
  if (window.innerWidth > 1024) {
    $('html').css('overflow-y', 'hidden')
    let scroll = false
    $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', (event) => {
      delta = parseInt(event.originalEvent.wheelDelta || -event.originalEvent.detail);

      const scrollValue = 5
      console.log(window.innerHeight);
      if (!scroll) {
        scroll = true
        if (delta >= 0) {
          let i = 0
          const intervalScroll = setInterval(() => {
            window.scrollBy(0, i + scrollValue <= window.innerHeight ? -scrollValue : -(window.innerHeight - i))
            i += scrollValue

            if (i >= window.innerHeight) {
              scroll = false
              clearInterval(intervalScroll)
            }
          }, 1)
        } else {
          let i = 0
          const intervalScroll = setInterval(() => {

            window.scrollBy(0, i + scrollValue <= window.innerHeight ? scrollValue : window.innerHeight - i)
            i += scrollValue

            if (i >= window.innerHeight) {
              scroll = false
              clearInterval(intervalScroll)
            }
          }, 1)
        }

      }

    });
  }


})