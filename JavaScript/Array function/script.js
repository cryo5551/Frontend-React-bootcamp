console.log("Starting");


const arr = ["anyting",1234,"Abcd",false,69,true,"another"];

// for each used for looping on an array

// for(let i=0; i<arr.length; i++) {
//     console.log(typeof arr[i]);
// }

// for(let element of arr){
//     console.log(typeof element);
// }

// arr.forEach(element => console.log(typeof element));
// or
arr.forEach((element, idx) => console.log(typeof element +" "+idx));


// manupulate and store square of each element in array
const nums = [2,3,1,5,6,9,8];
const square =[];

// nums.forEach((elem, idx) =>{
//     square[idx] = nums[idx]*nums[idx];
// });
// console.log(square);

// by  using ma

const sqr = nums.map((element,idx) => {
    // code...
    return element * element;
});

// we can reduce this to one line lol
// const sqr = nums.map(e => e*e);
console.log(sqr);

// some
const marks = [45,60,80,20,90,30];

const did_fail = marks.some((element) => {
    if(element < 40) return true;
    else return false;
});

// we can reduce this to one line lol
// const did_fail = marks.some(element => (element < 40) ? true : false);
// or
// const did_fail = marks.some(element => (element < 40));

console.log(did_fail);

// filter
const faild = marks.filter((element) => (element < 40));
console.log(faild);

const passed = marks.filter((element) => (element >= 40));
console.log(passed);

// find caching the first occurance
const first_faild = marks.find((element) => (element < 40));
console.log(first_faild);

const first_pass = marks.find((element) => {
    if(element >= 40) return true;
    else return false;
});
console.log(first_pass);

// const menu = [{
//   name: "Burger",
//   price: 150
// }, {
//   name: "Pizza",
//   price: 210
// }, {
//   name: "Noodles",
//   price: 175
// }, {
//   name: "Pasta",
//   price: 250
// }];

// Get the price of noodles.

// const noodle = menu.find(e => {
//   if(e.name == "Noodles") {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(noodle);
// console.log(noodle.price);


// const target = marks.find((element) => {
//     if(element == 90) return true;
//     else return false;
// });
// console.log(target);


// reverse
console.log(marks.reverse());

// multidimensional array
const multi_array = ["a", "b", "c", "d",[1,2,3,4,["x", "y", "z"]]];
console.log(multi_array);

// flat
console.log(multi_array.flat(1));
console.log(multi_array.flat(2));


// TASKS
const products = [ 
    { product: 'banana',
      price: 3 }, 
    { product: 'mango',
      price: 6 }, 
    { product: 'potato', 
      price: ' ' }, 
    { product: 'avocado',
      price: 8 },
    { product: 'coffee',
      price: 10 },
    { product: 'tea',
      price: '' } ]

console.log(products);

// task 1
// Use a forEach and calculate the total price of the products.
let sum = 0;
products.forEach((element) => {
    if( typeof element.price == 'number') sum = sum + element.price;
});
console.log(sum);

// Task 2
// Use a filter and filter out the products with invalid prices.

const invalid = products.filter((element) => {
    if(typeof element.price != 'number') return true;
    else return false;
});

console.log(invalid);

// task 3
// Use a find to find the price of avocado.
const price_avac = products.find(element => element.product == 'avocado');
console.log(price_avac.price);

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
const arr2 = ['a', 'b', 'c', 'd'];
const arr3 = ['x', 'y', 'z'];

// merging two arrays
const merge = arr1.concat(arr2);
console.log(merge);

// merging multiple arrays
const merge3 = arr3.concat(arr1,arr2);
console.log(merge3);

// sort fuction

const menu = [{
  name: "Burger",
  price: 150
}, {
  name: "Pizza",
  price: 210
}, {
  name: "Noodles",
  price: 175
}, {
  name: "Pasta",
  price: 250
}];

// assending order
menu.sort((a,b) => {
  return a.price - b.price;
});

console.log(menu);

// descending order
menu.sort((a,b) => {
  return b.price - a.price;
});
console.log(menu);

// Fill
const arrr = [1, 2, 3, 4, 5, 6, 7, 8];

const filler = arrr.fill("hacked");
console.log(filler);

// other way to write in one line
const new_arr = (new Array(50)).fill("burp",0,16);
console.log(new_arr);

// reduce function

const filtered_arr = products.filter(e => typeof e.price == 'number');

// now to calculate sum
const summ = filtered_arr.reduce( (cumulative, element) => {
  return cumulative + element.price;
},0);

// one line code
// const summ = filtered_arr.reduce( (c, e) => c + e.price,0);

console.log(summ);

// every
const a =[3,4,5,6,7,8,9,10];
const positive =  a.every(e => e > 0);
console.log(positive);