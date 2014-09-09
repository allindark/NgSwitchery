var gulp = require('gulp');
var del = require('del');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('clean', function(cb) {
	del(['dist/*.*', cb]);
})

gulp.task('ng-annotate', function () {
    return gulp.src('src/ng-switchery.js')
        .pipe(ngAnnotate())
        .pipe(gulp.dest('dist/'));
});