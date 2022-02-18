// const second = () => {
//     console.log("hello there!");
// }
// const first = () => {
//     console.log("hi there");
//     second();
//     console.log('the end');
// }
// first();
// var a = 10;
// var b = 20;
// setTimeout(() => {
//     console.log(a * b, "222");
// }, 3000)
// setTimeout(() => {
//     console.log(a * b);
// }, 1000)
// console.log(b);
// Return the output array, and ignore all non-op characters

// ---------------------------------------------------------------------------------------------

// function parse(data) {
//     let sum = 0;
//     let empty = [];
//     arr = data.split("");
//     console.log(arr);
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === "i") {
//             sum += 1
//         } else if (arr[i] === "d") {
//             sum -= 1
//         } else if (arr[i] === "s") {
//             sum *= sum
//         } else if (arr[i] === "o") {
//             empty.push(sum)
//         }
//     }
//     return empty
// }
// console.log(parse("iiisdoso"));

// ---------------------------------------------------------------------------------------------

// function showResult(some) {
//     console.log(some);
// }

// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2
//     myCallback(sum)
// }
// myCalculator(5, 5, showResult);

// // ---------------------------------------------------------------------------------------------

// greeting = function(name) {
//     console.log('Hello ' + name);
// }

// function Name(arg1) {
//     var name = 'jana';
//     arg1(name)
// }
// Name(greeting);

// // ---------------------------------------------------------------------------------------------

// function greet(name, myFunction) {
//     console.log('Hello world');
//     myFunction(name)
// }

// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }
// setTimeout(greet, 2000, 'John', sayName)

// // ---------------------------------------------------------------------------------0------------

// let myPromise = new Promise((myResolve, myReject) => {
//     setTimeout(() => {
//         myResolve("resolve")
//         myReject("reject")
//     }, 3000);
// });
// myPromise
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("end");
//     })

// // ---------------------------------------------------------------------------------0------------
// function resolveat2s() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('resolved')
//         }, 2000)
//     })
// }

// async function asyncCall() {
//     console.log("calling");
//     try {
//         const result = await resolveat2s();
//         console.log(result);
//         console.log('drugi korak');
//         console.log('treci korak');
//     } catch (err) {
//         console.log("doslo je do greske");
//     }
// }

// function asyncCall() {
//     console.log("calling");
//     resolveat2s()
//         .then((result) => console.log(result))
//         .then(() => console.log("drugin korak"))
//         .then(() => console.log("treci korak"))
// }

// ---------------------------------------------------------------------------------0------------

body = document.querySelector("body")
const getData = async() => {
    let response = await fetch('https://catfact.ninja/facts?page=1&limit=10')
    let res = await response.json()
    res.data.forEach(el => {
        div = document.createElement('div')
        p = document.createElement('p')
        body.appendChild(div)
        div.appendChild(p)
        p.innerHTML = el.fact
        console.log(el.fact);
    });
}
getData();