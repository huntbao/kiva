/**
 * @author huntbao
 */
'use strict'

var gulp = require('gulp')
var mocha = require('gulp-mocha')
var webpack = require('webpack')

gulp.task('webpack', function () {
    webpack({
        entry: './src/kiva.js',
        output: {
            path: './dist',
            filename: 'kiva.js'
        }
    }, function (err) {
        if (err) {
            return console.log(err)
        }
        console.log('webpack build kiva.js success')
    })
    webpack({
        entry: './src/kiva.js',
        devtool: 'source-map',
        output: {
            path: './dist',
            filename: 'kiva.min.js'
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin()
        ]
    }, function (err) {
        if (err) {
            return console.log(err)
        }
        console.log('webpack build kiva.min.js success')
    })
})

gulp.task('mocha', function () {
    return gulp.src('__tests__/run_tests.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}));
})

gulp.task('build', ['webpack', 'mocha'])

gulp.start('build')