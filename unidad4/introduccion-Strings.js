// Strings ( Cadena de caracteres)

let str_dbl = " Hola soy un texto con comilas dobles"
let str_smp = ' Hola soy un teto con comillas simples'

//    let str_mal = "hola estoy mal escrito'; // deben empezar y terminar con las mismas comillas
console.log(str_dbl);
console.log(str_smp);

let str_comillas = "cualquiero cosa de ejemplo  \" asdasdasd asd asd asd  \""
let str_comillassimples = 'caisduasd iouasdoiua sdioas " asd asdas d" '
let str_comillas_dobles = " asd asdasdasd asdasd asd asd 'asdasd asdas4d s' "
let str_comillas_simples_2 = 'asdasda dasd as dasd as dasdas d \'sdasd asd as asd as das das d\' '

console.log(str_comillas);
console.log(str_comillas_simples);
console.log(str_comillas_dobles);


////  comillas invertidas ( backticks)

let str_backticks = `hola esto es un str con backticks`

console.log(str_backticks);

let nombre = "Gorka"
let saludo = `Hola, ${nombre} Bienvenido`

console.log(saludo); 

// Plantillas html

let plantilla = `
<html>
    <h1>Pagina Web de ${nombre}</h1>
    <p>Este es un Parrafo</p>
</html>
`
console.log(plantilla);

//// Introduccion de variables en html

let libros = ["Empieza por el por que", "el monje que vendio su ferrari", "El poder del ahora"]
