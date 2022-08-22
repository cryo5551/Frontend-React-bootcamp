let people = "Geeks";

window.everyone = "Geeks";

// Tasks
// 1.

// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Aayush';
//     let age = 31;
//   }
  
//   sayHi();  
// Ans: undefined and will throw refrence error

// 2.

// for (let i = 1; i < 5; i++) {
//     if (i === 3) continue;
//     console.log(i);
//   }

// Ans: 1 2 4;

// 3.

// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);

// Ans: 0 2 2

// 4.

// function sayHi() {
//     return (() => 0)();
//   }
  
//   console.log(typeof sayHi());

// Ans: number


// 5.

// function getAge(...args) {
//     console.log(typeof args);
//   }
  
//   getAge(31);

// Ans: object    // cz itll return a array and array in js are objects

// 6.

const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

//Ans: 456


