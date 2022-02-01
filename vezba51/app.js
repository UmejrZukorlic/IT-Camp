const btn = document.getElementById("btn");
const p = document.getElementById("p");

function showHide() {
    if (p.style.display === "none") {
        p.style.display = "block"
        btn.innerText = "HIDE"
    } else {
        p.style.display = "none"
        btn.innerText = "SHOW"
    }
}