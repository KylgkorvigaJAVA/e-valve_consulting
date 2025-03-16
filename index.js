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
        var loginError = document.getElementById("loginError");
        loginError.textContent = "Invalid username or password.";
        loginError.style.display = "block";
    }
}

function updateDateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    document.getElementById('time').textContent = timeString;
}

setInterval(updateDateTime, 1000);
updateDateTime();

