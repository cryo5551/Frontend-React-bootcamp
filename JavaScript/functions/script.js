function welcome(){
    console.log("Hello world");
}

welcome();
// Attribute vs Parameter functions
// function to add three Numbers

function add(num1, num2, num3=0) {
    console.log(num1+num2+num3);
}

add(9, 8, 4);
// defaulter parameters
add(9, 7,);

function multiply(num1=1, num2=1, num3=1) {
    return (num1*num2*num3);
}

const res = multiply(9, 8);
console.log(res);

// Anonymous function
const multiply_3 = function(num1, num2, num3) {
    return (num1*num2*num3);
}
console.log(multiply_3(9, 8, 6));

// IIFE 

(function() {
      console.log("Hello world");
})();
// or

(function(a,b) {
    console.log(a+b);
})(4,8);

