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