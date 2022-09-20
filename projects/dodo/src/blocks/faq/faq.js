{
    let items = document.querySelectorAll('.faq__item')
    items.forEach(item => {
        let question = item.children[0]

        item.style.height = question.clientHeight + 'px'

        const active = () => {
            item.classList.add('faq__item--active')
            item.style.height = question.clientHeight + item.children[1].clientHeight + 'px'
        }

        const deactivate = () => {
            item.classList.remove('faq__item--active')
            item.style.height = question.clientHeight + 'px'
        }

        question.addEventListener('click', event => {
            if (item.classList[1]) {
                deactivate()
            } else {
                active()
            }
        })

        window.addEventListener('resize', () => {
            item.style.height = question.clientHeight + 'px'
        })
    }) 
}