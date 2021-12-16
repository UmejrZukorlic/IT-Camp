// a = document.getElementById("main")
// console.log(a);
// a.addEventListener("click", () => {
//     a.classList.add("klasa1")
// });
// a.addEventListener("click", () => {
//     a.classList.toggle("klasa2")
// })
unos1 = parseInt(prompt("Unesi"))
unos2 = parseInt(prompt("Unesi"))

ul = document.createElement("ul");
console.log(ul);
for (i = unos1; i <= unos2; i++) {
    li = document.createElement("li");
    li.innerText = i;
    ul.appendChild(li);
}