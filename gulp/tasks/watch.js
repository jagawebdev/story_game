var gulp = require("gulp"),
browserSync = require("browser-sync").create(),
watch = require("gulp-watch");

gulp.task("watch", function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch("./app/index.html", function() {
      browserSync.reload();
  });

    watch("./app/assets/styles/**/*.scss", function(){
        gulp.start("cssInject");
    });

    watch("./app/assets/scripts/**/*.js", function() {
       gulp.start("scriptsRefresh");
    });

});

gulp.task("cssInject", ["styles"], function() {
  return gulp.src("./app/temp/assets/styles/styles.css")
  .pipe(browserSync.stream());
});

gulp.task("scriptsRefresh", ["scripts"], function() {
  browserSync.reload();
});
