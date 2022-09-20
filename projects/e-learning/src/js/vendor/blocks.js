$('.brands-slick').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    infinite: true,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1256,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 954,
        settings: {
          slidesToShow: 3
        }
      },
    ]
});

$('.brands-slick-mobile').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    infinite: true,
    variableWidth: true,
    swipeToSlide: true,
});

// scrollWidth - clientWidth
// const brendsBlock = document.querySelector('.brands-slick')
// const widthSlide = $('.brands__slide')[0].offsetWidth;



// brendsBlock.scrollLeft = widthSlide * 8

// $(function() {
//   var isDragging = false;
//   var mouseIsDown = false;
//   var curSX = 0;
//   var curSY = 0;

//   setInterval(() => {
//     if (!isDragging) {
//       brendsBlock.scrollLeft += 1
//       if (brendsBlock.scrollLeft > widthSlide * 16) {
//         brendsBlock.scrollLeft = widthSlide * 8
//       } else if (brendsBlock.scrollLeft == 0) {
//         brendsBlock.scrollLeft = widthSlide * 8
//       }
//     }
//   }, 5)

//   $control = $(".brands");
//   $control.mousedown(function(e) {
//     mouseIsDown = true;
//     curSX = e.pageX;
//     curSY = e.pageY;
//   });
//   $('body').mouseup(function(e) {
//     isDragging = false;
//     mouseIsDown = false;
//   });
//   $control.mousemove(function(e) {
//     if (e.originalEvent.which == 1) {
//       isDragging = true;
//       brendsBlock.scrollLeft += curSX - e.pageX
//       curSX = e.pageX;
      
//       if (brendsBlock.scrollLeft > widthSlide * 16) {
//         brendsBlock.scrollLeft = widthSlide * 8
//       } else if (brendsBlock.scrollLeft < 50) {
//         brendsBlock.scrollLeft = widthSlide * 8 + 50
//       }
//     } else {
//       isDragging = false;
//     }
//   });
// });

// $("img").mousedown(function(){
//   return false;
// });


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



const showBtn = document.querySelector('.mobile-menu__show')

function activeMenu() {
    showBtn.classList.toggle('mobile-menu__show--close')
    document.querySelector('.mobile-menu').classList.toggle('mobile-menu--active')
    document.querySelector('body').classList.toggle('block-sroll')
}

showBtn.addEventListener('click', () => activeMenu())

document.querySelectorAll('.mobile-menu a').forEach(item => {
    item.addEventListener('click', () => activeMenu())
})

const title1 = $('#digital')[0]
const title2 = $('#learn')[0]
const video1 = $('.hero-video-1')[0];
const video2 = $('.hero-video-2')[0];

{
    video1 && video1.addEventListener("canplay", () => {
        // video1.play()
        $('.lds-ring').css('display', 'none')
    });
    video2 && video2.addEventListener("canplay", () => {
        // video2.play()
        $('.lds-ring').css('display', 'none')
    });
}

{
    const videoBox =  $('.hero__video')
    const section = $('.hero')[0]
    const cursor = videoBox
    let x = 0;
    let y = 0;
    let coordMouse = [0, 0]

    const maxValue = 500

    document.addEventListener('mousemove', event => {
        coordMouse = [event.x, event.y]
        if (window.innerWidth > 992 && videoBox[0]) {
            if (event.toElement == title1) {
                if (!videoBox.hasClass('hero__video--title-1')) {
                    videoBox.removeClass('hero__video--title-2')

                    videoBox.css('opacity', 1)
                    videoBox.addClass('hero__video--title-1')

                    $(title1).css('color', '#fff')
                    $(title2).css('color', '#171513')

                    video1.pause();
                    video1.currentTime = 0;
                    video1.play()
                }
            } else if (event.toElement == title2) {
                if (!videoBox.hasClass('hero__video--title-2')) {
                    videoBox.removeClass('hero__video--title-1')

                    videoBox.css('opacity', 1)
                    videoBox.addClass('hero__video--title-2')

                    $(title1).css('color', '#171513')
                    $(title2).css('color', '#fff')

                    video2.pause();
                    video2.currentTime = 0;
                    video2.play()
                }
            } else if ($('.hero')[0].clientHeight < event.y + window.scrollY && window.innerWidth > 992) {
                videoBox.css('opacity', 0)
            } else {
                videoBox.css('opacity', 1)
                videoBox.removeClass('hero__video--title-1')
                videoBox.removeClass('hero__video--title-2')
                $(title1).css('color', '#171513')            
                $(title2).css('color', '#171513')
            }
            
            setTimeout(() => {
                deltaX = cursor.css('left').split('px')[0]
                x += (event.x - +deltaX - 10) 
                if (x > maxValue) x = maxValue
                if (x < -maxValue) x = -maxValue

                deltaY = cursor.css('top').split('px')[0]
                y += (event.y - +deltaY - 60)
                if (y > maxValue) y = maxValue
                if (y < -maxValue) y = -maxValue

                videoBox.css('left', event.x - 10)
                videoBox.css('top', event.y - 60)
            }, 100)
        } else {
            videoBox.css('opacity', 1)
            videoBox.css('left', 0)
            videoBox.css('top', 0)
        }
    })

    document.addEventListener('scroll', event => {
        if ($('.hero')[0].clientHeight < coordMouse[1] + window.scrollY  && window.innerWidth > 992) {
            videoBox.css('opacity', 0)
        }
    })

    setInterval(() => {
        // console.log(x + ' ' + y)
        if (x > 0) {
            x -= maxValue / 25
            if (x < 0) x = 0
        } else if (x < 0) {
            x += maxValue / 25
            if (x > 0) x = 0
        }
        
        if (y > 0) {
            y -= maxValue / 25
            if (y < 0) y = 0
        } else if (y < 0) {
            y += maxValue / 25
            if (y > 0) y = 0
        }

        
        let scaleX = 0
        if (x == 0) {
            scaleX = 1
            x = 0
        } else {
            scaleX = Math.abs(x) / maxValue * 1 + 1
        }
        
        let scaleY = 0
        if (y == 0) {
            scaleY = 1
            y = 0
        } else {
            scaleY = Math.abs(y) / maxValue * 1 + 1
        }
        
        // console.log(x);
        
        let directionX = Math.abs(x) / (Math.abs(x) + Math.abs(y)) 
        let directionY = Math.abs(y) / (Math.abs(x) + Math.abs(y))
        
        
        if (!directionY) {
            directionY = 0
        }
        let direction = 90 * directionY

        if (y > 0 && x > 0 || y < 0 && x < 0) {
            direction += 90
        }
        
        if (cursor.hasClass('hero__video--title-1') || cursor.hasClass('hero__video--title-2')) {
            cursor.css('transform', `rotate(${-direction}deg) scale(${(scaleX + scaleY) / 2}, ${1})`)
            $('.hero-video-1').css('transform', `rotate(${direction}deg)`)
            $('.hero-video-2').css('transform', `rotate(${direction}deg)`)
        } else {
            cursor.css('transform', `rotate(0deg) scale(${1}, ${1})`)
            $('.hero-video-1').css('transform', `rotate(0deg)`)
            $('.hero-video-2').css('transform', `rotate(0deg)`)
        }
    }, 10)
}

{
    const videoPopup = $('.video-popup')[0]
    function activePopup() {
        videoPopup.classList.add('video-popup--active')
        $('body').css('overflow-y', 'hidden')
        restart()
        play()
    }

    if (window.innerWidth > 992) {
        title1 && title1.addEventListener('click', activePopup)
    } else {
        $('.hero__video')[0] && $('.hero__video')[0].addEventListener('click', activePopup)
    }

    $('.video-popup').on('click', event => {
        if (event.target.classList[0] == 'video-popup' || event.target.classList[0] == 'video-popup__close') {
            $('.video-popup').removeClass('video-popup--active')
            $('body').css('overflow-y', 'visible')
            videoInPopup.pause();
        }
    })

    document.addEventListener('keydown', event => {
        if (event.which == 27) {
            $('.video-popup').removeClass('video-popup--active')
            $('body').css('overflow-y', 'visible')
            videoInPopup.pause();
        }
    })

    const videoInPopup = document.querySelector('.video-popup video');
    const playBtn = document.querySelector('.video-popup__control-play');
    function play() {
        if (videoInPopup.paused) {
            videoInPopup.play();
            playBtn.classList.add('video-popup__control-play--pause')
        } else {
            videoInPopup.pause();
            playBtn.classList.remove('video-popup__control-play--pause')
        }
    }
    
    playBtn && playBtn.addEventListener('click', () => play())
    
    function restart() {
    videoInPopup.currentTime = 0;
    }
    
    const muteBtn = document.querySelector('.video-popup__control-mute');
    function mute() {
        videoInPopup.muted = !videoInPopup.muted
        if (videoInPopup.muted) {
            muteBtn.classList.add('video-popup__control-mute--mute')
        } else {
            muteBtn.classList.remove('video-popup__control-mute--mute')
        }
    }
    muteBtn && muteBtn.addEventListener('click', () => mute())
    
    
    
    const volBtn = document.querySelector('.video-popup__control-vol');
    if (volBtn) {
        volBtn.value = videoInPopup.volume * 100
        function setVolume() {
            videoInPopup.volume = volBtn.value / 100;
        }
        volBtn.addEventListener('input', () => setVolume())
        volBtn.addEventListener('change', () => setVolume())
    }
    
    
    const fullScreenBtn = document.querySelector('.video-popup__control-full-screen')
    function goFullscreen() {
        if (videoInPopup.requestFullscreen) {
            videoInPopup.requestFullscreen();
        } else if (videoInPopup.mozRequestFullScreen) {
            videoInPopup.mozRequestFullScreen();
        } else if (videoInPopup.webkitRequestFullscreen) {
            videoInPopup.webkitRequestFullscreen();
        }
    }
    
    fullScreenBtn && fullScreenBtn.addEventListener('click', () => goFullscreen())
    
    if (videoInPopup) {
        setInterval(() => {
            if (videoInPopup.muted) {
                muteBtn.classList.add('video-popup__control-mute--mute')
            } else {
                muteBtn.classList.remove('video-popup__control-mute--mute')
            }
        
            if (videoInPopup.paused) {
                playBtn.classList.remove('video-popup__control-play--pause')
            } else {
                playBtn.classList.add('video-popup__control-play--pause')
            }
        }, 100)
    }
}

// 2
{
    const videoPopup = $('.video-popup-2')[0]
    if (window.innerWidth > 992) {
        title2 && title2.addEventListener('click', () => {
            videoPopup.classList.add('video-popup--active')
            $('body').css('overflow-y', 'hidden')
            restart()
            play()
        })
    }

    $(videoPopup).on('click', event => {
        if (event.target.classList[0] == 'video-popup' || event.target.classList[0] == 'video-popup__close') {
            $(videoPopup).removeClass('video-popup--active')
            $('body').css('overflow-y', 'visible')
            videoInPopup.pause();
        }
    })

    document.addEventListener('keydown', event => {
        if (event.which == 27) {
            $(videoPopup).removeClass('video-popup--active')
            $('body').css('overflow-y', 'visible')
            videoInPopup.pause();
        }
    })

    const videoInPopup = document.querySelector('.video-popup-2 video');
    const playBtn = document.querySelector('.video-popup-2 .video-popup__control-play');
    function play() {
        if (videoInPopup.paused) {
            videoInPopup.play();
            playBtn.classList.add('video-popup__control-play--pause')
        } else {
            videoInPopup.pause();
            playBtn.classList.remove('video-popup__control-play--pause')
        }
    }
    
    playBtn && playBtn.addEventListener('click', () => play())
    
    function restart() {
    videoInPopup.currentTime = 0;
    }
    
    const muteBtn = document.querySelector('.video-popup-2 .video-popup__control-mute');
    function mute() {
        videoInPopup.muted = !videoInPopup.muted
        if (videoInPopup.muted) {
            muteBtn.classList.add('video-popup__control-mute--mute')
        } else {
            muteBtn.classList.remove('video-popup__control-mute--mute')
        }
    }
    muteBtn && muteBtn.addEventListener('click', () => mute())
    
    
    
    const volBtn = document.querySelector('.video-popup-2 .video-popup__control-vol');
    if (volBtn) {
        volBtn.value = videoInPopup.volume * 100
        function setVolume() {
            videoInPopup.volume = volBtn.value / 100;
        }
        volBtn.addEventListener('input', () => setVolume())
        volBtn.addEventListener('change', () => setVolume())
    }
    
    
    const fullScreenBtn = document.querySelector('.video-popup-2 .video-popup__control-full-screen')
    function goFullscreen() {
        if (videoInPopup.requestFullscreen) {
            videoInPopup.requestFullscreen();
        } else if (videoInPopup.mozRequestFullScreen) {
            videoInPopup.mozRequestFullScreen();
        } else if (videoInPopup.webkitRequestFullscreen) {
            videoInPopup.webkitRequestFullscreen();
        }
    }
    
    fullScreenBtn && fullScreenBtn.addEventListener('click', () => goFullscreen())
    
    if (videoInPopup) {
        setInterval(() => {
            if (videoInPopup.muted) {
                muteBtn.classList.add('video-popup__control-mute--mute')
            } else {
                muteBtn.classList.remove('video-popup__control-mute--mute')
            }
        
            if (videoInPopup.paused) {
                playBtn.classList.remove('video-popup__control-play--pause')
            } else {
                playBtn.classList.add('video-popup__control-play--pause')
            }
        }, 100)
    }
}
$('.projects__slick').slick({
    
    // centerPadding: '60px',
    // infinite: false,
    slidesToShow: 3,
    arrows: false,
    swipeToSlide: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          infinite: true,
          variableWidth: true,
          slidesToScroll: 1,
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          infinite: true,
          centerMode: false,
          variableWidth: true,
          slidesToScroll: 1,
          slidesToShow: 1,
        }
      },
    ]
});


const cursor =  $('.projects__cursor')
let coordMouse = [0, 0]
document.addEventListener('mousemove', event => {
  coordMouse = [event.x, event.y]
  if (event.toElement == $('.projects .slick-list')[0]) {
    cursor.addClass('projects__cursor--section')
    cursor.removeClass('projects__cursor--slide')

  } else if ($('.projects')[0].clientHeight + $('.projects')[0].offsetTop < event.y + window.scrollY || $('.projects')[0].offsetTop > event.y + window.scrollY) {
    cursor.removeClass('projects__cursor--section')
    cursor.removeClass('projects__cursor--slide')
      
  } else {
    cursor.addClass('projects__cursor--slide')
    cursor.removeClass('projects__cursor--section')
  }
  
  setTimeout(() => {
      cursor.css('left', event.x - 60)
      cursor.css('top', event.y - 60)
  }, 0)

})

document.addEventListener('scroll', event => {
  if ($('.projects')[0].clientHeight + $('.projects')[0].offsetTop < coordMouse[1] + window.scrollY || $('.projects')[0].offsetTop > coordMouse[1] + window.scrollY) {
    cursor.removeClass('projects__cursor--section')
    cursor.removeClass('projects__cursor--slide')
  }
})


$('.project:not(.projects-project-page .project)').toArray().forEach(project => {
  project.addEventListener('mouseover', () => {
    const getPrevSlides = (slide) => {
      const getPrevSlide = (slide) => {
        if (slide[0].previousElementSibling) {
          return $(slide[0].previousElementSibling)
        }
      }
  
      let slides = []
      let prev = slide
  
      for (let i = 0; i < 4; i++) {
        prev = getPrevSlide(prev)
        if (prev) {
          slides.push(prev)
        } else {
          break
        }
      }
      
      return slides
    }
  
    const getNextSlides = (slide) => {
      const getNextSlide = (slide) => {
        if (slide[0].nextElementSibling) {
          return $(slide[0].nextElementSibling)
        }
      }
  
      let slides = []
      let next = slide
  
      for (let i = 0; i < 4; i++) {
        next = getNextSlide(next)
        if (next) {
          slides.push(next)
        } else {
          break
        }
      }
      
      return slides
    }

    getPrevSlides($(project.parentElement)).forEach((slide) => {
      slide.addClass('projects__slide--prevhover')
    })

    getNextSlides($(project.parentElement)).forEach((slide) => {
      slide.addClass('projects__slide--nexthover')
    })
  })

  project.addEventListener('mouseout', () => {
    $('.projects__slide--prevhover').removeClass('projects__slide--prevhover')
    $('.projects__slide--nexthover').removeClass('projects__slide--nexthover')
  })
})
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




$('.project-slick').slick({
    centerMode: true,
    variableWidth: true,
    // slidesToScroll: 1,
    slidesToShow: 1,
    swipeToSlide: true,
    arrows: false,
});