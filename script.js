var modal = document.getElementById("loginModal");
var browserModal = document.getElementById("browserModal");
var openBrowser = document.getElementById("openBrowser");
var closeBrowser = document.getElementById("closeBrowser");

openBrowser.onclick = function () {
    browserModal.style.display = "block";
}

closeBrowser.onclick = function () {
    browserModal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == browserModal) {
        browserModal.style.display = "none";
    }
}

window.onload = function () {
    modal.style.display = "block";
}

function updateDateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    document.getElementById('time').textContent = timeString;
}

setInterval(updateDateTime, 1000);
updateDateTime();

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
/* JS for browser */
