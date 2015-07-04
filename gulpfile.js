var gulp = require('gulp'),
    del = require('del'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    traceur = require('gulp-traceur'),
    ts = require('gulp-typescript');

var PATHS = {
    src: {
        js: 'src/**/*.ts',
        html: 'src/**/*.html'
    },
    lib: [
        'node_modules/gulp-traceur/node_modules/traceur/bin/traceur-runtime.js',
        'node_modules/es6-module-loader/dist/es6-module-loader-sans-promises.src.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/angular2/node_modules/zone.js/dist/zone.js',
        'node_modules/angular2/node_modules/zone.js/dist/long-stack-trace-zone.js',
        'dist/lib/angular2.js'
    ]
};

gulp.task('clean', function (done) {
    del(['dist'], done);
});

gulp.task('js', function () {
    var tsResult = gulp.src(PATHS.src.js)
        .pipe(sourcemaps.init())
        .pipe(ts({
            target: "es5",
            module: "commonjs",
            declarationFiles: false,
            removeComments: true,
            noLib: false,
            emitDecoratorMetadata: true,
            typescript: require('typescript')
        }));
    return tsResult.js
        .pipe(sourcemaps.write({sourceRoot: '/js'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('html', function () {
    return gulp.src(PATHS.src.html)
        .pipe(gulp.dest('dist'));
});

gulp.task('libs', ['angular2'], function () {
    var size = require('gulp-size');
    return gulp.src(PATHS.lib)
        .pipe(size({showFiles: true, gzip: true}))
        .pipe(concat('angular2.js'))
        .pipe(gulp.dest('dist/lib'));
});

gulp.task('angular2', function () {

    var buildConfig = {
        paths: {
            "angular2/*": "node_modules/angular2/es6/dev/*.js",
            "rx": "node_modules/angular2/node_modules/rx/dist/rx.js"
        }
    };

    var Builder = require('systemjs-builder');
    var builder = new Builder(buildConfig);

    return builder.build('angular2/angular2', 'dist/lib/angular2.js', {});
});

gulp.task('play', ['default'], function () {

    var http = require('http');
    var connect = require('connect');
    var serveStatic = require('serve-static');
    var open = require('open');

    var port = 9000, app;

    gulp.watch(PATHS.src.html, ['html']);
    gulp.watch(PATHS.src.js, ['js']);

    app = connect().use(serveStatic(__dirname + '/dist'));  // serve everything that is static
    http.createServer(app).listen(port, function () {
        open('http://localhost:' + port);
    });
});

gulp.task('default', ['js', 'html', 'libs']);
