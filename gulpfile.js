var gulp = require('gulp');
var del = require('del');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('default', [
  'build'
]);

//todo add minify
gulp.task('build', [
  'build:dist'
]);

gulp.task('clean:dist', function(cb){
  del(['dist/**/*'], { dot: true }, cb);
});

gulp.task('copy:dist', ['clean:dist'], function(){
  gulp.src([
    //'package.json',
    //'bower.json'
  ], { base: './' })
    .pipe(gulp.dest('dist'));
});

gulp.task('concat', function() {
  gulp.src('src/**/*.js')
    .pipe(concat('angular-html5-storage.js'))
    .pipe(gulp.dest('dist'))
});

gulp.task('compress', function() {
  gulp.src('src/**/*.js')
    .pipe(uglify())
    .pipe(concat('angular-html5-storage.min.js'))
    .pipe(gulp.dest('dist'))
});

gulp.task('build:dist', ['copy:dist', 'concat', 'compress'], function(){
  console.log('build:dist finished!');
});
