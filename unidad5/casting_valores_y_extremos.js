// operador . value.of() - obtener valores numericos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf());

console.log(b.valueOf());

let str = new String("Hola soy un string")
console.log(str);
console.log(str.valueOf());

// NaN(Not a Number) - infinity
let n = Number("adios");
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;
console.log(numerador / divisor);

let divisor_2 = null
console.log(numerador / divisor_2);

// como convertir los strings a valores numericos con number, parseInt y parceFloat

let numero = "5.89";
let num2 = 17.2;

console.log(typeof numero);
console.log(numero + num2); // error de concepto

console.log(Number(numero) + num2);

console.log(parseInt(numero));
console.log(parseFloat(numero));

let num3 = 4;
console.log(parseInt(num3));
console.log(parseFloat(num3));

// numeros hexadecimales (base 16)
let numHex = "0x3a5b7"
console.log(parseInt(numHex , 16 ));


// obtener valores maximo y minimo en javascript.
let min_precision = Number.EPSILON
let min_valor_js = Number.MIN_VALUE
let max_valor_js = Number.MAX_VALUE

console.log(min_precision);0.0000000000000000222

console.log(min_valor_js);

console.log(max_valor_js);
console.log(2 ** 1023);
console.log(2 ** 1024);