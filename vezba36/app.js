niz = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true
]

function countSheeps(arrayOfSheep) {
    brojac = 0;
    for (sheep of arrayOfSheep) {
        if (sheep) {
            brojac++
        }
    }
    return brojac;
}
sheepL = countSheeps(niz);
console.log(sheepL);