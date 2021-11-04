// var1 = "Hello world";
// var2 = var1.slice(6, 11);
// console.log(var2)

// javascript dom da se nauci i javascript sta je

// text = "Plase visit Microsoft";
// newText = text.replace("Microsoft",("Google"));
// smallText = text.toLowerCase();
// bigText = text.toUpperCase();

// console.log(text);
// console.log(newText);
// console.log(smallText);
// console.log(bigText);

// text = "Hello";
// console.log(text);
// var1 = text.concat(" ","world")
// console.log(var1);

// var1 = ["apple" , "banana" , "kiwi"]
// console.log(var1[2])
// var1=["hamza","-hamza","Hamza+"];
// var2=var1.join("  ");

// console.log(var1);
// console.log(var2);
// var1=["apple" , "banana" , "kiwi","hamza"]
// console.log(var1);(

// vracenaVrednost= var1.pop()

// console.log(var1);

// console.log(vracenaVrednost);

// var1=["apple" , "banana" , "kiwi","hamza"]
// var2 = var1.splice(0,2)
// console.log("Vracene vrednosti",var2);

// var1=["apple" , "banana" , "kiwi","hamza"]
// var2 = var1.slice(0,2)
// console.log(var1);
// console.log(var2);

// if(5>3){
//     console.log("nesto");

// }

// console.log("nas dalji kod");
// a = 18;
// b = 12;
// if(a>=b){
//     console.log("ne moze da bude babo");
// }
// console.log("napravio sam");
// var1= parseInt(prompt("Unesi broj godina"));
// if(var1>=18){
//     alert("Punoletan");
// }
//    alert("Imas:", var1)
// var1 = parseInt(prompt("Unesi neki broj"))
// if(var1 === 20){
//     alert("Broj je 20")
// }else{
//     alert("Broj nije 20")
// }








// lista = ["banana", "jabuka"];
// odabir = parseInt(prompt("Unesi 1 da dodas elemet, a 2 da izbacis"));
// if(odabir === 1){
//     dodaj = prompt("Unesi namirnicu koju zelis");
//     if(dodaj.length<7){
//         lista.push(dodaj);
//     }else{
//         alert("Rec je dugacka");
//     }
// }

// if(odabir === 2){
//     lista.pop();
// }


// alert(lista);

// broj = parseInt(prompt("Unesi neki broj"))


// var1 = parseInt(prompt("Pick random number"))
// if (var1 % 3 === 0 && var1 % 5 === 0) {
//     console.log("FizzBuzz");
// } else if (var1 % 3 === 0) {
//     console.log("Fizz");
// } else if (var1 % 5 === 0) {
//     console.log("Buzz");
// } else {
//     console.log("Broj nije deljiv ni sa 3 ni sa 5");
// }
// var1 = parseInt(prompt("Unesi jedan broj"))
// var2 = parseInt(prompt("Unesi drugi broj"))
// if (var1 > var2) {
//     console.log("Veci je", var1);
// }
// if (var1 < var2) {
//     console.log("Veci je", var2);
// }
// if (var1 = var2) {
//     console.log("Jednaki su");
// }
// unos = prompt("Koji je dan u nedelji")
// unos2 = unos.toLowerCase()
// switch (unos2) {
//     case "ponedeljak":
//         console.log("Danas je Ponedeljak");
//         break;
//     case "utorak":
//         console.log("Danas je utorak");
//         break;
//     case "srijeda":
//         console.log("Danas je Srijeda");
//         break;
//     case "cetvrtak":
//         console.log("Danas je Cetvrtak");
//         break;
//     case "petak":
//         console.log("Danas je Petak");
//         break;
//     case "subota":
//         console.log("Danas je Subota");
//         break;
//     case "nedelja":
//         console.log("Danas je Nedelja");
//         break;
//     default:
//         console.log("Neispravan unos");
// }
// for (i = 0; i < 7; i++) {
//     console.log("Umejr");
// }
// var1 = ["banana", "kiwi", "apple", "mango"]
// for (i = 0; i < var1.length; i++) {
//     console.log(var1[i]);
// }
// var1 = parseInt(prompt("Unesi broj ponavljanja"))
// var2 = prompt("Unesi ime")
// for (i = 0; i < var1; i++) {
//     console.log(var2);
// }
// unos = parseInt(prompt("Unesi pocetni broj"))
// unos2 = parseInt(prompt("Unesi zavrsni broj"))
// for (i = unos; i <= unos2; i++) {
//     if (i % 2 === 0) {
//         console.log(i, "paran");
//     } else {
//         console.log(i, "neparan");
//     }
// }