var gulp = require("gulp"); // gulp library import
var sass = require("gulp-sass"); // gulp-sass library import
var browserSync = require("browser-sync").create(); // browser-sync library import and create instance
var notify = require("gulp-notify"); // gulp-notify import
var gulpImport = require("gulp-html-import"); // gulp-html-import import

// main task
gulp.task("default", ["html","sass"], function () { // execute html and sass tasks before default

    // Init development server
    browserSync.init({
        server: "dist/"
    });

    gulp.watch(["src/scss/*.scss", "src/scss/**/*.scss"], ["sass"]); // making gulp watch files and folders.
                                                                    // If a change is made, execute 'sass'.
    gulp.watch("src/*.html", ["html"]); // watching html changes and reloading browsersync
});

// sass compilation
gulp.task("sass", function(){
    gulp.src("src/scss/style.scss") // origin file
        .pipe(sass().on("error", function (error) {
            return notify().write(error);
        })) // compiling with gulp-sass, raising an error if it happens
        .pipe(gulp.dest("dist/")) // end file path
        .pipe(browserSync.stream()); // reload content
});

// Copy and import HTML
gulp.task("html", function () {
    gulp.src("src/*.html") // origin files
        .pipe(gulpImport("src/components")) // Files to import
        .pipe(gulp.dest("dist/")) // end path
        .pipe(browserSync.stream()); // reload content
})