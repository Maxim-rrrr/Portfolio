$('.form__input-tel').inputmask('+7 999 999 99 99', {"placeholder": " "});

$('.form__container').submit(function(event) {
    event.preventDefault();

    const inputName = $('#name')[0];
    const inputTel = $('#tel')[0];
    const inputCompany = $('#company')[0];
    const inputTask = $('#task')[0];

    let valid = $('#form-checkbox')[0].checked
    
    if (!inputName.value) {
        inputName.classList.add('form__input--invalid');
        valid = false
    }
    if (!inputTel.value || inputTel.value.replace(/\s/g,'').length != 12) {
        inputTel.classList.add('form__input--invalid');
        valid = false
    }
    if (!inputCompany.value) {
        inputCompany.classList.add('form__input--invalid');
        valid = false
    }
    if (!inputTask.value) {
        inputTask.classList.add('form__input--invalid');
        valid = false
    }

    if (valid) {
        $('.popup').css('display', 'flex')
        $('body').css('overflow-y', 'hidden')
        $.ajax({
            type: "POST",
            url: "send.php",
            data: {
                name: inputName.value,
                tel: inputTel.value,
                company: inputCompany.value,
                task: inputTask.value,
            },
            success: function (response) {
                if (response == 'OK') {
                    $('.popup__load').css('display', 'none')
                    $('.popup__success').css('display', 'flex')
                } else {
                    $('.popup__load').css('display', 'none')
                    $('.popup__error').css('display', 'flex')
                }
                $('.form__container')[0].reset();
            },
            error: function () {
                $('.popup__load').css('display', 'none')
                $('.popup__error').css('display', 'flex')
                $('.form__container')[0].reset();
            }
        });
    } else {
        $('.form__submit')[0].classList.add('form__submit--invalid')
    }
});

document.querySelectorAll('.form__input').forEach(input => {
    input.addEventListener('input', () => {
        input.classList.remove('form__input--invalid');
        $('.form__submit')[0].classList.remove('form__submit--invalid')
    })
})

if ($('#tel')[0]) {
    let prevValueTel = $('#tel')[0].value
    
    setInterval(() => {
        nuwValueTel = $('#tel')[0].value
        if (prevValueTel != nuwValueTel) {
            $('#tel').removeClass('form__input--invalid')
            $('.form__submit')[0].classList.remove('form__submit--invalid')
            prevValueTel = nuwValueTel
        }
    }, 500)
}


$('.popup').on('click', event => {
    if (event.target.classList[0] == 'popup' || event.target.classList[0] == 'popup__btn') {
        $('.popup').css('display', 'none')
        $('body').css('overflow-y', 'visible')
        $('.popup__load').css('display', 'flex')
        $('.popup__success').css('display', 'none')
        $('.popup__error').css('display', 'none')
    }
})

document.addEventListener('keydown', event => {
    if (event.which == 27) {
        $('.popup').css('display', 'none')
        $('body').css('overflow-y', 'visible')
        $('.popup__load').css('display', 'flex')
        $('.popup__success').css('display', 'none')
        $('.popup__error').css('display', 'none')
    }
})

