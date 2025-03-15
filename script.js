var modal = document.getElementById("loginModal");

window.onload = function () {
    modal.style.display = "block";
}

document.getElementById("loginForm").onsubmit = function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var correctUsername = "user007";
    var correctPassword = "qwerty123";

    if (username === correctUsername && password === correctPassword) {
        window.location.href = "desktop.html";
    } else {
        alert("Invalid username or password.");
    }
}