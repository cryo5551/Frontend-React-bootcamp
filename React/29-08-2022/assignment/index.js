import {add,subtr,mul,div} from "./another.js";

let num1 = 29;
let num2 = 69;



let ver = add(num1,num2);
const output = document.getElementById("calculator");
const add1 = () => { 
    
    output.innerText = num1 + " + " +num2+" = " + ver ;
}

let ver1 = subtr(num1,num2);
const sub = () => { 
    
    output.innerText = num1 + " - " +num2+" = " + ver1 ;
}

let ver2 = div(num1,num2);
const div1 = () => {
    output.innerText = num1 + " * " +num2+" = " + ver2 ;
}

let var3 = mul(num1,num2);
const mul1 = () => {
    output.innerText = num1 + " * " +num2+" = " + var3 ;
}
const addition = document.getElementById("add_btn");
addition.addEventListener("click",add1);
const subtraction = document.getElementById("subtr_btn");
subtraction.addEventListener("click",sub);
const division = document.getElementById("div_btn");
division.addEventListener("click",div1);
const multiply = document.getElementById("mul_btn");
multiply.addEventListener("click",mul1);
