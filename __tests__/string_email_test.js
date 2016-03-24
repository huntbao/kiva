/**
 * @author huntbao
 */
'use strict'

var assert = require('assert')
var kiva = require('../src/kiva.js')

describe('Email mock tests', function () {

    it('Email mock -> case 1', function (done) {
        var result = kiva.get('@S[email]')

        assert.equal('just.for.test@gmail.com', result)

        done()
    })
})