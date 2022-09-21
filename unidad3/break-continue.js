// Casos especificos donde usamos el break y el continue

let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (i = 0 ; i < lista.length ; i++ ){
    if (lista[i] === 3)
        continue;

    let j = 10;
    const k = 500;

    console.log(lista[i]);
    console.log(j);
    console.log(k);

    if (lista[i] > 5)
        break;
}

// Cual es el ambito de un bucle
console.log(j);
console.log(i);
console.log(k);