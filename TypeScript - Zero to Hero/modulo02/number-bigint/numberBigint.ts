// Exemplos number
let num1: number = 14.0;
let num2: number = 0x37cf;
let num3: number = 0o377;
let num4: number = 0b111001;

console.log("float - " + num1 + ", " + typeof num1);
console.log("hexadecimal - " + num2 + ", " + typeof num2);
console.log("octal - " + num3 + ", " + typeof num3);
console.log("bynary - " + num4 + ", " + typeof num4);

// Exemplos bigint
let big1: bigint = 682162616n;
let big2: bigint = 0b10000000000000000001n;

console.log(big1);
console.log(big2);
