var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

gulp.task('checkJSFormatting', function(){
    return gulp.src('js/**')
        .pipe(jscs({preset: 'google', disallowTrailingWhitespace: "ignoreEmptyLines", validateIndentation: 4}))
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('default', ['checkJSFormatting'], function(){
    console.log('building default');
});