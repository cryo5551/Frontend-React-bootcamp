### JavaScript

## Conditionals
- cheaking for conditiotions if its true or false
- no-conditional-checks for conditional statements

## if else
- cheak if condition is true or not
- only one condition;
## ladders
- cheaking for mutiple conditions if they are true or false
- using if() - else if() - else if() - else;

## switch
- its used when we want to cheak if somethng is equal to something(more then one)
- can be any data type

- switch (<variable to cheak>) {
    case <value to cheak>:
    // logic to be executed
    break;
    
    case...
    .
    .
    .

    default(if we can't find it in any of the cases)
}

## ternary
- <condition> ? <if true>:<if false>;
- example
- (marks>40) ? console.log('pass') : console.log('fail');


## loops
# for loop
- syntex
for(initialization; condition; logic){
    block of code;
}

# while loop
- syntex:
initialization;
while(condition){
    ......;
}
- while is entry control loop;

# do while loop
- its an exit control loop meaning it'll run before cheaking for the condition;
- so do while loop will run for atleast one condition;
- syntex 
 do{................................................................;}
while(condition);

# for of / for in loop

# for of loop 
- this loop is specially used for arrays only
- syntax

for(const <variable_name> of <array_name>){
    logic;
}

# for in loop 
- its used in objects
- and it gives us INDEX or key in case of objects;
- syntax

for(const <variable_name> in <object_name>){
    logic;
}


### break
- if you want to break out of a loop;

### continue
- it'll skip the present itration and continue the loop;

### Assignment:
1. write a logic to cheak weather a no is prime or not
2. FizzBuzz series
- div by 3 & 5 --> FizzBuzz
- div by 3 --> Fizz
- div by 5 --> Buzz
- otherwise --> Number
- write a loop to print this series from 1 to 200.
