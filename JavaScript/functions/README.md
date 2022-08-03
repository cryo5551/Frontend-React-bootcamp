
### Functions
- function is set of instructions (block of code) it performes a specific task we can use it in program multiple times.

**semi-colon are not neccesory but its good habit to give ";" at the end of the line**

## Named functions
- its a basic regular function
- syntex:
  - function fun_name(){
    code//...
  }

## Argument vs Parameter
- Argument are what we pass when calling the function.
- Parameter is the name of the parameter that will be passed to the function.
- they are also called formal parameters.

- syntex:
 - function fun_name(parameters){
    code//...
 }
- fun_name(argument);

## defaulter parameters
- these are the values we give to parameters if there a no argument passesed.
- so if were sending less arguments then we have to set the parameter to a default value.

## Undefined parameters
- if were not sending the argument and the default value of the parameter is undefined then itll show undefined.

## Return 
- this will return the value after task is performed.
- we can save the value of function in a variable or we can just use it directly.

- syntex:
 - function fun_name(parameters) { ...code ... }
 - const variable = fun_name(arguments);

##  Anonymous function
- there is no function name present.
- we define the fuction as a variable.
- the refrence for this function will be stored in a variable.
- function invoking (calling) is same as noraml function.

- syntex:
 - const variable_name = function(parameters) { .code ... }
 - function invoke
 - console.log(variable_name(arguments));

- the Advantages of this function is security reasons we cannot acess these type of functions outside of the scope of the function.
**use const as function variable datatype**

## dinasaur game hack
Runner.prototype.gameOver =()=>{};

## Function expression
- The functions that use 'function' keyword are called function expression.

## IIFE 
- Immediately Invoke function expression.
- its a function that is defined and exicuted immidiately only once in thr entire program;
- we cannot invoke it if wanted to to.

- syntex: 
 - (function(parameters){
    code....//
 })(arguments);
**All IIFE functions are annonymus functions**

## Taking input from user
- prompt is used to take inputs from user in javascript.
- syntex: prompt(Hint);

## Assignment:
1. write a function to swap two numbers.
2. Write a function to genrate a random string with taking the length.
- we have to use rand function

## Arrow function(different ways to write)
