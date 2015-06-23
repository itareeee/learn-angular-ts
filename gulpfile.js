var gulp = require("gulp");
var gutil = require("gulp-util");
var webserver = require('gulp-webserver');
var typescript = require("gulp-typescript");
var runSequence = require("run-sequence");

gulp.task("default", function() {

  gutil.log(gutil.colors.yellow("=============================="));
  gutil.log(gutil.colors.cyan(" L E T ' S   L E A R N"));
  gutil.log(gutil.colors.cyan(" A N G U L A R - T S !!"));
  gutil.log(gutil.colors.yellow("=============================="));

  runSequence(
    "ts",
    ["ts:watch", "webserver"],
    function(){
      gutil.log(gutil.colors.magenta("WATCHING TypeScript FILES NOW  ■ ■ ■ ■ ■ "));
      gutil.log(gutil.colors.magenta("WEBSERVER LISTENING TO PORT 8000 ■ ■ ■ ■ ■ "));
    }
  );
});


gulp.task("webserver", function(){
  return gulp.src('app')
    .pipe(webserver());
});


var tsProject = typescript.createProject({
  noExternalResolve: true
});

gulp.task("ts", function(){
  return gulp.src(['app/**/*.ts', 'typings/**/*.ts'], {base: 'app'})
    .pipe(typescript(tsProject))
    .pipe(gulp.dest('app'));
});

gulp.task("ts:watch", function(){
  return gulp.watch("app/**/*.ts", ["ts"]);
});
