//Gulp version 4.0.2

const gulp = require ('gulp');
const sass = require ('gulp-sass');
const autoprefixer = require ('gulp-autoprefixer');

const paths = {
  styles: {
    src: './assets/scss/**/*.scss',
    dest: './assets/css'
  }
};

const compileSass = () => {
  return gulp.src(paths.styles.src)
  .pipe(sass({
    outputStyle: 'expanded',
    sourceComments: true
  }))
  .pipe(autoprefixer({
    versions: ['last 2 browsers']
  }))
  .pipe(gulp.dest(paths.styles.dest));
};

const watch = () => {
  gulp.watch(paths.styles.src, compileSass);
};

const build = gulp.series(watch);

exports.style = compileSass;
exports.watch = watch;
exports.build = build;
exports.default = build;

