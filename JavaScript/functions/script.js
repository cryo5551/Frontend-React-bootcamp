function welcome(){
    console.log("Hello world");
}

welcome();
// Attribute vs Parameter functions
// function to add three Numbers

function add(num1, num2, num3=0) {
    console.log(num1+num2+num3);
}

add(9, 8, 4);
// defaulter parameters
add(9, 7,);

function multiply(num1=1, num2=1, num3=1) {
    return (num1*num2*num3);
}

const res = multiply(9, 8);
console.log(res);

// Anonymous function
const multiply_3 = function(num1, num2, num3) {
    return (num1*num2*num3);
}
console.log(multiply_3(9, 8, 6));

// IIFE 

(function() {
      console.log("Hello world");
})();
// or

(function(a,b) {
    console.log(a+b);
})(4,8);

// Assignents 

let a =3;
let b =7;
function swap(a,b){
    a = a+b;
    b = a-b;
    a = a-b;
    console.log(a,b);
}

console.log(a,b);
swap(a,b);



const rand = function(length){
    const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ1234567890";
    let result = '';
    for(let i = 0; i < length; i++){
        result = result+ str.charAt(Math.floor(Math.random() * str.length));
    }
    return result;
}

console.log(rand(10));


// Arrow function 
// 0 parameter
const arrow = () => console.log("I am arrow");

arrow();

// 1 parameter
// if we have only one parameter we can remove ();
const print_sqire = num =>{
    const approach1 = num*num;
    const approach2 = num **2;  // ^ dosent work in js
    const approach3 = Math.pow(num,2);
    console.log(approach1, approach2, approach3);
}
print_sqire(5);

// more then one parameter
const addition = (num1, num2) => console.log(num1+num2);

// addition(5,8);

// Callback function
setTimeout(arrow, 5000);

// Rest oprator

// const rest = (a, b, c, d, ...others) => {
//     sum = a+b+c+d;
//     console.log(sum);
//     console.log(others);
// }
// rest(3,2,4,5,7,4,2,1,0,8,6,4,5,6,8,8,5);

// if user typing infinite chars
const sum = (...numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    console.log(sum);
    console.log(numbers);
}
sum(3,2,4,5,7,4,2,1,0,8,6,4,5,6,8,8,5);

const parent = () => {
    const child_fun = () => {
        console.log("Print Child Function");
    }
    child_fun();
    return child_fun;
}

const result = parent();
console.log(result);
result();
// or
parent()();

const addi = (a) => {
    const add_upper = (b) => {
        console.log(a+b);
    }
    return add_upper;
}

addi(4)(10);