// break y continue
// labels

let unidades = 0;
let decenas = 0;

buclesDecenas: while(true) {
    buclesUnidades: while (true){
        console.log("El numero actual es: ${decenas} ${unidades}")
        unidades++;
        if (unidades === 10) {
            unidades = 0;
            break buclesUnidades;
        }
        if (decenas ===2);
        break  buclesDecenas;
    }
    decenas++
    
}

console.log("ya hemos terminado");