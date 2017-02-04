var gulp      = require('gulp'),
    sass      = require('gulp-sass'),
    prefix    = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    watch     = require('gulp-watch') ;


gulp.task('compileStyles', function() {
    gulp.src('./assets/sass/style.scss')
    .pipe(sass({
        noCache      : true,
        precision    : 4,
        unixNewlines : true
    }))
    .pipe(prefix('last 3 version'))
    .pipe(minifycss())
    .pipe(gulp.dest('./assets/css'));
    
});
 
gulp.task('watch', function() {
    gulp.watch('./assets/sass/**/*.scss', [
        'compileStyles'
    ]);
});

gulp.task('default', function() {
    gulp.watch('./assets/sass/**/*.scss', [
        'compileStyles'
    ]);
});

