const container = document.getElementById('container');
const place = document.getElementsByClassName('place');
const x = document.getElementsByClassName('x');
const o = document.getElementsByClassName('o');
const win = document.getElementById('pobednik')
let player = 1;

function mark(a) {

    if (player === 1) {
        if (!x[a].classList.contains('click')) {
            if (!o[a].classList.contains('click')) {
                odabir = x[a];
                console.log(odabir);
                odabir.classList.add("click");
                player--
                setTimeout(() => {
                    provera(x, "X")
                }, 50)
            }
        }
    } else {
        if (!x[a].classList.contains("click")) {
            if (!o[a].classList.contains('click')) {
                odabir = o[a];
                odabir.classList.add("click")
                player++
                setTimeout(() => {
                    provera(o, "O")
                }, 5)
            }
        }
    }
}

function provera(a, b) {
    if (a[0].classList.contains('click')) {
        if (a[1].classList.contains('click')) {
            if (a[2].classList.contains('click')) {
                win.classList.add('pobednik')
                win.innerHTML = "pobednik je " + b;
            }
        }
    } else if (a[3].classList.contains('click')) {
        if (a[4].classList.contains('click')) {
            if (a[5].classList.contains('click')) {
                win.classList.add('pobednik')
                win.innerHTML = "pobednik je " + b;
            }
        }
    } else if (a[6].classList.contains('click')) {
        if (a[7].classList.contains('click')) {
            if (a[8].classList.contains('click')) {
                win.classList.add('pobednik')
                win.innerHTML = "pobednik je " + b;
            }
        }

    } else if (a[0].classList.contains('click')) {
        if (a[3].classList.contains('click')) {
            if (a[6].classList.contains('click')) {
                win.classList.add('pobednik')
                win.innerHTML = "pobednik je " + b;
            }
        }
    } else if (a[1].classList.contains('click')) {
        if (a[4].classList.contains('click')) {
            if (a[7].classList.contains('click')) {
                win.classList.add('pobednik')
                win.innerHTML = "pobednik je " + b;
            }
        }
    } else if (a[2].classList.contains('click')) {
        if (a[5].classList.contains('click')) {
            if (a[8].classList.contains('click')) {
                win.classList.add('pobednik')
                win.innerHTML = "pobednik je " + b;
            }
        }
    } else if (a[0].classList.contains('click')) {
        if (a[4].classList.contains('click')) {
            if (a[8].classList.contains('click')) {
                win.classList.add('pobednik')
                win.innerHTML = "pobednik je " + b;
            }
        }
    } else if (a[2].classList.contains('click')) {
        if (a[4].classList.contains('click')) {
            if (a[6].classList.contains('click')) {
                win.classList.add('pobednik')
                win.innerHTML = "pobednik je " + b;
            }
        }
    }
}