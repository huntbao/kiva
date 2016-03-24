/**
 * @author huntbao
 */
'use strict'

var parser = require('./kiva.parser')
var kivaString = require('./string')

var Kiva = {
    get: function(rule) {
        var result = parser.parse(rule)
        switch (result.dataType) {
            case 'string':
                if (kivaString[result.type]) {
                    return kivaString[result.type]()
                }
                break

            default:
                break
        }
    }
}

module.exports = Kiva