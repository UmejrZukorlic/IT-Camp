function capitalizeFirstLetter(string) {
    capitalized = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    return capitalized;
}
unos = prompt("Napisi neki string");
result = capitalizeFirstLetter(unos);
console.log(result);