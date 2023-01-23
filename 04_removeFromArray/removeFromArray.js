const removeFromArray = function (array, ...specificValues) {
    specificValues.forEach(function (specificValue) {
        let index = array.indexOf(specificValue)
        while (index !== -1) {
            array.splice(index, 1)
            index = array.indexOf(specificValue)
        }

    })
    return array
};
// Do not edit below this line
module.exports = removeFromArray;
