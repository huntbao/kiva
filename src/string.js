/**
 * @author huntbao
 * @module Kiva/String
 */

'use strict'
var util = require('util')
var kivaUtil = require('./util')
var dict = require('./dict')

module.exports = {
    /**
     * 生成随机 email 地址
     * @param {object} options
     * @param {number} [options.localPartLen = 10] - local part 的长度
     * @param {number} [options.domainPart] - domain part
     * @return {string} - 随机 email 地址
     */
    email: function (options) {
        var lpLen = options.localPartLen || 10
        var dp = options.domainPart || dict.EMAIL_DOMAINS[kivaUtil.randomNum(dict.EMAIL_DOMAINS.length - 1)]
        // 邮箱第一个字符要以字母开头
        var email = dict.LETTERS[kivaUtil.randomNum(dict.LETTERS.length - 1)]
        var validCh = dict.VALID_EMAIL_CH
        var validChLen = validCh.length
        while (--lpLen) {
            email += validCh[kivaUtil.randomNum(validChLen - 1)]
        }
        return `${email}@${dp}`
    }
}
