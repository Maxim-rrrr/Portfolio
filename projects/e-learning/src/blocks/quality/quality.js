const items = $('.quality__item').toArray()

items.forEach(item => {
    item.addEventListener('mouseover', () => {
        if (window.innerWidth > 1010) {
            item.classList.add('quality__item--active')
        }
    })

    item.addEventListener('mouseout', () => {
        if (window.innerWidth > 1010) {
            item.classList.remove('quality__item--active')
        }
    }) 
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 1010) {
        items.forEach(item => {
            item.classList.remove('quality__item--active')
        })
    }
})


document.addEventListener('scroll', () => {
    if (window.innerWidth < 1010) {
        let center = window.scrollY + window.innerHeight / 2
        items.forEach(item => {
            if (item.offsetTop <= center && center < item.offsetTop + item.offsetHeight) {
                items.forEach(item => {
                    item.classList.remove('quality__item--active')
                })
                item.classList.add('quality__item--active')
            }
        })
    }
})



