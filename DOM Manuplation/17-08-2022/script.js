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