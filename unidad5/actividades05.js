
// - Una variable que contenga tu altura en centímetros (entero)
let alturaEnCentimetros = 173;
console.log(`Mi altura es de ${alturaEnCentimetros} centimetros`);

// Una variable que contenga tu altura en metros (número de coma flotante)
let alturaEnMetros = 1.73;
console.log(`Mi altura es de ${alturaEnMetros} metros`);

//  Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso = 115.5;
console.log(`Mi peso es de ${peso} kilogramos`);

// Una variable que contenga tu altura en metros redondeada hacia arriba.
let alturaRedondeada = alturaEnMetros.toFixed();
console.log(alturaRedondeada);

//  Una variable que contenga tu peso en kilogramos redondeado hacia abajo

let pesoRedondeado = peso.toPrecision(1);
console.log(pesoRedondeado);

// Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript.

let iguales = (Number.MAX_VALUE + 1) === (Number.MAX_VALUE);
console.log(iguales);

