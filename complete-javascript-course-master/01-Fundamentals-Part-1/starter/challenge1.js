let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / (markHeight * markHeight);

let johnBMI = johnWeight / (johnHeight * johnHeight);

console.log(markBMI, johnBMI);

let markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);