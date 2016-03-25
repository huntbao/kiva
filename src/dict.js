/**
 * @author huntbao
 * @module Kiva/Dict
 */
'use strict'

var letters = 'abcdefghijklmnopqrstuvwxyz'
var LETTERS_LC = letters.split('')
var LETTERS_UC = letters.toUpperCase().split('')
var LETTERS = LETTERS_LC.concat(LETTERS_UC)
var NUMBERS = '0123456789'.split('')
var SYMBOLS = '`~!@#$%^&*()-_=+[]\{}|;\':",./<>? '.split('')
var EMAIL_DOMAINS = ['126.com', '163.com', 'gmail.com', 'outlook.com', 'qq.com']
var VALID_EMAIL_CH = ['.', '_'].concat(NUMBERS).concat(LETTERS)

module.exports = {
    /**
     * 英文字母
     */
    LETTERS: LETTERS,
    /**
     * 小写英文字母
     */
    LETTERS_LC: LETTERS_LC,
    /**
     * 大写英文字母
     */
    LETTERS_UC: LETTERS_UC,
    /**
     * 数字
     */
    NUMBERS: NUMBERS,
    /**
     * 字符
     */
    SYMBOLS: SYMBOLS,
    /**
     * 常见邮箱域名
     */
    EMAIL_DOMAINS: EMAIL_DOMAINS,
    /**
     * 有效的可以作为邮箱名的字符
     * 邮箱第一个字符要以字母开头
     */
    VALID_EMAIL_CH: VALID_EMAIL_CH
}
