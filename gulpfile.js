'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('assets/sass/main.sass')
                .pipe(sass({outputStyle: 'expanded'})
                .on('error', function (err) {
                    console.log(err.message);
                    // sass.logError
                    this.emit('end');
                })
      )
      .pipe(gulp.dest('dist/css/'));
  });

  gulp.task('watch', function () {
    gulp.watch(['assets/sass/main.sass']);
  });
