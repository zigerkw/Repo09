// Only change code below this line
function checkSign(num) {
    if (num > 0) {
        return "positive";
    } else if (num < 0) {
        return "negative";
    } else {
        return "zero"
    }
}
console.log(checkSign(10));
console.log(checkSign(-12));
console.log(checkSign(0));


// Only change code above this line
module.exports = checkSign;