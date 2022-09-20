function offsetWithScroll(item, size, wrap, windowWidth) {
    if (window.innerWidth > windowWidth) {
      return 
    }

    let block = wrap
    // Максимальное смещение
    let maxDelta = size[0] - block.clientWidth
    
    // Высота экрана
    let windowHeight = window.innerHeight
    
    // Отступ верха страницы
    let pageYOffset = window.pageYOffset
    
    // Отступ блока
    let blockOffset = block.offsetTop
    
    // Начало прокрутки
    let startScroll = blockOffset - windowHeight + size[1]
    
    // Конец прокрутки
    let endScroll = block.offsetTop - 60
    
    
    let offset
    if (pageYOffset >= startScroll && pageYOffset < endScroll) {
      offset = (pageYOffset - startScroll) / (endScroll - startScroll) * maxDelta
    } else if (pageYOffset > endScroll) {
      offset = maxDelta
    } else {
      offset = 0
    }
    
    item.style.left = -offset + 'px'
}

offsetWithScroll(document.querySelector('.personal-area__img'), [568, 240], document.querySelector('.personal-area-card-1'), 600)
offsetWithScroll(document.querySelector('.why__map'), [1072, 291], document.querySelector('.why__map-wrap'), 700)

window.addEventListener('scroll', event => {
offsetWithScroll(document.querySelector('.personal-area__img'), [568, 240], document.querySelector('.personal-area-card-1'), 600)
offsetWithScroll(document.querySelector('.why__map'), [1072, 291], document.querySelector('.why__map-wrap'), 700)
});
