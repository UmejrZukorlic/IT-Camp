// first way
var1 = "*"
unos = parseInt(prompt("Ubaci duzinu niza"))
for (i = 0; i < unos; i++) {
    console.log(var1);
    var1 += " *"

}
// second way
text = ""
unos2 = parseInt(prompt("Ubaci duzinu niza"))
for (i = 1; i < unos2; i++) {
    for (j = 0; j < i; j++) {
        text += "*"
    }
    console.log(text);
    text = ""
}