// console.log('Enter any number');
let num = prompt('Enter a number');

let flag = true; 
for(let i=2; i<num/2; i++){
    if(num % i == 0) {
        flag = false;
        break;
    }
}
(flag == false) ? console.log('Not Prime'): console.log('Prime');