var gulp = require("gulp");
var gutil = require("gulp-util");
var webserver = require('gulp-webserver');


gulp.task("default", function() {

  gutil.log(gutil.colors.yellow("=============================="));
  gutil.log(gutil.colors.cyan(" L E T ' S   L E A R N"));
  gutil.log(gutil.colors.cyan(" A N G U L A R - T S !!"));
  gutil.log(gutil.colors.yellow("=============================="));

});


gulp.task("webserver", function(){
  return gulp.src('app')
    .pipe(webserver());
})
