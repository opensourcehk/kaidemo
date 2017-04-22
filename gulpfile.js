'use strict';

const gulp = require('gulp-help')(require('gulp'));
const gutil = require("gulp-util");
const util = require('gulp-util');
const rename = require('gulp-rename');

const imagemin = require('gulp-imagemin');

const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');

const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.config');
const fs = require('fs');

const WebpackDevServer = require('webpack-dev-server');

const {NODE_ENV} = process.env;

gulp.task('image', 'Build imagemin version of ./assets/images/**/* into ./public/images', () => {
  return gulp.src('./assets/images/**/*.*')
    .pipe(imagemin())
    .on('error', util.log)
    .pipe(gulp.dest('public/images'));
});

gulp.task('css', 'Build ./assets/scss/*.scss into ./public', () => {
  return gulp.src(['./assets/scss/*.scss', './assets/scss/*.css'])
    .pipe(sass())
    .on('error', util.log)
    .pipe(gulp.dest('public'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(cleanCss())
    .pipe(gulp.dest('public'));
});

gulp.task('server', 'Start a webpack-dev-server for the project at http://localhost:8080', () => {
  const devConfig = merge(config, {
    entry: {
      app: [
        'webpack-dev-server/client?http://localhost:8080/',
        './assets/js/index.jsx'
      ]
    }
  });

  const compiler = webpack(devConfig);
  compiler.plugin('done', (stats) => {
    util.log('[webpack]', stats.toString({
      version: true,
      timings: true,
      assets: true,
      chunks: true,
      chunkModules: true,
      modules: true
    }));
    fs.writeFile('./webpack.json', JSON.stringify(stats.toJson('verbose')));
  });

  const server = new WebpackDevServer(compiler, {
    hot: true,
    contentBase: './public'
  });

  server.listen(8080);
});

gulp.task('js', 'Build javascripts bundle into ./public/js/app.js', (cb) => {
  webpack(config, (e, stats) => {
    if (e) {
      throw new gutil.PluginError('[webpack]', e);
    } else {
      util.log('[webpack]', stats.toString({
        version: true,
        timings: true,
        assets: true,
        chunks: true,
        chunkModules: true,
        modules: true
      }));
      fs.writeFile('./webpack.json', JSON.stringify(stats.toJson('verbose')));
    }
    cb();
  });
});

gulp.task('watch:css', false, () => {
  return gulp.watch([
    './assets/scss/**/*.scss',
    './assets/scss/**/*.css'
  ], ['css']);
});

gulp.task('watch:image', false, () => {
  return gulp.watch([
    './assets/images/**/*.*'
  ], ['image']);
});

gulp.task('watch', 'Monitor and rebuild images and css files.',
  ['watch:image', 'watch:css']);
gulp.task('build:dev', false, ['js', 'image', 'css', 'server']);
gulp.task('dev', 'Development mode. Starts',['build:dev', 'watch']);
gulp.task('build', 'Build the site.', ['image', 'css', 'js']);
