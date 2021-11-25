// function elevatorDistance(array) {
//     sum = 0
//     for (i = 0; i < array.length - 1; i++) {
//         sum += Math.abs(array[i] - array[i + 1])
//     }
//     return sum
// }
// osoba = {
//     name: "Umejr",
//     age: 17,
//     sayHello: function() {
//         console.log(this.age);
//     }
// }
// osoba.sayHello();
function doubleNumber(arr) {
    noviArr = arr.map(function(a) {
        return a * 2
    })
    return noviArr
}
console.log(doubleNumber([2, 5, 100]));