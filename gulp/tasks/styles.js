var gulp = require("gulp"),
browserSync = require("browser-sync").create(),
sass = require("gulp-sass"),
sourcemaps = require("gulp-sourcemaps"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer");

gulp.task("styles", function(){
   return gulp.src("./app/assets/styles/styles.scss")
   .pipe(sass({ style: 'expanded' }))
   .on("error", function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit("end");
    })
   .pipe(postcss([autoprefixer]))
   .pipe(gulp.dest("./app/temp/assets/styles"));
});
