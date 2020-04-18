const gulp = require('gulp');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify');
const jshint = require('gulp-jshint');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const htmlmin = require('gulp-htmlmin');

gulp.task('clean', async function () {
  gulp.src('build/*').pipe(clean())
});

gulp.task('copy-images', function() {
  return gulp.src(['images/*'])
    .pipe(gulp.dest('build/images'))
});

gulp.task('copy-fonts', function() {
  return gulp.src(['fonts/**/*.woff*'])
    .pipe(gulp.dest('build/fonts'))
});

// Minify CSS files
gulp.task('styles', function () {
  return gulp.src('css/*.css')
  // Auto-prefix css styles for cross browser compatibility
  .pipe(autoprefixer())
  .pipe(csso())
  .pipe(gulp.dest('./build/css'))
});

// Minify JavaScript files
gulp.task('scripts', async function () {
  gulp.src('js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(uglify())
  .pipe(concat('app.js'))
  .pipe(gulp.dest('build'))
});

// Minify HTML files
gulp.task('pages', function () {
  return gulp.src(['*.html'])
  .pipe(htmlmin({
    collapseWhitespace: true,
    removeComments: true
  }))
  .pipe(gulp.dest('./build'));
});

gulp.task('default', gulp.series('clean', 'pages', 'scripts', 'styles', 'copy-fonts', 'copy-images'))