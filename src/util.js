/**
 * @author huntbao
 * @module Kiva/Util
 */

'use strict'

var util = require('util')

module.exports = {
    /**
     * 获取随机数字, 可以通过 min 和 max 指定范围
     * @param {number} [min = 0] - 范围最小值
     * @param {number} [max = 128] - 范围最大值
     * @param {boolean} [includeMax = true] - 是否包括最大值
     * @return {number} - 返回数字
     */
    randomNum: function (/*min, max, includeMax*/) {
        var min = 0
        var max = 128
        var includeMax = true
        var argsNum = arguments.length
        if (argsNum === 1) {
            max = arguments[0]
        } else if (argsNum > 0) {
            min = arguments[0]
            max = arguments[1]
            if (arguments.length === 3) {
                includeMax = arguments[2]
            }
        }
        if (includeMax) {
            return Math.floor(Math.random() * (max - min + 1)) + min
        } else {
            return Math.floor(Math.random() * (max - min)) + min
        }
    }
}
