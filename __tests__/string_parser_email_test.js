/**
 * @author huntbao
 */
'use strict'

var assert = require('assert')
var parser = require('../src/kiva.parser.js')

describe('Email parser tests', function () {

    it('Email parser -> case 1', function (done) {
        var rule = '@S[email]'
        var result = parser.parse(rule)

        assert.equal('string', result.dataType)
        assert.equal('email', result.type)
        assert.equal(true, isNaN(result.localPartLen))
        assert.equal(null, result.domainPart)

        done()
    })

    it('Email parser -> case 2', function (done) {
        var rule = '@S[email] 15 126.com'
        var result = parser.parse(rule)

        assert.equal('string', result.dataType)
        assert.equal('email', result.type)
        assert.equal(15, result.localPartLen)
        assert.equal('126.com', result.domainPart)

        done()
    })
})


