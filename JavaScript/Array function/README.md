## Array functions

### Array methods
- these are the built in functions of arrays
- we call them mathods cz they are part of the class.

### Array functions
- reverse
- flat ??
- concat

### Array functions (built-in)
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

### forEach
- This is used to loop on every element of array.
- this takes a callback. in the callback, this will give commanly 2 parameters that we need. Element and index
- We can write whatever logic we want on those elements.
- Syntex: 
- <arr_name>.forEach((element, idx) => {logic_code});
- however we can not return;
- this is the exact basic alternate to for of
- there is a1 diffrence we can't use break in it;


### map
- we will use this in react a lot;
- itll return A new  manupulated array.
- the diffrence will be the logic we will write in the function;
- this is like forEach but itll return a new array;
- Sysntex: 
- const variable_name = <arr_name>.map((element, idx) => {logic_code});

### some
- this will return true/false weather some elements  match the condition/not.
- the purpose of this function is just to cheak.
- from the callback function, we will return boolean.
-  If for 1 or more cases will get true itll return true.
- meaning there is atleast one element that maches the condition.
- this accepts a callback function fuction and returns true/false.
- Syntex:
- const variable_name = <arr_name>.some((element, idx) => {logic_code});

### filter
- This is similar to some, but instead of just returning true/false, this will return the array of elements that match the condition.
- this will return the array of elements that match the condition.
- if for any element, we are returning true them that element gets added to filtetrd list rest will be ignored;

### find
- its like filter , but it returns the first element that matches the condition.
- Only return first occurrence of the condition.
- used for finding the target;

### findIndex
- this is just like find but it returs index
- we pass the callback function, that function will get 3 parameters, <element, idx, og_array>. The callback can return boolean;
- this will give INDEX of the first element that matches the condition.

### findLastIndex
- kind of same as findIndex, but this returns the last element that matches the condition.


### reverse
- this will reverse the index.
- this will changes the og array;
- this is an inplace algorithm which means this will change the origional array.

### flat
- it reduces the dimantianality of a multi-dimensional array;
- we can pass the depth as an argument for the dimension to flat the array.
- by default it reduces the dimantianality by one;

### mutidimensional array
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


### defer attribute
- this is a attribute we give to script tag.
- this enables it to run after dom is loaded.
- we can write script tag in head with the help of this.
- defer is a english word that means: to do somethig later.

### concat
- it is used to concatinate(combine/join/merge)
- in this case concat function is used to merge the arrays.
- Syntex: 
- primary_array.concat(arr2,arr3.....arrn);
- there is a better way to do this using spread operator.

### sort
- this will sort the array.
- we can send a callback fuction to this, that means we can customize the sort function.
- And can be used for copmlex arrays.
- callback is optional.
- its a inplace algorithm which changes the og array.

- from the callback function, we return a number, basically we return how ,uch diffrence do we have from initial item.
- if the integer we return is negetive then that means its less then initial value.
- if 0 then same.
- if its +ve then its greater then initial value.

- itll arrenge them in increasing order and itll be sorted.

### fill
- fill the array with given element.
- this is a simple function (ehich does not need callback)
- In this, we pass the element, stating index, ending index.
- the third argument we pass the ending index is exclusive means its not included in the array.
- its a first order function.

### reduce
- this fuction is used to reduce dimantianality.
- this is very diffrent then flat.
- idea of this is to perform an aggregation function.
- this accepts callback.
- In the callback, we will get 4 parameters,  (cumulative value, element, index, origional_array).
- we need to return the new vacumulative value from callback function.

### every
- This is opposite of sum.
- this also returns boolean value.
- if any element dosen't satisfy the condition it will retrun false.


### Tasks:
#### https://fakestoreapi.com/carts



