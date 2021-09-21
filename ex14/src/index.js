// Only change code below this line
function myForLoop1() {
   let evenNumbers = ""; 
for (let i = 0; i < 10; i += 2) {
    evenNumbers += i;
} return evenNumbers;
}
function myForLoop2() {
    let evenInverseNumbers = "";
    for (let i = 8; i >= 0; i -= 2) {
        evenInverseNumbers += i;
    } return evenInverseNumbers;
} 
console.log(myForLoop1())
console.log(myForLoop2())

// Only change code above this line
module.exports = {
    myForLoop1,
    myForLoop2
};