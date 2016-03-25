/**
 * @author huntbao
 * @module Kiva
 */
'use strict'

var parser = require('./kiva.parser')
var kivaString = require('./string')

module.exports = {
    /**
     * 根据 rule 返回相应的 mock 数据
     * @param {string} rule - 规则 DSL
     * @return {mixes}
     */
    get: function (rule) {
        var result = Object.create(null)
        try {
            result = parser.parse(rule)
        } catch (e) {
            console.log('parse rule error!')
        }
        switch (result.dataType) {
            case 'string':
                if (kivaString[result.type]) {
                    return kivaString[result.type](result)
                }
                break

            default:
                break
        }
    }
}
