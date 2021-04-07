'use strict';
// tradicional
function myuFunction(config){
    console.log(this);
    console.log("esto es una funcion tradicional");
}


// arrow function 
const arrowFunction = (n1,n2) => {
    return n1 +n2
};

const suma = (num1, num2) => num1 + num2; 
const restar2 = num => num - 2;

console.log(arrowFunction(2,8));
console.log(suma(2,5));
// funciones anonimas
const myFunctionInVariable = function(){

}

// funciones auto llamad




