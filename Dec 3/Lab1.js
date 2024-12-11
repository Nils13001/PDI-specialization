user = {
    name: "Nilesh",
    age: 23,
    field: "Engineering"
}

var prod = {...user, role:"Admin"}

console.log(prod);

var {name, ...otherdetails} = user;
console.log(name, otherdetails);
