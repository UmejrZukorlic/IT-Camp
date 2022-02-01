// main = document.getElementById("main");
// for (let index = 0; index < 20; index++) {
//     div = document.createElement("div")
//     main.appendChild(div);
//     div.classList.add("boja")
// }

// p = document.getElementById("p").innerText;
// let text = p.split(" ")
//     // console.log(text);
// for (let index = 0; index < text.length; index++) {
//     let element = text[index].split('');
//     if (element.length >= 10) {
//         text[index].toUpperCase() + ' ';
//     }

// }
// text = text.toString();
// console.log(text);
// p = document.getElementById("p").innerText;
// let text = p.split(" ")
// let newString = '';
// for (const el of text) {
//     if (el.length) {
//         newString += el.toUpperCase() + " ";

//     } else {
//         newString += el + " ";

//     }
// }
// p.innerHtml = newString
p = document.getElementById("p");
p.innerHTML = p.innerHTML.split(" ").map(word => word.length > 10 ? word.toUpperCase() : word).join(" ")