var browserModal = document.getElementById("browserModal");
var openBrowser = document.getElementById("openBrowser");
var closeBrowser = document.getElementById("closeBrowser");
var clientModal = document.getElementById("clientModal");
var closeClientModal = document.getElementById("closeClientModal");

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

closeClientModal.onclick = function () {
    clientModal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == clientModal) {
        clientModal.style.display = "none";
    }
}

var cards = document.querySelectorAll(".card");
cards.forEach(function (card) {
    card.onclick = function () {
        var clientName = card.getAttribute("data-client");
        var clientImage = card.getAttribute("data-image");
        document.getElementById("clientModalTitle").textContent = clientName;
        document.getElementById("clientModalBody").innerHTML = `
            <p>Details for ${clientName}</p>
            <img src="${clientImage}" class="img-fluid" alt="${clientName}">
        `;
        clientModal.style.display = "block";
    }
});

function updateDateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    document.getElementById('time').textContent = timeString;
}

setInterval(updateDateTime, 1000);
updateDateTime();