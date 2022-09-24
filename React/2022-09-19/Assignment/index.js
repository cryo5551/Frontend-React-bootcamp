
const btn = document.getElementById('btn');

const response = data =>{
    const list = document.getElementById("list");
    data.forEach(data => {
        const new_list = document.createElement("li");
        new_list.innerText = ` ${data.name} ${data.email}`;
        list.appendChild(new_list);
    });

}

btn.addEventListener('click', () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(users => users.json())
    .then(data => response(data));
});