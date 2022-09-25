// iterar los valores de una lista
const array = ["hola", 2, 5, 90, false, undefined]

// forma antigua y poco eficiente
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}


// forma ES6 (mas eficiente) metodo .forEach()
let suma = 0;
const arrayNums = [1, 2, 4, 5, 6, 7,]
arrayNums.forEach(valor => {
    suma += valor
    console.log(valor)
} )
console.log(suma);

// busqueda de un valor dentro de una lista .find()
// quiero buscar el elemento 90
const variable = array.find(valor =>{
    if (valor === 90){
        return true
    }
})

console.log(variable);

const listaObjetos = [
    {nombre: "Leire", edad: 35},
    {nombre: "Gorka" , edad: 34},
    {nombre: "Miguel", edad: 28},
    {nombre: "Lucia", edad: 3},
    {nombre: "Amalia", edad: 39},
]
//
//  const objeto = listaObjetos.find(o => {
//      if ( o.nombre === "Miguel"){
//          return true
//     }
//  })
//  console.log(objeto);
//  console.log(objeto.edad);

const objeto = listaObjetos.find(o => o.nombre === "Miguel")
console.log(objeto.edad);

const { edad } = listaObjetos.find(o => o.nombre === "Miguel")
console.log(edad);