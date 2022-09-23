// Metodos de cadenas de texto parte 3
// https://regexr.com  // aprender como funcionas las funciones regulares

let texto_largo = "tito no es un mono cualquiera. a tito no le gusta trepar por los arboles y odia comer platanos . el prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los arboles."

console.log(texto_largo.match(/no/g));

// no existe la palabra dentro de el texto
console.log(texto_largo.includes("terremoto"));

// existe la palabra dentro de el texto
console.log(texto_largo.includes("tito"));

// saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("tito no es un mono"));

// saber si un texto termina con una palabra
console.log(texto_largo.endsWith("arboles."));


