var gulp = require("gulp"),
del = require("del"),
usemin = require("gulp-usemin"),
cssmin = require("gulp-cssmin"),
imagemin = require("gulp-imagemin"),
uglify = require("gulp-uglify");

gulp.task("del", function() {
   return del("./docs"); 
});

gulp.task("useminTrigger", ["del"], function() {
   gulp.start("usemin"); 
});


gulp.task("usemin", ["styles", "scripts"], function() {
    return gulp.src("./app/index.html")
    .pipe(usemin({
        css: [function() {return cssmin()}],
        js: [function() {return uglify()}]
    }))
    .pipe(gulp.dest("./docs"));
});

gulp.task("optimizeImages", ["del"], function() {
   return gulp.src("./app/assets/images/**/*")
   .pipe(imagemin({
    progressive: true,
    interlaced: true,
    multipass: true
  }))
  .pipe(gulp.dest("./docs/assets/images"));
});

gulp.task("build", ["del", "optimizeImages", "useminTrigger"]);