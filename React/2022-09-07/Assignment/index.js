
const f_name = document.getElementById('f_name');
const l_name = document.getElementById('l_name');
const email = document.getElementById('email');

// console.log(f_name);


function show() {
    if(f_name.value == "" || l_name.value == "" || email.value == "") alert ("Please enter the information correctly"); 
    else{
        alert (`Hello ${f_name.value} ${l_name.value} your response has been rcieved we'll reach out to you shortly on ${email.value} in 20 wotking days`);
    }
}

