var gulp = require("gulp"),
scss = require("gulp-scss"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer");

gulp.task("styles", function(){
   return gulp.src("./app/assets/styles/styles.scss")
   .pipe(scss({ style: 'expanded' }))
   .on("error", function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit("end");
    })
   .pipe(postcss([autoprefixer]))
   .pipe(gulp.dest("./app/temp/assets/styles"));
});