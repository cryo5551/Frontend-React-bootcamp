# Aug-11, 2022

## Doubts -> Task 2
- Did Part 1 in the session.
- Part 2 to be done by the students.

## Object
- A collection of data.
- It has key-value pairs
- Key can be anything, but in string data type.
- This is a Datatype in JS.
- Objects are very very very inefficient in looping (wrt time complexity).
- Key has to be unique.
- If the key is same, it will update.
- The sequence of elements does not matter.
- The Alphabetical order which you see in the console when you expand the object is because of goodness of the browser. The browser is implementing sort for the developers to debug easily.
- Just like arrays, object elements are also separated by comma (,).
- Because keys are assumed to be string, we can remove the quotation mark. (This feature was introduced in ES4 (2012-2013), probably).
- The keys are supposed to be strings, if we don't give it, then JS will try to convert.

### Leexicography
Lexicography -> A fancy way of saying alphabetical ordering.
- We use this to write the sequence for dictionary.

### How to Create
- {} Approach
- We use {} to define the object and inside that we write the key value pairs.
- Syntax -> key: value,
- For the last key of my object, we can actually skip the comma. (Recommended).
- It is mandatory to give key value pairs, otherwise, it will be a syntax error.
- If we want to use key from a variable. We put it inside a square bracket.
- Because JS converts (tries to) everything into a string, it will convert that array into a string.
- Value can be anything. Even other objects and even functions.

- Constructor approach
- In the constructor, we directly create an object using the new keyword.
- In this approach, we DO NOT pass the value.
- If we do it, it will create an object of that datatype of whatever we pass as argument.

### How to update/add a value.
- We use a dot syntax.
- <object>.<property>
- Example: console -> It is a big big object.
- It contains a lot of functions that we can use.

- If in an object, there are multiple elements with the same key, the one written later will override all rhe prvious ones.

### delete operator
- IT IS AN OPERATOR.
- This is used to remove any element from the object.
- It's a unary operator.
- It is used to delete any property of an object.
- Usage: delete <object_variable>.<property_name>


## Object Methods
- These are the built in methods of object.
- Some of them can be used directly on the Object variable.
- Others needs to be called using Object. class.

### keys()
- This is on the Object class.
- Usage: Object.keys(<object_variable>)
- This returns an ARRAY of all the keys which are part of my object.
- If you want to loop on the object, this can be used as a way to do it.

### values()
- This is also on the object class.
- Usage: Object.values(<object_variable>)
- This returns an ARRAY of all the values which are part of my object.


## Task:

- We have an object.
```
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
```
- From this object, print the list of names of students who are doing MERN (Mongo, Express, React Node).
- Print the list of students who have scored 40 or more marks.





- entries()
- hasOwnProperty()



- Interview Examples:
-- Try to have keys as not a string.


### Further Reading
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management



### IMPORTANT
- Object.freeze() / Object.isFrozen()
- Object.seal() / Object.isSealed()

Object.keys.forEach


### Scope
- It tells us weather a variable can be acessed (refrenced) in a block of code.
- Scope defind where the variable can be refrenced.
- If you have the refrence, you are in the scope, if you dont have the refrence, you are not in the scope.

### Globle scope
- this can be acessed from anywhere.
- Even from a different file.

### Window scope
- This is very similar to the global scope. 
- just that we use window keyword.
- it is okey to use interchangably with the global scope.
- This is the highest scope as so global scope.
- Syntex :  window.variable = <value>

### Functional scope
- this is accessible inside a function.

### Module scope
- If we define in a module, we can only access it there.
- If we define a variable on a single file, we can only use it on the file.

### Block scope
- only acessible inside a block.
- reffered as local block.

### Shadowing
- the parent block cannot access the child block
- So, if there is same variable name in cilde and parent block, it will not care about it.

- Ex. {
  const <variable_name> =  <value>;
  {
    const <variable_name> = <value>;
  }
  console.log(<variable_name>);
}

- if we are using var then it'll override the variable cz its a global scope and dosent care about  anything.

### Scope chaining
- This means the child block can access the parent block's scope.

- If we are using function, then we cannot accesse var outside a function;

**If we dont give a scope specifier it becomes a globle/windows variable it can be accessed anywhere**

## Hoisting
- 

## TDZ 



## Multi dimensional arrays 

- <String>.split
### Shallow Copy | Deep Copy
### Spread Operator | Rest | Destructuring
### NaN
### Concatenation
### Pure function
### Casing
### async / await (callback hell)
## hoisting and TDZ

### function declaration vs arrow functions.
## this -> call/apply/bind (during OOP)
## new keyword;

## setInterval/clearInterval + setTimeout/clearTimeout

### RegEX
## Various functions of console.