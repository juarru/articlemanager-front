var gulp = require("gulp"); // gulp library import
var sass = require("gulp-sass") // gulp-sass library import

// main task
gulp.task("default", function () {
    console.log("hello world");
});

// sass compilation
gulp.task("sass", function(){
    gulp.src("src/scss/style.scss") // origin file
        .pipe(sass().on("error", sass.logError)) // compiling with gulp-sass
        .pipe(gulp.dest("src/css/")); // end file
});