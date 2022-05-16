window.addEventListener("keydown", (a) => {
    const audio = document.querySelector(`audio[data-key="${a.keyCode}"]`);
    // console.log(a.keyCode);
    // console.log(audio);
    const keys = document.querySelector(`.keys[data-key="${a.keyCode}"]`);
    audio.currentTime = 0;
    audio.play()
    if (!audio) return
    keys.classList.add("playing")
    setTimeout((a) => {
        keys.classList.remove("playing")
    }, 50)
})