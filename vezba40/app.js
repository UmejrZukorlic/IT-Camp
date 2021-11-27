function capitalizeNames(arr) {
    // your code here
    ime = arr.map(function(a) {
        capital = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
        return capital
    })
    return ime
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]