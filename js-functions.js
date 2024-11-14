// function sayHello(){
//     document.write("Hello Folks <br>");
// }
// sayHello();
// sayHello();

// function sayHelloWithParams(firstName, lastName = 'Doe'){
//     document.write("Hello " + firstName + " " + lastName + "! <br>");
// }
// sayHelloWithParams('jhon');
// sayHelloWithParams('jhon', 'smith');

// let Hello = function (name){
//     document.write(`Hello ${name} </br>`);
// }
// Hello('Andre');

// function outerFunction(outerParams){
//     function innerFunction(innerParams){
//         document.write("Outer Params: " + outerParams + "</br>");
//         document.write("Inner Params: " + innerParams + "</br>");
//     }
//     innerFunction('inner');
// }
// outerFunction('outer');
// innerFunction('inner');

const greet =  (name)=> {
    document.write("Hello " + name + "! <br>");
}
greet('Zico');

function outerFunction(outerParams){
    return function innerFunction(innerParams){
        document.write("Outer params: " + outerParams + "<br>");
        document.write("Inner params: " + innerParams + "<br>");
    }
}
const newFunction = outerFunction('aa');
newFunction();
newFunction('Inner');
newFunction('Outer');
