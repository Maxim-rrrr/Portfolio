document.addEventListener('DOMContentLoaded', function() {


  // Подключение библиотек
  @@include('import/wow.min.js')
  @@include('import/jquery.inputmask.min.js')
  @@include('import/slick.min.js')
  
  // Скрипты блоков
  @@include('vendor/blocks.js')

  // Плавный скролл ао якорю
  @@include('vendor/scrollto.js')

  
  // Скрипт Gulp для подключение картинок в стилях
  @@include('vendor/gulp.js')

})