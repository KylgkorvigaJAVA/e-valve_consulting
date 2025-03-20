var browserModal = document.getElementById("browserModal");
var openBrowser = document.getElementById("openBrowser");
var closeBrowser = document.getElementById("closeBrowser");
var clientModal = document.getElementById("clientModal");
var closeClientModal = document.getElementById("closeClientModal");
var completedClients = []; // Array to track completed clients

openBrowser.onclick = function () {
    browserModal.style.display = "block";
}

closeBrowser.onclick = function () {
    browserModal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == browserModal) {
        browserModal.style.display = "none";
    } else if (event.target == clientModal) {
        clientModal.style.display = "none";
    }
}

closeClientModal.onclick = function () {
    clientModal.style.display = "none";
}

var cards = document.querySelectorAll(".card");
cards.forEach(function (card) {
    card.onclick = function () {
        var clientName = card.getAttribute("data-client");
        var clientImage = card.getAttribute("data-image");
        var clientDescription = card.getAttribute("data-description");
        var clientProblem = card.getAttribute("data-problem");
        var optionRight = card.getAttribute("data-option-right");
        var optionWrong1 = card.getAttribute("data-option-wrong1");
        var optionWrong2 = card.getAttribute("data-option-wrong2");
        var explanationText = card.getAttribute("data-explanation");
        var clientId = card.getAttribute("id"); // Make sure each card has a unique ID

        document.getElementById("clientModalTitle").textContent = clientName;

        var answers = [
            { text: optionRight, isCorrect: true },
            { text: optionWrong1, isCorrect: false },
            { text: optionWrong2, isCorrect: false }
        ];

        shuffleArray(answers);

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
                        <ul class="list-group" id="optionsList">
                            <li class="list-group-item" data-option="A" data-correct="${answers[0].isCorrect}">${answers[0].text}</li>
                            <li class="list-group-item" data-option="B" data-correct="${answers[1].isCorrect}">${answers[1].text}</li>
                            <li class="list-group-item" data-option="C" data-correct="${answers[2].isCorrect}">${answers[2].text}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;

        var isFirstAttempt = true;

        var optionsList = document.querySelectorAll("#optionsList .list-group-item");
        optionsList.forEach(function (option) {
            option.onclick = function () {
                if (option.getAttribute('data-correct') === "true") {
                    option.style.backgroundColor = "#4CAF50";
                    option.style.color = "white";

                    if (isFirstAttempt) {
                        optionsList.forEach(function (opt) {
                            if (opt.getAttribute('data-correct') !== "true") {
                                opt.style.backgroundColor = "#F44336";
                                opt.style.color = "white";
                            }
                        });
                    }

                    optionsList.forEach(function (opt) {
                        opt.style.pointerEvents = "none";
                    });

                    showCorrectAnswerPopup(option.textContent, explanationText, card);
                } else {
                    option.style.backgroundColor = "#F44336";
                    option.style.color = "white";

                    isFirstAttempt = false;
                }
            };
        });

        clientModal.style.display = "block";
    }
});

function showCorrectAnswerPopup(answerText, explanationText, clientCard) {
    var popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
        <div class="popup-content">
            <h2>Õige vastus: ${answerText}</h2>
            <p>${explanationText}</p>
            <button id="closePopup">Järgmine klient!</button>
        </div>
    `;

    document.body.appendChild(popup);

    document.getElementById("closePopup").onclick = function () {
        popup.remove();
        clientModal.style.display = "none";
        browserModal.style.display = "block";
        
        // Mark the client as completed
        markClientAsCompleted(clientCard);
    };
}

function markClientAsCompleted(clientCard) {
    // Check if this client is already marked as completed
    if (!clientCard.classList.contains("completed")) {
        // Mark the card as completed
        clientCard.classList.add("completed");
        
        // Add the "Tehtud" label if it doesn't exist
        if (!clientCard.querySelector(".completed-label")) {
            var completedLabel = document.createElement("div");
            completedLabel.classList.add("completed-label");
            completedLabel.textContent = "Tehtud";
            clientCard.appendChild(completedLabel);
        }
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function updateDateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    document.getElementById('time').textContent = timeString;
}

setInterval(updateDateTime, 1000);
updateDateTime();