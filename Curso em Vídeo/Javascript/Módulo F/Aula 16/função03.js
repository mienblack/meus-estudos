function fatorial(number) {
    let fat = 1;
    for (let c = number; c > 1; c--) {
        fat *= c;
    }
    return fat;
}

console.log(fatorial(4))