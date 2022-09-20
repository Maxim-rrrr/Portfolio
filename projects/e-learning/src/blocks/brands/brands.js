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
