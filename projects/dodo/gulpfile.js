let project_folder = 'dist';
let source_folder = 'src';

let fs = require('fs');

let path = {
  build: {
    html: project_folder + '/',
    css: project_folder + '/css/',
    js: project_folder + '/js/',
    img: project_folder + '/img/',
    fonts: project_folder + '/fonts/',
  },
  src: {
    html: source_folder + '/*.html',
    css: source_folder + '/sass/style.sass',
    js: source_folder + '/js/script.js',
    img: source_folder + '/img/**/**',
    fonts: source_folder + '/fonts/*.ttf',
    blocks: source_folder + '/blocks/',
  },
  watch: {
    html: source_folder + '/**/**.html',
    css: source_folder + '/**/**.sass',
    js: source_folder + '/**/**/*.js',
    img: source_folder + '/img/**/**',
  },
  clean: './' + project_folder + '/'
}

const {
  src,
  dest
} = require('gulp'),
  gulp = require('gulp'),
  browsersync = require('browser-sync').create(),
  fileinclude = require('gulp-file-include'),
  del = require('del'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  group_media = require('gulp-group-css-media-queries'),
  cleanCSS = require('gulp-clean-css'),
  rename = require("gulp-rename"),
  minify = require('gulp-minify'),
  concat = require('gulp-concat'),
  imagemin = require('gulp-imagemin'),
  webp = require('gulp-webp'),
  webpHTML = require('gulp-webp-html'),
  webpcss = require("gulp-webpcss"),
  svgSprite = require('gulp-svg-sprite'),
  ttf2woff = require('gulp-ttf2woff'),
  ttf2woff2 = require('gulp-ttf2woff2'),
  fonter = require('gulp-fonter');

function browserSync(params) {
  browsersync.init({
    server: {
      baseDir: './' + project_folder + '/'
    },
    port: 3000,
    notify: true
  })
}

// Сборка HTML 
function html() {
  return src(path.src.html)
    .pipe(fileinclude())
    .pipe(webpHTML())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}

// Сборка CSS
function css() {
  return src(path.src.css)
    .pipe(sass())
    //gulp-autoprefixer
    .pipe(
      group_media()
    )
    .pipe(autoprefixer({
      overrideBrowserslist: ["last 5 versions"],
      cascade: true
    }))
    .pipe(webpcss())
    .pipe(dest(path.build.css))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(
      rename({
        extname: '.min.css'
      })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())
}

// Сборка JS
function jsBlocks () {
  return src(path.src.blocks + '/**/*.js')
    .pipe(concat('blocks.js')) // в какой файл объединить
    .pipe(gulp.dest('./' + source_folder + '/js/vendor/'))
}

function jsMain(done) {
  src(path.src.js)
    .pipe(fileinclude())
    .pipe(minify({
      ext: {
        src: '.js',
        min: '.min.js'
      },
    }))
    .pipe(dest('./dist/js/'))
    .pipe(browsersync.stream());

  done();
}

let js = gulp.series(jsBlocks, jsMain)

// Сборка картинок
function images() {
  return src(path.src.img)
    .pipe(
      webp({
        quality: 100
      })
    )
    .pipe(dest(path.build.img))
    .pipe(src(path.src.img))
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        interlaced: true,
        optimizationLevel: 3, // 0 to 7
      })
    )
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream())
}
gulp.task('svgSprite', function () {
  return gulp.src([source_folder + '/iconsprite/*.svg'])
  .pipe(svgSprite({
    mode: {
      stack: {
        sprite: '..icons/icons.svg',
        example: true
      }
    }
  }))
  .pipe(dest(path.build.img))
})


function watchFiles(params) {
  gulp.watch([path.watch.html], html)
  gulp.watch([path.watch.css], css)
  gulp.watch([path.watch.js, '!./' + source_folder + '/js/vendor/blocks.js'], js)
  gulp.watch([path.watch.img], images)
}

function clean(params) {
  return del(path.clean)
}

// Шрифты
function fonts () {
  src(path.src.fonts)
    .pipe(ttf2woff())
    .pipe(dest(path.build.fonts))
  return src(path.src.fonts)
  .pipe(ttf2woff2())
  .pipe(dest(path.build.fonts))
}
gulp.task('otf2ttf', function () {
  return src([source_folder + '/fonts/*.otf'])
    .pipe(fonter({
      formats: ['ttf']
    }))
    .pipe(dest(source_folder + '/fonts/'))
})
function fontsStyle(params) {
  let file_content = fs.readFileSync(source_folder + '/sass/vendor/_fonts.scss');
  if (file_content == '') {
    fs.writeFile(source_folder + '/sass/vendor/_fonts.scss', '', cb);
    return fs.readdir(path.build.fonts, function (err, items) {
      if (items) {
        let c_fontname;
        for (var i = 0; i < items.length; i++) {
          let fontname = items[i].split('.');
          fontname = fontname[0];
          if (c_fontname != fontname) {
            fs.appendFile(source_folder + '/sass/vendor/_fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
          }
          c_fontname = fontname;
        }
      }
    })
  }
}
function cb() {}

let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts), fontsStyle);
let watch = gulp.parallel(build, watchFiles, browserSync);


exports.fontsStyle = fontsStyle;
exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;