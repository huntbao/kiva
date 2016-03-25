/**
 * @author huntbao
 */
'use strict'

var assert = require('assert')
var kiva = require('../src/kiva.js')

describe('Email mock tests', function () {

    it('Email mock -> case 1', function (done) {
        var results = kiva.get('@S[email]').split('@')

        assert.equal(2, results.length)
        assert.equal(true, /[a-z]/i.test(results[0].charAt(0)))
        assert.equal(true, /[a-z0-9\._]/i.test(results[0].substr(1)))
        assert.equal(10, results[0].length)

        done()
    })

    it('Email mock -> case 2', function (done) {
        var results = kiva.get('@S[email] 15 yahoo.com').split('@')

        assert.equal(2, results.length)
        assert.equal(true, /[a-z]/i.test(results[0].charAt(0)))
        assert.equal(true, /[a-z0-9\._]/i.test(results[0].substr(1)))
        assert.equal(15, results[0].length)

        done()
    })

    it('Email mock -> case 3', function (done) {
        var results = kiva.get('@S[email] 1 5 yahoo.com')

        assert.equal(undefined, results)

        done()
    })
})