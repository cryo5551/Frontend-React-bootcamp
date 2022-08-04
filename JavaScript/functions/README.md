
## Functions
- function is set of instructions (block of code) it performes a specific task we can use it in program multiple times.

- **semi-colon are not neccesory but its good habit to give ";" at the end of the line**

### Named functions
- its a basic regular function
- syntex:
  - function fun_name(){
    code//...
  }

### Argument vs Parameter
- Argument are what we pass when calling the function.
- Parameter is the name of the parameter that will be passed to the function.
- they are also called formal parameters.

- syntex:
 - function fun_name(parameters){
    code//...
 }
- fun_name(argument);

### defaulter parameters
- these are the values we give to parameters if there a no argument passesed.
- so if were sending less arguments then we have to set the parameter to a default value.

### Undefined parameters
- if were not sending the argument and the default value of the parameter is undefined then itll show undefined.

### Return 
- this will return the value after task is performed.
- we can save the value of function in a variable or we can just use it directly.

- syntex:
 - function fun_name(parameters) { ...code ... }
 - const variable = fun_name(arguments);

###  Anonymous function
- there is no function name present.
- we define the fuction as a variable.
- the refrence for this function will be stored in a variable.
- function invoking (calling) is same as noraml function.

- syntex:
 - const variable_name = function(parameters) { .code ... }
 - function invoke
 - console.log(variable_name(arguments));

- the Advantages of this function is security reasons we cannot acess these type of functions outside of the scope of the function.
- **use const as function variable datatype**

### dinasaur game hack
Runner.prototype.gameOver = function(){};

### Function expression
- The functions that use 'function' keyword are called function expression.

### IIFE 
- Immediately Invoke function expression.
- its a function that is defined and exicuted immidiately only once in thr entire program;
- we cannot invoke it if wanted to to.

- syntex: 
 - (function(parameters){
    code....//
 })(arguments);
- **All IIFE functions are annonymus functions**

### Taking input from user
- prompt is used to take inputs from user in javascript.
- syntex: prompt(Hint);

### Assignment:
1. write a function to swap two numbers.
2. Write a function to genrate a random string with taking the length.
- we have to use rand function

### Arrow function(different ways to write)
- its also an annonymus function.
- introduced in ES6(2015)
- we dont use function keyword in this type of function
- syntex:
 - const variable_name = () =>{code ...;}
 variable_name();

- when we don't have any parameter then we can use _ or simply ();
- Ex: const arrow = () => console.log("I am arrow");

- when we have one parameter only then we can remove the paranthesis.
- Ex:
 - const print_sqire = num =>{
    const approach1 = num*num;
    const approach2 = num **2;  // ^ dosent work in js
    const approach3 = Math.pow(num,2);
    console.log(approach1, approach2, approach3);
  }
 print_sqire(5);

- if it har more then one parameter then write as normal;
- we can also remove {} if function only have one argument;
- Ex: 
 const addition = (num1, num2) => console.log(num1+num2);
 addition(5,8);

### Callback function
- Any function we sending as an argument will be called callback function.
- Ex:
 - setTimeout(function(), 5000);  


### First order function & Higher Order Functions;
- higer order functions are those functions that accept an function as an argument.
- It returns a function.

- **cosole.log is Not a higher order function its a FOF**

### First class function
- Any function that is assinged to a variable is called first class function.
- It can be treated as an variable.
- Ex: const variable = function(){code ...}

### Rest Oprator
- It Allows to Have infinite number of arguments.
- syntex: ...Varable_name
- # 93

Assignments:
1. Create a function that accepts n number of strings, from those strings you need to print thr string that contains maximum number of vowels;
2. similar to what we did with sum do it with multiplication for 3 levels(returning a function)

### Returning a function
- we can define a function inside a function;
- we can return a function from another function.
- syntex: parent{_function(){
  child_function(){}

  return child_function;
}
- **these functions have closure to thier parent function means it can use the parameters of parent function**

- cheak Example at 127;

### What is closure
- Nesting (bundling) of functions are returned which contains a refrence to its laxical scope/envirement;

### Currying
- this is 95% same as clousere
- In the child function, insted of passing all the arguments together, we pass them separately;