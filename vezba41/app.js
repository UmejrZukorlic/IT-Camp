function fiveAndGreaterOnly(arr) {
    veci = arr.filter(function(el) {
        return el >= 5
    })
    return veci
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));