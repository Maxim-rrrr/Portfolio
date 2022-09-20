function addSpace(str) {
    str = str.split('').reverse().join('')
    let strRes = ''
    for (var i = 0; i < str.length; i++) {
        strRes += str[i]
        if (i % 3 == 2) {
            strRes += ' '
        }
    }

    return strRes.split('').reverse().join('')
}


fetch('https://publicapi.dodois.io/ru/api/v1/FinancialMetrics')
    .then(res => res.json())
    .then(res => {
        let currentMonthElem = document.querySelector('#current_month')
        currentMonthElem.innerHTML = addSpace(res.response.current_month_progressive_total + '')

        let prevMonthElem = document.querySelector('#previous_month')
        prevMonthElem.innerHTML = addSpace(res.response.previous_month.revenue + '')
    })

fetch('https://globalapi.dodopizza.com/api/v1/pizzerias/count')
    .then(res => res.json())
    .then(res => {
        let pizzeriasCountElem = document.querySelector('#pizzerias_count')
        pizzeriasCountElem.innerHTML = res.total
    })


document.querySelectorAll('.footer-bottom__logo>span').forEach(item => {
    item.innerHTML = '© '+ (new Date()).getFullYear()
})
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