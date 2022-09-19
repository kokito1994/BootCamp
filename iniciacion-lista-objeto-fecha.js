// listas , array o arreglo
const lista = [1, "hola", true , undefined, null];
const lista2 = new Array(2, "hola", true , undefined, null);
const lista3 = new Array(3);
lista3[0] = "soy el primer elemento , index 0";
const lista4 = [lista, lista2 ,lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);


// objetos
const movil = {
    altura : 10,
    anchura : 5,
    marca : "xiaomi",
    isWhite: false,
    contactos: ["Gorka" , "Martin" , "KOKI" , "Raul"],
    tarjeta:{
        marca: "Sandisk",
        almacenamiento: 32,

    },
    "altura-tarjeta" : 4,
}

movil.anyo = 2019;
movil.marca = "Samsung";
console.log(movil.anchura);
console.log(movil.tarjeta.marca);

// fechas
// librerias de apoyo Moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10); // Utilizando los milisegundos
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(2022 , 0 , 15);
console.log(fecha_valores);

const dia = ahora.getDate();
console.log(dia);
const mes = ahora.getMonth() +1 ;
console.log(mes);
const año = ahora.getFullYear();
console.log(año);

console.log(dia , mes , año);