/**
 * @author huntbao
 */
'use strict'

var assert = require('assert')
var parser = require('../src/kiva.parser.js')

describe('Email parser tests', function () {

    it('Email parser -> case 1', function (done) {
        const rule = '@S[email]'
        var result = parser.parse(rule)

        assert.equal('string', result.dataType)
        assert.equal('email', result.type)
        assert.equal(true, isNaN(result.localPartLen))
        assert.equal(true, isNaN(result.domainPartLen))
        assert.equal('', result.domainSuffix)

        done()
    })

    it('Email parser -> case 2', function (done) {
        const rule = '@S[email] 3 - 9'
        var result = parser.parse(rule)

        assert.equal('string', result.dataType)
        assert.equal('email', result.type)
        assert.equal(3, result.localPartLen)
        assert.equal(9, result.domainPartLen)
        assert.equal('', result.domainSuffix)

        done()
    })
})


