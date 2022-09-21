let num = 10;
let acu = num ;
while ( num > 0){
    if (num > 1) {
        acu *= (num -1)
        num--
    }
    else
        break
}
console.log(acu);