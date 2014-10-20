var gulp = require('gulp');
var del = require('del');

gulp.task('default', [
  'build'
]);

gulp.task('build', [
  'build:dist'
]);

gulp.task('clean:dist', function(cb){
  del(['dist/**/*'], { dot: true }, cb);
});

gulp.task('copy:dist', ['clean:dist'], function(){
  gulp.src([
    'package.json',
    '.bowerrc',
    'bower.json'
  ], { base: './' })
    .pipe(gulp.dest('./dist'));
});

gulp.task('build:dist', ['build', 'copy:dist'], function(){
  console.log('build:dist finished!');
});
