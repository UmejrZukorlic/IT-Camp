body = document.querySelector('body')
btn = document.getElementById('btn')
a = parseInt(prompt("Koliko brojeva zelis da uneses"));
arr = [];
lista = document.createElement('ul');
body.appendChild(lista)
for (i = 0; i < a; i++) {
    boja = prompt("Unesi boju");
    arr.push(boja)

}
arr.forEach((el) => {
    listaEl = document.createElement('li')
    listaEl.innerText = el
    lista.appendChild(listaEl)
});
// remove elements
removeElements = () => {
    removeColor = prompt("Unesi boju koju zelis da removas");
    filteredColors = arr.filter((boja) => boja != removeColor);
    lista.removeChild(listaEl)
    lista = document.createElement('ul');
    arr.forEach((el) => {
        listaEl = document.createElement('li')
        listaEl.innerText = el
        lista.appendChild(listaEl)
    })
}
btn.addEventListener("click", removeElements)