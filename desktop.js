var browserModal = document.getElementById("browserModal");
var openBrowser = document.getElementById("openBrowser");
var closeBrowser = document.getElementById("closeBrowser");
var clientModal = document.getElementById("clientModal");
var closeClientModal = document.getElementById("closeClientModal");

// Jägi lahentatud kliendid
var completedClients = {};

// Kliendi selgituste objektid
var clientExplanations = {
    "Viktor": "Tavaliselt helistaja ütleb inimesele, et tema või ta raha on kuidagi ohus ja tegutseda on vaja kiiresti. Seejärel küsib ta inimeselt tema Smart ID, mobiil-ID, internetipanga koode või muud isiklikku infot. Tihti palutakse inimesel ka oma nutiseadmesse laadida programmid AnyDesk või TeamViewer. Tegelikult on helistajaks kelm, kes sedasi saab inimeselt kätte info, millega on võimalik tema pangakontolt raha varastada.",
    "Kevin": "Suurte võitude korral on tehtud võltsleht, millel on vähe jälgijaid ja postitused said alguse kaks päeva tagasi. Lehel lubatakse millegi hinnalise eseme või raha võitu. Tegelikult saadavad kelmid lingi, kuhu suunatakse inimene oma andmeid sisestama. Peale seda teevad kelmid pangakontod tühjaks.",
    "Mari": "E-kiri tundub usaldusväärne, sest on tulnud mõnelt inimeselt või ettevõttelt, kellelt ollakse harjunud e-kirju saama. Tegelikult on kirja saatnud kelm, kes on loonud liba-e-posti aadressi ja makse läheb kelmide pangakontole.",
    "Pets": "Inimesele tuleb e-kiri, kus teda süüdistatakse mõnes tõsises kuriteos. Levinum süüdistus on, et inimene vaatas lastega seotud pornograafilist videot. Kiri on justkui saadetud politsei, ministeeriumi, Europoli või mõne teiste riigiasutuse poolt. Tegelikult on tegu kelmidega, kes tahavad, et inimene sellele kirjale vastaks. Kui inimene seda teeb, siis veenavad nad inimest kandma neile raha, et karistusest pääseda. Tegemist on petukirjadega ja nende sisu ei vasta tõele.",
    "Reelika": "E-kiri tundub usaldusväärne, sest on tulnud mõnelt inimeselt või ettevõttelt, kellelt ollakse harjunud e-kirju saama. Tegelikult on kirja saatnud kelm, kes on loonud liba-e-posti aadressi ja makse läheb kelmide pangakontole.",
    "Malle": "Kõige salakavalam kelmuse liik, sest kelm on väga sõbralik, viisakas, teeb komplimente - nii püüab ta ohvrit endasse armuma saada. Tutvustab end sageli välismaise sõduri, laevakapteni või arstina, kes on kuidagi seotud Eestiga. Sageli on ta lesk või on muu kurb elusaatus. Tema nimi ja fotod tunduvad päris, kuid need on varastatud. Raha hakkab kelm küsima ca 2-4 nädala pärast, kui tal juhtub mõni ootamatu kuid usutav eriolukord. Raha küsimine kordub seni kuni ohver mõistab, et on sattunud kelmi ohvriks. Ohvriteks valivad kelmid kõige sagedamini 40+ vanuses naisi.",
    "Taavi": "Kõige sagedamini müüakse tooteid, mille hind on tavalisest palju odavam. Müüjaks võib olla nii internetipood kui ka eraisik. Kui inimene on müüjale makse ära teinud, siis müüja kaob. Ostetud toodet inimene kätte ei saa ja makstud rahast jääb ka ilma.",
    "Madis": "Inimene paneb mõne oma eseme müüki Facebooki Marketplace-i, Okidoki-sse või mujale müügiportaali. Talle kirjutab inimene, kes soovib seda eset osta. Ostja räägib, et tal on oma kuller, kes tuleb isiklikult kohale ja müüja ei pea midagi muud tegema, kui ainult andma oma telefoninumbri, e-posti aadressi ja sisestama ühele veebilehele oma pangakaardi andmed. Mõnel juhul küsib ostja ka ettemakset, et kindlustada kauba kättesaamine. Tegelikult on eseme ostja kelm, kes tahab müüjalt kätte saada tema isiklikud andmed, et nendega toime panna pettusi. Asja ostmisest ta päriselt huvitatud ei ole."
};

function toggleBodyBlur(show) {
}

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
    if (event.target == clientModal) {
        clientModal.style.display = "none";
    }
}

closeClientModal.onclick = function () {
    clientModal.style.display = "none";
    browserModal.style.display = "block";
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

        document.getElementById("clientModalTitle").textContent = clientName;

        var answers = [
            { text: optionRight, isCorrect: true },
            { text: optionWrong1, isCorrect: false },
            { text: optionWrong2, isCorrect: false }
        ];

        shuffleArray(answers);

        let correctOption = '';
        if (answers[0].isCorrect) correctOption = 'A';
        else if (answers[1].isCorrect) correctOption = 'B';
        else if (answers[2].isCorrect) correctOption = 'C';

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
            <!-- Modified: Moved the answer popup outside of the content column, making it overlay the entire modal -->
            <div id="answerPopup" class="answer-popup" style="display: none; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 80%; max-height: 80%; overflow-y: auto; z-index: 1000; box-shadow: 0 0 10px rgba(0,0,0,0.5);">
                <div id="selectedAnswers" class="selected-answers"></div>
                <div id="explanation" class="explanation">
                    <h4>Selgitus:</h4>
                    <p>${clientExplanations[clientName] || "Selgitus puudub."}</p>
                </div>
                <button id="nextClient" class="btn btn-success">Järgmine klient</button>
            </div>
        `;

        var isFirstAttempt = true;
        var hasAnswered = false;

        var optionsList = document.querySelectorAll("#optionsList .list-group-item");
        optionsList.forEach(function (option) {
            option.onclick = function () {
                if (!hasAnswered) {
                    hasAnswered = true;

                    // Märgi klient tehtuks
                    completedClients[clientName] = true;
                    
                    // Lisa "Tehtud" märgis
                    var clientCard = document.querySelector(`.card[data-client="${clientName}"]`);
                    if (clientCard && !clientCard.querySelector('.completed-label')) {
                        var completedLabel = document.createElement('div');
                        completedLabel.className = 'completed-label';
                        completedLabel.textContent = 'Tehtud';
                        clientCard.style.position = 'relative';
                        clientCard.appendChild(completedLabel);
                    }

                    // Create the answers popup content
                    var selectedAnswersHTML = "<div class='vastused'><h4>Vastused:</h4>";
                    
                    // Determine which option was selected and format all options
                    optionsList.forEach(function (opt) {
                        var isSelected = (opt === option);
                        var isCorrect = (opt.getAttribute('data-correct') === "true");
                        
                        // Format this answer for the popup
                        var answerClass = isCorrect ? "correct-answer" : "incorrect-answer";
                        var selectedClass = isSelected ? "selected-answer" : "";
                        selectedAnswersHTML += `<div class="${answerClass} ${selectedClass}">${opt.textContent}</div>`;
                        
                        // Also update the original options list
                        if (isCorrect) {
                            opt.style.backgroundColor = "#4CAF50";
                            opt.style.color = "white";
                        } else if (isSelected) {
                            opt.style.backgroundColor = "#F44336";
                            opt.style.color = "white";
                        }
                    });
                    
                    selectedAnswersHTML += "</div>";
                    
                    // Show the popup with the selected answers and explanation
                    document.getElementById("selectedAnswers").innerHTML = selectedAnswersHTML;
                    document.getElementById("answerPopup").style.display = "block";
                    
                    // Add semi-transparent overlay behind the popup
                    var overlay = document.createElement('div');
                    overlay.id = 'answerOverlay';
                    overlay.style.position = 'absolute';
                    overlay.style.top = '0';
                    overlay.style.left = '0';
                    overlay.style.right = '0';
                    overlay.style.bottom = '0';
                    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
                    overlay.style.zIndex = '999';
                    document.getElementById('clientModal').appendChild(overlay);
                    
                    // Make original options non-clickable
                    optionsList.forEach(function (opt) {
                        opt.style.pointerEvents = "none";
                    });

                    // Set up the Next Client button
                    document.getElementById("nextClient").onclick = function() {
                        // Remove the overlay
                        var overlay = document.getElementById('answerOverlay');
                        if (overlay) {
                            overlay.parentNode.removeChild(overlay);
                        }
                        clientModal.style.display = "none";
                        browserModal.style.display = "block";
                    };
                }
            };
        });

        browserModal.style.display = "none";
        clientModal.style.display = "block";
    }
});

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