var gulp = require('gulp');
var del = require('del');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');

gulp.task('clean', function(cb) {
  del(['dist/*.*'], cb);
});

gulp.task('ng-annotate', function () {
  gulp.src('src/ng-switchery.js')
    .pipe(ngAnnotate())
    .pipe(gulp.dest('dist/'));
});

gulp.task('jshint', function() {
  gulp.src('src/ng-switchery.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('publish', ['clean', 'jshint'], function() {
  gulp.src('src/ng-switchery.js')
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});