'use strict'
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const uglify = require('gulp-uglify')
const pug = require('gulp-pug')
const util = require('gulp-util')
const express = require('express')
const app = express()
const path = require('path')
const babel = require('gulp-babel')
const del = require('del')
const gIf = require('gulp-if')
const browserSync = require('browser-sync').create()

function isNotMin (file) {
  return !isMin(file)
}

const minMemo = {}
function isMin (file) {
  const fileName = path.basename(file.path)
  if (minMemo[fileName] === undefined) {
    minMemo[fileName] = /\.min$/.test(fileName)
  }
  return minMemo[fileName]
}

// --- Basic Tasks ---
gulp.task('copy', function () {
  return gulp
    .src('app/**/*.{ttf,eot,woff,woff2,otf,pdf,webm,svg,png,jpeg,jpg,gif}')
    .pipe(gulp.dest('dist/'))
})


gulp.task('styles', function () {
  return gulp
    .src('app/**/*.{scss,sass,css}')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gulp.dest('dist/'))
})

gulp.task('js', function () {
  return gulp
    .src('app/**/*.js')
    .pipe(gIf(isNotMin, babel({ presets: ['@babel/env'] })))
    .pipe(gIf(isNotMin, uglify()))
    .on('error', function (err) {
      util.log(util.colors.red('[Error]'), err.toString())
    })
    .pipe(gulp.dest('dist/'))
})

gulp.task('templates', function () {
  return gulp
    .src('app/**/*.pug')
    .pipe(pug({ pretty: true, basedir: 'app/' }))
    .pipe(gulp.dest('dist/'))
})

gulp.task('clean', function () {
  return del(['dist'])
})

gulp.task('express', function () {
  app.use(express.static(path.resolve('./dist')))
  app.listen(1335)
  util.log('Listening on port: 1335')
})

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: 'dist/',
    },
    open: false,
  })

  function reload (done) {
    browserSync.reload()
    done()
  }

  function rt (task) {
    return gulp.series(task, reload)
  }

  gulp.watch('app/**/*.{ttf,eot,woff,woff2,otf,pdf,webm}', rt('copy'))
  gulp.watch('app/**/*.{scss,sass,css}', rt('styles'))
  gulp.watch('app/**/*.js', rt('js'))
  gulp.watch('app/**/*.pug', rt('templates'))
})

// Default Task
gulp.task(
  'default',
  gulp.series('copy', 'styles', 'js', 'templates', 'serve')
)

gulp.task(
  'build',
  gulp.series('clean', 'copy', 'styles', 'js', 'templates')
)
