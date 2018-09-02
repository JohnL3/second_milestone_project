let gulp = require('gulp'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync').create();

gulp.task('sass', function(){
	return gulp.src('dev/scss/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('dev/css'))
	.pipe(gulp.dest('dist/css'))
	.pipe(browserSync.reload({
		stream:true
	}))
	
});

gulp.task('js', function(){
  return gulp.src('dev/js/**/*.js')
  .pipe(gulp.dest('dev/js'))
  .pipe(gulp.dest('dist/js'))
  .pipe(browserSync.reload({
		stream:true
	}))
});

gulp.task('html', function(){
  return gulp.src('dev/*.html')
  .pipe(gulp.dest('dev/'))
  .pipe(gulp.dest('dist/'))
  .pipe(browserSync.reload({
		stream:true
	}))
});

gulp.task('watch',['browserSync','sass','html','js'], function() {
	gulp.watch('dev/scss/**/*.scss',['sass'],browserSync.reload);
	gulp.watch('dev/*.html',['html'], browserSync.reload);
	gulp.watch('dev/js/**/*.js',['js'], browserSync.reload);
	
})
//set up browserSync to reload page
gulp.task('browserSync', function() {
	browserSync.init({
		server:{
			baseDir:'dev'
		},
	})
})

gulp.task('default', ['watch']);