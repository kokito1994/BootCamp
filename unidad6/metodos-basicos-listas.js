// como trabajar con listas(arrays , arreglos, vectores...)
let var1 = 45
let array = [var1 , 1, "hola", 3, false, {id: 5}, 6 , null , undefined];
console.log(array);

// acceder a los valores de un array a travez de su posicion.
// array[] ---- indice 0, 1, 2, 3, 4, 5, .....
array[0]
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

// metodos para introducior nuevos valores en nuestros arrays
// . push()   .unshift()   ---- mutan el valor de nuestro array
// valores al final -- push
array.push("final", 45, 100,"hola");
console.log(array);
// valores al principio -- unshift
array.unshift("inicio", 12, false, null, "hola");
console.log(array);

// metodos para eliminar valores en nuestros arrays
// .pop()  .shift() -  - - - mutan el valor del array

array2 = [ 1, 2, 3, "hola", false]

// valores al final .pop()
array2.pop()
console.log(array2);
array2.pop()
console.log(array2);

// valores al inicio .shift()
array2.shift()
console.log(array2);


// metodo para eliminar modificar o añadir valores en nuestro array
// splice(x,y,z)

// eliminar valores .splice(indice , numValoresAEliminar)
const array3 = [ 1, 2, 3, 4, 5, 6]
array3.splice(2, 1); 
console.log(array3);

// añadir valores con .splice(indice, 0 , valores)
array3.splice(2, 0, "hola")
console.log(array3);

// modificar valores con .splice(indice, 1 , valores)
array3.splice(2 , 1 , 3);
console.log(array3);