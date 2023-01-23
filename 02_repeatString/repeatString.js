const repeatString = function (string, num) {
    let newString = ''
    for (i = 0; i < num; i++) {
        newString += string
    }
    if (num == 0) {
        return ''
    }
    else if (num < 1) {
        return 'ERROR'
    }
    return newString
};

// Do not edit below this line
module.exports = repeatString;
