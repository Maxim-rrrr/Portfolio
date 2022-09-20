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