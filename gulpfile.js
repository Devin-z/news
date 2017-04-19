//核心文件
var gulp = require("gulp");
//压缩js
var uglify = require ("gulp-uglify");
var concat = require ("gulp-concat");


gulp.task("minify",function(){
	return gulp.src(["js/base/base.js","js/controller/*.js","js/directive/*.js","js/filter/*.js","js/router/*.js","js/service/*.js","js/base/bootstrap.js"])
	.pipe(concat("main.js"))
	.pipe(uglify())
	.pipe(gulp.dest('./dist/js'))
})
gulp.watch('js/*/*.js',["minify"])
gulp.task("default",['minify'])