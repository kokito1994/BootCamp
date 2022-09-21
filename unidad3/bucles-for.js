// bucles for

// i = i +1
// i += 1
// i ++
for ( let i = 0;  i < 10; i = i++ ) {
    // esto es el bucle
    console.log(i)
}
let lista =[1 , 2 , 4 , 6 , 7 , 5 , 10 , 12 ]
for (let i = 0 ; i < lista.length(); i ++){
    console.log(lista(i));
}

// Estructura for... of
for ( let valor of lista){
    console.log(valor);
}

// Estructura forEach
lista.forEach(valor =>{
    console.log(valor);
})

//Estructura for... in
let persona = {
    nombre:"Gorka",
    apellido:"Villar",
    edad: 34,
    isDeveloper: true,
}
console.log(persona.nombre);

let prop = "edad";
console.log(persona[prop]);

for (propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}