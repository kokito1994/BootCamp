// como unir 2 listas .concat(lista2)

const lista1 = ["hola", 2 , false, null];
const lista2 = ["adios", 8 , true , undefined ];

console.log(lista1.concat(lista2));
console.log(lista1);

const lista3 = lista1.concat(lista2);
console.log(lista3);

// como unir 2 listas con el factor de propagacion
console.log(...lista3);

const lista4 = [...lista1, ...lista2]
console.log(lista4);

//ERROR mal entendido el conceppto de propagacion
const lista5 = [lista1, lista2];
console.log(lista5);

