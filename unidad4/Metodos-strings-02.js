// Metodos de cadenas de texto párte 2
let input = "EscoRpiO soy yo";
let db = "escorpio";

// toLowerCase() - toUpperCase()
console.log(input.toLowerCase());
console.log(input.toUpperCase());
console.log(input.toLowerCase() === db.toLowerCase());
console.log(input.toUpperCase() === db.toUpperCase());

// Formas de concatenar 2 cadenas de caracteres
let str_1 = "Hola soy la primera cadena."
let str_2 = "Y yo soy la segunda cadena."

console.log(str_1.concat(" ",str_2));
console.log(str_1 + " " + str_2); 
console.log(`${str_1} ${str_2}`);

// eliminar espacios al inicio y al final
let str_3 = "    Hola soy un string con espacios al final.   "
console.log(str_3.length);
// trim()
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

// obtener el caracter que hay en cierta posicion
let str_4 =  "Hola soy el string numero 4"; // ("H", "o", "l", "a", " ", "s",....)
console.log(str_4.charAt(5));
console.log(str_4[5]);

// obtener la posicion de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Gorka y me gusta el surf. Mi nombre es Gorka y mi apellido es Villar"
console.log(str_5.indexOf("Gorka"));
console.log(str_5.charAt(9));
console.log(str_5.lastIndexOf("Gorka"));