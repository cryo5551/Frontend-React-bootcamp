const num1 = 23;
const num2 = 17;

console.log(num1 + num2);

const num3 = "10" + "20";
console.log(num3);

const num4 = 10 + 10 + 10 + 10 + "20";
console.log(num4);

const n5 = "20" + 10 + 10 + 10 + 10;
console.log(n5);
// bodmass rule applied here (its called badmass in coding)

const n6 = "20" + (10 + 10 + 10 + 10);
console.log(n6);

const a1 = "20" + 10 ** 2;
console.log(a1);

// some advance methods
const a2 = "20" + 10 - 10;
// "20" +10 = "2010" a string
// but '-' oprator only has one purpose unlike '+' operator and that is subtraction 
// so itll try to convert it into a number if can't give nan
// so output --> 2010 - 10 -> 2000
console.log(a2);

const a3 = 10 + 10 - 10 + "10" - "10" + 20 - 30 + "0";
// Ans -> 9900 ?
//  Steps: 10 + 10 - 10 --> 10;
//  10 + "10" -> 1010;
//  1010 - "10" -> 1000;
//  1000 + 20 - 30 -> 990
//  990 + "0" -> 9900; 
console.log(a3);

console.log("notstring" - "string");
// Ans  -> NaN ;

const arr = [1, 2, 3, 4];
const str = "100";
console.log(arr + str);

console.log(arr - str);

const amount = 6969;
const cardNumber = 420;
const otp = Math.floor(Math.random() * 999999);

const tStr = `yor OTP for transaction of ${amount} rupees with card number ending with XXXX${cardNumber} is ${otp}`;
console.log(tStr);




