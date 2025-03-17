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
        var clientDescription = card.getAttribute("data-description");
        var clientProblem = card.getAttribute("data-problem");
        var clientOptions = card.getAttribute("data-options").split('|');
        document.getElementById("clientModalTitle").textContent = clientName;
        document.getElementById("clientModalBody").innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <img src="${clientImage}" class="img-fluid rounded" alt="${clientName}">
                    </div>
                    <div class="col-md-8">
                        <h1>${clientName} - ${clientDescription}</h1><br><br>
                        <h3>Probleem:</h3>
                        <p>${clientProblem}</p><br>
                        <h3>Vastused:</h3>
                        <ul class="list-group">
                            <li class="list-group-item">${clientOptions[0]}</li>
                            <li class="list-group-item">${clientOptions[1]}</li>
                            <li class="list-group-item">${clientOptions[2]}</li>
                        </ul>
                    </div>
                </div>
            </div>
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