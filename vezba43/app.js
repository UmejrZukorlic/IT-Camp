sClick = (tag, color) => {
    b = document.getElementsByTagName(tag)
    for (y of b) {
        y.style.backgroundColor = color
    }
}