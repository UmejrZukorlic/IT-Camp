// Kako pronaci plindrom
string = prompt('Enter a string or number: ');

const len = string.length;

for (let i = 0; i < len / 2; i++) {

    if (string[i] !== string[len - 1 - i]) {
        alert('Ovo nije palindrom');
    } else {
        alert('Ovo je palindrom');
    }
}