function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
result = range(9 * 60, 17 * 60);
unosH = parseInt(prompt("Unesi sate"))
unosM = parseInt(prompt("Unesi minute"))
unosH *= 60
    // console.log(unosH);
    // console.log(unosM);
vrijeme = unosH + unosM
if (result.includes(vrijeme) == true) {
    console.log("Vas mail je stigao");
} else {
    console.log("Vas mail stize tek sutra");
}