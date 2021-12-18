const unos = document.getElementById('number')
const btn = document.getElementById('btn')
const div = document.getElementById('div')
odgovor = document.createElement('h1')
div.appendChild(odgovor)
btn.addEventListener("click", () => {
    unesi = unos.value
    if (unesi <= 10) {
        odgovor.innerText = 'OK'

    } else {
        odgovor.innerText = 'Not valid'

    }

})