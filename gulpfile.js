var gulp = require("gulp"); // gulp library import
var sass = require("gulp-sass"); // gulp-sass library import
var browserSync = require("browser-sync").create(); // browser-sync library import and create instance

// main task
gulp.task("default", function () {

    // Init development server
    browserSync.init({
        server: "src/"
    });

    gulp.watch(["src/scss/*.scss", "src/scss/**/*.scss"], ["sass"]); // making gulp watch files and folders.
                                                                    // If a change is made, execute 'sass'.
    gulp.watch("src/*.html").on("change", browserSync.reload); // watching html changes and reloading browsersync
});

// sass compilation
gulp.task("sass", function(){
    gulp.src("src/scss/style.scss") // origin file
        .pipe(sass().on("error", sass.logError)) // compiling with gulp-sass
        .pipe(gulp.dest("src/css/")) // end file path
        .pipe(browserSync.stream()); // reload content
});