// Comparaciones 

// Igualdad

if (5 == 5){
    console.log("5 es igual a 5");
}

if (5 === 5){
    console.log("5 es muy igual a 5");
}
// == solo compara el valor
let a = 5 ;
console.log(typeof a);
let b = "5" ;
console.log(typeof b);
if ( a == b){
    console.log("a es igual a b - igualdad debil");
}

// === compara el vaor y el tipo
if (a ===b){
    console.log("a es muy igual a b - igualdad fuerte");
}


let c = 5;
let d = 10;
if (c != d){
    console.log("c es diferente de d - debil");
}
if (c !== d){
    console.log("c es muy diferente de d - fuerte");
}



// cmoparaciones mayor que y menor que

let max = 10;
let min = 5;
if (max > min){
    console.log("max es mayor que min");
}
if (max >= 10){
    console.log("max es mayor igual que 10");
}

if (min < max){
    console.log("max es menor que min");
}
if (min <= 5){
    console.log("min es menor igual que 5");
}