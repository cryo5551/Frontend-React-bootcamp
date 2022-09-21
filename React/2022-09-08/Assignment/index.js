


function show() {

const user = document.getElementById('user').value;

const p = fetch(`https://api.github.com/users/${user}`);
// console.log(p);

p.then((data) => {
// console.log(data);
const show = data.text();
// console.log(show);
show.then((d) => console.log(d));
}); 
}