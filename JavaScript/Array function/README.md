## Array functions

### Array methods
- these are the built in functions of arrays
- we call them mathods cz they are part of the class.

## Array functions
- reverse
- flat ??
- concat

## Array functions (built-in)
- sort
- fill
- reduce
- map
- filter
- some
- find
- forEach
- findIndex
- every

## forEach
- This is used to loop on every element of array.
- this takes a callback. in the callback, this will give commanly 2 parameters that we need. Element and index
- We can write whatever logic we want on those elements.
- Syntex: 
- <arr_name>.forEach((element, idx) => {logic_code});
- however we can not return;
- this is the exact basic alternate to for of
- there is a1 diffrence we can't use break in it;


## map
- we will use this in react a lot;
- itll return A new  manupulated array.
- the diffrence will be the logic we will write in the function;
- this is like forEach but itll return a new array;
- Sysntex: 
- const variable_name = <arr_name>.map((element, idx) => {logic_code});

## some
- this will return true/false weather some elements  match the condition/not.
- the purpose of this function is just to cheak.
- from the callback function, we will return boolean.
-  If for 1 or more cases will get true itll return true.
- meaning there is atleast one element that maches the condition.
- this accepts a callback function fuction and returns true/false.
- Syntex:
- const variable_name = <arr_name>.some((element, idx) => {logic_code});

## filter
- This is similar to some, but instead of just returning true/false, this will return the array of elements that match the condition.
- this will return the array of elements that match the condition.
- if for any element, we are returning true them that element gets added to filtetrd list rest will be ignored;

## find
- its like filter , but it returns the first element that matches the condition.
- Only return first occurrence of the condition.
- used for finding the target;

## findIndex
- this is just like find but it returs index
- we pass the callback function, that function will get 3 parameters, <element, idx, og_array>. The callback can return boolean;
- this will give INDEX of the first element that matches the condition.

## findLastIndex
- kind of same as findIndex, but this returns the last element that matches the condition.


## reverse
- this will reverse the index.
- this will changes the og array;
- this is an inplace algorithm which means this will change the origional array.

## flat
- it reduces the dimantianality of a multi-dimensional array;
- we can pass the depth as an argument for the dimension to flat the array.
- by default it reduces the dimantianality by one;

## mutidimensional array
- 


### Assignment:
- Use this object:
- const products = [ 
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
  price: '' }, ]

1. Task 1:
- Use a forEach and calculate the total price of the products.
2. Task 2:
- Use a filter and filter out the products with invalid prices.
3. Task 3:
- Use find to find the price of avocado.

concat

sort

fill

reduce

every



