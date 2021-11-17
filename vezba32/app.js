unos = parseInt(prompt("Unesi broj"))
arr = []
for (i = unos; i > 0; i--) {
    arr.push(i)
}
console.log(arr);
sum = 1
for (i = 0; i < arr.length; i++) {
    sum = sum * arr[i];

}
console.log("Faktorijal unetog broja je", sum);