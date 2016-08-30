'use strict';

var gulp = require('gulp'),
    rigger = require('gulp-rigger'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    notify = require('gulp-notify'),
    spritesmith = require('gulp.spritesmith'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr();

var path = {
    dist: {
        html: 'dist/',
        js: 'dist/js/',
        css: 'dist/css/',
        img: 'dist/img/',
        fonts: 'dist/fonts/',
    },
    src: {
        html: 'src/*.html',
        js: 'src/scripts/*.js',
        style: ['src/styles/style.scss', 'src/styles/styleIE8.scss'],
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/scripts/*.js',
        style: 'src/styles/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/*.*'
    },
    clean: './dist'
};

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(livereload(server))
        .pipe(gulp.dest(path.dist.html))
        .pipe(notify({ message: 'HTML task complete' }));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(sourcemaps.init())
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(livereload(server))
        .pipe(gulp.dest(path.dist.js))
        .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('style:build', function () {

    gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(sass({
            sourceMap: true,
            errLogToConsole: true
        }))
        .pipe(prefixer())
        .pipe(minifycss())
        .pipe(sourcemaps.write())
        .pipe(livereload(server))
        .pipe(gulp.dest(path.dist.css))
        .pipe(notify({ message: 'Styles task complete', "onLast": true }));
});

gulp.task('image:build', function () {
    gulp.src(path.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(livereload(server))
        .pipe(gulp.dest(path.dist.img))
        .pipe(notify({ message: 'Images task complete', "onLast": true }));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.dist.fonts))
        .pipe(notify({ message: 'Fonts task complete', "onLast": true}));
});

gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build'
]);

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        gulp.start('fonts:build');
    });
});


gulp.task('default', ['build', 'watch']);
