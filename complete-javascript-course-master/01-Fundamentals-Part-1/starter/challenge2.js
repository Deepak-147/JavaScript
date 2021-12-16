let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / (markHeight * markHeight);

let johnBMI = johnWeight / (johnHeight * johnHeight);

console.log(markBMI, johnBMI);

let markHigherBMI = markBMI > johnBMI;

let outputString;
if (markHigherBMI) {
    outputString = `Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`
}
else {
    outputString = `John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`
}
console.log(outputString);