const gulp = require('gulp');
const clean = require('gulp-clean');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const htmlmin = require('gulp-htmlmin');
const htmlbuild = require('gulp-htmlbuild');
const es = require('event-stream');
const plugins = require('gulp-load-plugins')();
plugins.concat = require('gulp-concat');
plugins.uglify = require('gulp-uglify');

gulp.task('clean', function () {
  return gulp.src('build/*').pipe(clean())
});

gulp.task('copy-images', async function () {
  return gulp.src(['images/*'])
  .pipe(gulp.dest('./build/images'))
});

gulp.task('copy-fonts', async function () {
  return gulp.src(['fonts/**/*.woff*'])
  .pipe(gulp.dest('./build/fonts'))
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
const jsBuild = es.pipeline(
    plugins.uglify(),
    plugins.concat('app.js'),
    gulp.dest('./build/js'));

// pipe a glob stream into this and receive a gulp file stream
const gulpSrc = function (opts) {
  const paths = es.through();
  const files = es.through();
  paths.pipe(es.writeArray(function (err, srcs) {
    gulp.src(srcs, opts).pipe(files);
  }));
  return es.duplex(paths, files);
};

// Minify HTML files
gulp.task('pages', async function () {
  return gulp.src(['*.html'])
  .pipe(htmlbuild({
    js: htmlbuild.preprocess.js(function (block) {
      block.pipe(gulpSrc()).pipe(jsBuild);
      block.write('js/app.js');
      block.end();
    })
  }))
  .pipe(htmlmin({
    collapseWhitespace: true,
    removeComments: true
  }))
  .pipe(gulp.dest('./build'));
});

gulp.task('default',
    gulp.series('clean', 'styles', 'pages', 'copy-fonts', 'copy-images'));