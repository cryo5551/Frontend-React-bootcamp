console.log("Starting");

// Array declaration

const paticipents = ["bhawani","Shankar","bhuvan","strawhat"];
console.log(paticipents);

console.log(typeof paticipents);

// by using constructer
const arr_again = new Array("bhawani","Shankar","bhuvan","strawhat");
console.log(arr_again);
console.log(typeof arr_again);

// Everything is class in js
// ex for function class
const add = new Function("a","b","return a+b");
console.log(add(2,6));

// eval("console.log(arr_again);");

// INDEX
const arr = ["dfdfgg",12,"dog",false,2022,true];
console.log(arr[1]);        //12
console.log(arr[5-2]);      //false
console.log(arr[4]-arr[1]); //2010
console.log(arr[7/2]);      //undefined  
// Arrays are objects in js so itll show undefined cz there can be key in decimal in an objects;

// splice
const arr2 = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
console.log(arr2);

// arr2.splice(4,2);
// console.log(arr2);

// arr2.splice(4,2,"May","June");
// console.log(arr2);

console.log(arr2.slice(3,9));
console.log(arr2.slice(3,-4));

// convert to string 
// bY USING join
// console.log(arr2.join());
// // or
// console.log(arr2.join(","));

// shift and pop
arr2.shift();
console.log(arr2);

console.log(arr2.pop());
console.log(arr2);

// push and unshift

arr2.unshift("jan");
console.log(arr2);
arr2.push("dec");
console.log(arr2);

// reverse
arr2.reverse();

// length
console.log(arr2.length);




const arr12 = [5,3,9,0,-4,1,2,8,1];
console.log(arr12.sort());

const sqr_sum = arr12.reduce((sum, element) => {return sum += Math.pow(element, 2);},0); 

console.log(sqr_sum);