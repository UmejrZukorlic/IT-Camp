happy_nums = []

new_num = 0

start = 4

pocetniBroj = 1

// limit = 5
limit = parseInt(prompt('Unesite koliko happy numbera zelite da dobijete:'))

while (true) {
    if (happy_nums.length === limit) {
        break
    }
    num = pocetniBroj
    while (true) {
        for (j = 0; j < String(num).length; j++) {
            new_num += parseInt(String(num)[j]) ** 2
        }
        if (new_num === 1) {
            happy_nums.push(pocetniBroj)
            new_num = 0
            break
        } else if (new_num === start) {
            new_num = 0
            break
        }
        num = new_num
        new_num = 0
    }
    pocetniBroj++
}

console.log(happy_nums)