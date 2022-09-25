// principales operaciones aritmeticas.
let a = 3.5;
let b = 4.8;

// Suma (+)
console.log(a + b);
// Resta (-)
console.log(a - b);
// Multilicacion (*)
console.log(a * b);
// Divicion (/)
console.log(a / b);

// Reresentacion de los numeros en cadenas de texto.
console.log(typeof a);
let a_s = a.toString();

console.log(a_s);
console.log(typeof a_s);

// redondeo de numeros decimales.
let c = 3.3;
let d = c * 3;

console.log(d);
console.log(typeof d);

// .toFixed(x) -- limitar el numero de decimales al valor x.
console.log(d.toFixed());
console.log(d.toFixed(4));
console.log(typeof d.toFixed(4));

let e = 1823.23123123;
let f = 213123123123123;
console.log(e.toFixed(2));
console.log(f.toFixed(2));

// .toPrecision(x) -- limita el numero de cifras significativas
console.log(e.toPrecision(7));
console.log(f.toPrecision(7));

console.log(typeof f.toPrecision(7));

