form = document.getElementById("form");
submit = document.getElementById("submit");
username = document.getElementById("username");
password = document.getElementById("password")
form.onsubmit = (e) => {
    if (password.value.length <= 5) {
        alert("UNESI DUZU SIFRU")
    } else {
        alert(username.value)

    }
}
registerForm = document.getElementById("registerForm");
submit2 = document.getElementById("submit2");
username2 = document.getElementById("username2");
password2 = document.getElementById("password2")
password3 = document.getElementById("password3")
registerForm.onsubmit = () => {
    if (password2.value.length <= 5) {
        alert("UNESI DUZU SIFRU")
    } else if (password2.value !== password3.value) {
        alert("confirm password")
    } else {
        alert("THANK Z=YOU OFR REGISTERING")
    }
}