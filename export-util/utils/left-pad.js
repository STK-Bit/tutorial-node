function leftPad(str, length, add = " ") {
    let result = "";
    let string = str.toString();
    let lengthDiff = length - string.length;
    if(lengthDiff > 0 ) {
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