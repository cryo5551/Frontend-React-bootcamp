##Arrays

##Array
- Its a collection of data
- The data type can be anything in a single array
- Ideally, we should have similar type of datatype in a array.
- Herterogenous  -> Mixed

### Creation of array
- Apporach 1 - by using [];
- Syntex: const variable_name = [];
- every value inside [] will be separated by commas;
- Ex: [1, 2, 3] or ["bhawani","Shankar","bhuvan"];

- Apporach 2 - by using constructor:
- In js, there is a class called array.
- We just need to instanciate(create) a object;
- 'new' keyword is used here;
- Syntex: 
- const variable_name = new Array("name", "values","tone");


- **Array has object datatype it dosent have array datatype that means there is no array datatype in js**

## **Everything is class in javascript even function has class in Js and its not oop lang**
- Syntex for function constructor
- const add = new function("a","b","return a+b");
- console.log(add(a,b)); 

## Index
- This is used to identify which element is where
- it starts from 0 and go upto n
- we can use it in [index];
- Syntex: arr[index];

### updating an element
- usage arr[index] = <whatever_value>;

### Adding an element (push)
- by push
- A inbuilt function : arr.push();
- whatever value we need to push, we will put in as an argument in ();
- Basically, this is equvalent to append
Syntex: arr.push(<whatever_value>);
- it changes the array;

### Removing an element (pop)
- By inbuilt function : arr.pop();
- This will remove and also return the value/ element which it has removed.
- pop will remove from last index.
- it changes the array;

- what if i want to remove an element from middle.
- then we use splice


### splice
- first argument we send is thr starting index.
- second argument we send to how many element we want to remove;
- and rest is what new element we want to insert it can be any value;
- itll remove consicutively itll work;
- Syntex: 
- arr.splice(<starting_index>, <how many elements>, <what to replace with.....>);
- it changes the array;


### Slice
- works like substring function in Java
- Syntex: 
- arr.slice(<starting_index>, <ending_index>);
- it does not include the ending index like substring function in Java.
- we can use -ve values in it too theyll start from end just like SQL;
- this will not change the array itll return a copy just like substring.

### join
- this cobines an array into a string;
- Syntex: 
-        arr.join("<word_separator>");
- just like concat in SQL with word separator;
- this will join the array returnig a string;

### shift
- this is like pop but starts from 0'th index.
- it removes 1'st element
- it affect array

### unshift 
- this is like push but add at start
- it affect array also.

### length
- gives the length of the array;
- its a property not a function just like Java Array.length;


### Task:
1. We have a string, we need to calculate the number of words in that string;
2. Create an array of reandom nums sort that array and then find the:
- Mean
- Median
- Mode






