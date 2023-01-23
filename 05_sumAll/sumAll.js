const sumAll = function (num1, num2) {
    const numbers = []
    if (num1 < 0 || num2 < 0) {
        return 'ERROR'
    }
    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        if (num1 > num2) {
            for (let i = num2; i <= num1; i++) {
                numbers.push(i)
            }
            sum = 0
            for (let i = 0; i < numbers.length; i++) {
                sum += numbers[i]
            }
            return sum
        } else if (num1 < num2) {
            for (let i = num1; i <= num2; i++) {
                numbers.push(i)
            }
            sum = 0
            for (let i = 0; i < numbers.length; i++) {
                sum += numbers[i]
            }
            return sum
        }
    } else {
        return 'ERROR'
    }
}

// Do not edit below this line
module.exports = sumAll;
