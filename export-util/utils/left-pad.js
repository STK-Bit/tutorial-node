/**
 * @description - Pad a string to the left.
 * 
 * @example
 *  leftPad('foo', 5) // => "  foo"
 *  leftPad('foobar', 6) // => "foobar"
 *  leftPad(1, 2, '0') // => "01"
 * 
 * @param {string} str - string to pad
 * @param {number} length - string length
 * @param {string} add - characters to add as padding 
 */

function leftPad(str, length, add = " ") {
    let result = "";
    let string = str.toString();
    let lengthDiff = length - string.length;
    if(lengthDiff > 0) {
        for(var i = 0; i< lengthDiff; i++) {
            result += add;
        }
        if(result.length > lengthDiff) {
            return result.substr(0, lengthDiff) + string;
        }
        return result += string;
    }

    return string;
}

module.exports = leftPad