  'use strict';
var gulp = require('gulp');
var concat = require('gulp-concat');
var scss = require('gulp-sass');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var webserver = require('gulp-webserver');

gulp.task('js', function(){
  gulp.src([
    'builds/dev/app/**/*.js',
    '!builds/dev/app/**/*_test.js'
  ])
  .pipe(concat('app.js'))
  .pipe(ngAnnotate())
  .pipe(gulp.dest('builds/dev'));
  gulp.src([
    'bower_components/angular/angular.js',
  ])
    .pipe(concat('libs.js'))
    .pipe(gulp.dest('builds/dev'));
})

gulp.task('css', function(){
  gulp.src('builds/dev/app/**/*.scss')
    .pipe(scss())
    .pipe(concat('app.css'))
    .pipe(gulp.dest('builds/dev'));
  gulp.src([
    'bower_components/angular/angular-csp.css',
  ])
    .pipe(concat('theme.css'))
    .pipe(gulp.dest('builds/dev'));
})

gulp.task('watch', function(){
  gulp.watch('builds/dev/app/**/*js', ['js']);
  gulp.watch('builds/dev/app/**/*scss', ['css']);
})

gulp.task('webserver', function(){
  gulp.src('builds/dev')
    .pipe(webserver({
      livereoad: true,
      open: true,
      port: 8034
    }))
})

gulp.task('default', [
  'js',
  'css',
  'watch',
  'webserver'
]);
