arr = []
pocetnaVrednost = parseInt(prompt("Upisi pocetnu vrednost"))
zavrsnaVrednost = parseInt(prompt("Upisi zavrsnu vrednost"))
for (i = pocetnaVrednost; i <= zavrsnaVrednost; i++) {
    arr.push(i)

}
reducer = (a, b) => a + b;
console.log("VAs niz je", arr);
console.log("Aritmeticka sredina je", arr.reduce(reducer) / arr.length);