// - getElementById()

// const para_elem = document.getElementById("shubham");
// console.log(para_elem);
// para_elem.style.backgroundColor = "rgba(255, 45, 50)";


// - getElementsByClassName()

const elements = document.getElementsByClassName("shrey");
// it returns the array of same class elements.
console.log(elements);
elements[1].innerText = "New Button";


// const arr_elements = Array.from(elements);
// console.log(arr_elements);

// arr_elements.forEach((single_element) => {
//   single_element.style.backgroundColor = "#FF0000";
// });

// arr_elements.forEach(single_element => single_element.style.backgroundColor = "#FF0000");



// - getElementsByTagName()

// const list_items = document.getElementsByTagName("li");
// console.log(list_items);


// - getElementsByName()
// const ip = document.getElementsByName("input1");
// console.log(ip);


// - querySelector()
// - querySelectorAll()



// Tasks
// 1.
const student_data = document.getElementsByClassName("class_data");
// console.log(student_data);

const student_arr = Array.from(student_data);

student_arr.forEach((element, idx) => {
    if (idx % 2 == 0)  element.style.backgroundColor = "rgba(255,49,50)";
    else  element.style.backgroundColor = "rgba(155,149,150)";
});



  

const misckif = () =>{
    const cheakn = document.getElementById("check");
    // console.log(cheakn.checked);

    const element = document.getElementById("task2");

    if(cheakn.checked == true){
        element.style.backgroundColor = "#000000";
        element.style.color = "#ffffff";
    }

    else{
        element.style.backgroundColor = "#ffffff";
        element.style.color = "#000000";
    }
}




