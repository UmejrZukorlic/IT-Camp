unos = parseInt(prompt("Unesi neki broj"))
reducer = (a, b) => a + b;
odvajanjeBroja = unos.toString()
    .split("")
    .map(Number)
    .reduce(reducer)

// console.log(odvajanjeBroja);

console.log("Zbir cifara u broju je", odvajanjeBroja);