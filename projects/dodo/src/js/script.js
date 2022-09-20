document.addEventListener('DOMContentLoaded', function() {


  // Подключение библиотек
  @@include('import/wow.min.js')
  
  // Скрипты блоков
  @@include('vendor/blocks.js')
  

  @@include('vendor/offsetWithScroll.js')
  
  // Скрипт Gulp для подключение картинок в стилях
  @@include('vendor/gulp.js')

  
})