console.log('Hello world');

// const num = 23;

// if (num > 500){
//     console.log('This is a test!');
// }

// else{
//     console.log('This is lesser num');
// }

// ladder

const marks = 65;

if(marks > 85) console.log('Distinction');
else if(marks > 75) console.log('First class');
else if(marks > 60) console.log('Second class');
else if(marks > 40) console.log('Third class');
else console.log('Fail');

// ternary
if(marks>40) console.log('pass');
else console.log('fail');

// we can write this in same line
// <condition> ? <if true>:<if false>;
(marks>40) ? console.log('pass') : console.log('fail');

// switch

const grade = "first division";

switch (grade) {
    case "Distinction": console.log('marks greater than 85%'); 
    break;
    case "First division": console.log('marks between 75% and 85%');
    break;
    case "Second division": console.log('marks between 60% and 75%');
    break;
    case "Third division": console.log('marks between 40% and 60%');
    break;
    default:console.log('marks less then 40%');
}

const arr = [3,4,5,6,7,8,9,10,11,12];

for(const element of arr) {
    console.log(element);
}
for(const element of arr.reverse()) {
    console.log(element);
}


const obj = {
    key : "Value",
    key2 : "Value2",
    key3 : "Value3",
    key4 : "Value4"
};

for(const getkey in obj) {
    console.log(getkey + ": " + obj[getkey]);
    // console.log(obj[getkey]);
}
// we are not gonna use this
// better way to do
console.log(obj);