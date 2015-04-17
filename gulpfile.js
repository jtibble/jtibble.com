var gulp = require('gulp');
var gulpif = require('gulp-if');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var minifyJSON = require('gulp-jsonminify');
var minifyImages = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');


var optimizeImages = false;


gulp.task('checkJSFormatting', function(){
    var jscsSettings = {
        preset: 'google', 
        disallowTrailingWhitespace: "ignoreEmptyLines", 
        validateIndentation: 4
    };
    
    return gulp.src('js/**')
        .pipe(jscs(jscsSettings))
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('concatLibraryJS', function(){
    
    var scriptPaths = [
        'bower_components/angular/angular.min.js',
        'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
        'bower_components/angular-ui-router/release/angular-ui-router.min.js',
        'bower_components/lodash/dist/lodash.min.js',
        'bower_components/angular-google-maps/dist/angular-google-maps.min.js'
    ];
    
    return gulp.src( scriptPaths )
        .pipe(concat('libscripts.js'))
        .pipe(gulp.dest('target/temp/'));
});

gulp.task('concatAppJS', function(){
    
    var scriptPaths = [
        'app.js',
        'js/**/*.js'
    ];
    
    return gulp.src( scriptPaths )
        .pipe(concat('appscripts.js'))
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest('target/temp/'));
});

gulp.task('concatJSLibAndApp', ['concatLibraryJS', 'concatAppJS'], function(){
    return gulp.src(['target/temp/libscripts.js', 'target/temp/appscripts.js'])
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('target/'));
});

gulp.task('copyTemplates', function(){
    return gulp.src( 'templates/**' )
        .pipe(gulp.dest('target/templates/'));
});

gulp.task('minifyCSS', function(){
    return gulp.src('css/**/*.css')
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('target/'));
});

gulp.task('copyFonts', function(){
    return gulp.src('css/fonts/**')
        .pipe(gulp.dest('target/'));
});

gulp.task('copyJSON', function(){
    return gulp.src('data/**/*.json')
        .pipe(minifyJSON())
        .pipe(gulp.dest('target/data/'));
});

gulp.task('copyImages', function(){
    
    var minifyImageSettings = {
        progressive: true,
        use: [pngquant()],
        optimizationLevel: 7
    };
    
    return gulp.src('img/**')
        .pipe( gulpif( optimizeImages, minifyImages(minifyImageSettings)))
        .pipe(gulp.dest('target/img/'));
});
              
              

var buildOrder = [
    'checkJSFormatting',
    'concatJSLibAndApp',
    'copyTemplates',
    'minifyCSS',
    'copyFonts',
    'copyJSON',
    'copyImages'
];

gulp.task('default', buildOrder, function(){
    console.log('default build complete');
});

gulp.task('setReleaseParameters', function(){
    optimizeImages = true;
});

gulp.task('release', ['setReleaseParameters', 'default'], function(){
    console.log('release mode build complete');
});

gulp.task('watch', ['default'], function(){
    gulp.watch(['css/**', 'js/**', 'data/**', 'img/**'], ['default']);
});

