prviBroj = document.getElementById('prvi')
operacija = document.getElementById('operacija')
drugiBroj = document.getElementById('drugi')
btn = document.getElementById('btn')
resenje = document.getElementById('resenje')
btn.addEventListener("click", () => {
    prvi = parseInt(prviBroj.value)
    opr = operacija.value
    drugi = parseInt(drugiBroj.value)
    switch (opr) {
        case "+":
            resenje.innerText = prvi + drugi;
            break;
        case "*":
            resenje.innerText = prvi * drugi;
            break;
        case "-":
            resenje.innerText = prvi - drugi;
            break;
        case "/":
            resenje.innerText = prvi / drugi;
            break;
        default:
            resenje.innerText = "Error";
    }
})