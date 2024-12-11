//Lab-1 Hello World
//console.log("Hello World");

//Variables

//Employee Details
// var empName = "Nilesh";
// var empId = 10090;
// var empEmail = "nilagarwalla.ext@deloitte.com";
// var designation = "PDI Intern"

// console.log(`Employee ID: ${empId}\nEmployee Name: ${empName}\nEmployee Email: ${empEmail}\nEmployee Designation: ${designation}`);

/*
//Mini Calculator
var numOne = 20;
var numTwo = 10;
console.log(`${numOne} + ${numTwo} =`, numOne+numTwo);
console.log(`${numOne} - ${numTwo} =`, numOne-numTwo);
console.log(`${numOne} * ${numTwo} =`, numOne*numTwo);
console.log(`${numOne} / ${numTwo} =`, numOne/numTwo);
console.log(`${numOne} % ${numTwo} =`, numOne%numTwo);
*/

/*
//Demo Authentiction System
var username = "nilesh";
var adminPassword = "admin";
var iamPassword = "123456";
var pass = "12345";

if(username=="nilesh"){
    if(adminPassword==pass) console.log("Welcome Admin Nilesh");
    else if(iamPassword==pass) console.log("Welcome IAM Nilesh");
    else console.log("Password is wrong!");
}
else console.log("Username is wrong!");
*/

// var time = 5;
// var msg = "Good ";

// switch (true) {
//     case (time>=12 && time <= 15):
//         msg += "Afternoon"
//         break;
    
//     case (time>15 && time <= 24):
//         msg += "Evening"
//         break;
    
//     case (time<12):
//         msg += "Moring"
//         break;
    
//     case (time<=0 || time >24):
//         msg = "Wrong Input"
//         break;
// }
// console.log(msg);

var even = "Even Numbers: \n"
var odd = "Odd Numbers: \n"
var i;
for(i=10;i<=20;i++){
    if(i%2==0) even = even+i+"\n";
    else odd = odd+i+"\n"
}
console.log(even+"\n"+odd);
