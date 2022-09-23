// Actividades 04

// Una Cadena de texto con tu Nombre.
let nombre = "Leonel";
console.log(nombre);

// Una cadena de texto con tu Apellido.
let apellido = "Dominguez";
console.log(apellido);

// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias.
let estudiante = nombre + " " + apellido;
console.log(estudiante);

// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas.
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas.
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios.
let cantidad_de_letras = estudiante.length;
console.log(cantidad_de_letras);

// Una variable que contenga la primera letra del Nombre.
let primera_letra = nombre[0];
console.log(primera_letra);

//  Otra variable que contenga la última letra del Apellido
let ultima_letra = apellido.slice(-1);
console.log(ultima_letra);

// Una cadena de texto que elimine los espacios de la variable "estudiante".
let eliminacion_de_espacios = estudiante.replace(/\s/g,'')
console.log(eliminacion_de_espacios);

// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante".
let contiene = estudiante.includes("Leonel");
console.log(contiene);