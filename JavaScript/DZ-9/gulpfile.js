var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var concat_style = require('gulp-concat-css');
var rename = require('gulp-rename');
var clean_style = require('gulp-clean-css');
var uglify = require('gulp-uglify');

// Линтинг файлов
gulp.task('lint', function() {
  gulp.src('src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('lint_css', function() {
  gulp.src('src/css/*.css')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Конкатенация и минификация файлов
gulp.task('minify', function(){
    gulp.src('src/js/*.js')
        .pipe(concat('script.all.js'))
        .pipe(gulp.dest('dist_gulp'))
        .pipe(rename('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist_gulp'));
});

gulp.task('minify_css', function(){
    gulp.src('src/css/*.css')
        .pipe(concat_style('style.all.css'))
        .pipe(gulp.dest('dist_gulp'))
        .pipe(rename('style.min.css'))
        .pipe(clean_style())
        .pipe(gulp.dest('dist_gulp'));
});


// Действия по умолчанию
gulp.task('default', function(){
  gulp.run('lint', 'lint_css', 'minify', 'minify_css');

  // Отслеживаем изменения в файлах
  gulp.watch('src/js/*.js', 'src/css/*.css', function(event){
    gulp.run('lint', 'lint_css', 'minify', 'minify_css');
  });
});
