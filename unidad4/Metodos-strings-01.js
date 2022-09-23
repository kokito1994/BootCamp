/// Metodos mas utilizados con cadenas de caracteres
// como obtener la longitud de un string
let str = "hola soy un string";
console.log(str.length);

//obtener partes de cadenas de caracteres
//slice() substring() substr()
let slice_str = str.slice(5, 10)
console.log(slice_str);
let substring_str = str.substring(5, 10);
console.log(substring_str);
let substr_str = str.substr(5 , 10);
console.log(substr_str);

// Reemplazar parte de el contenido de una cadena de texto
let cadena = "Hola mi nombre es Gorka"
console.log(cadena);

// Al utilizar strings solo reemplaza la primera instancia
console.log(cadena.replace("Gorka", "Miguel")); 
let texto_largo = "tito no es un mono cualquiera. a tito no le gusta trepar por los arboles y odia comer platanos . el prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los arboles."

// Al utilizar strings solo reemplaza la primera instancia
console.log(texto_largo.replace("los", "cinco"))

// Al utilizar la exprecion regular /g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/los/g, "cinco"));

