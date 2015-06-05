var gulp = require("gulp");
var livereload = require("gulp-livereload");
var watch = require("gulp-watch");

var files = [
//    Include your watch live here, and re-execute your gulp
];

gulp.task("watch", function () {
    livereload.listen();
    gulp.watch(files, function() {
        livereload.reload();
    });
});

gulp.task("default", ["watch"]);