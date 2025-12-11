console.log("JS chargé !");

const form = document.getElementById("calcForm");
const errorBox = document.getElementById("error");
const historyList = document.getElementById("historyList");
const resultValue = document.getElementById("resultValue");

let history = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    errorBox.textContent = "";

    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let op = document.getElementById("operation").value;

    if (a === "" || b === "") {
        errorBox.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    a = parseFloat(a);
    b = parseFloat(b);

    if (op === "/" && b === 0) {
        errorBox.textContent = "Erreur : division par zéro interdite.";
        return;
    }

    let result;
    switch (op) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = a / b; break;
    }

    // Affichage direct dans la zone du résultat
    resultValue.textContent = result;

    // Ajout à l'historique
    const entry = `${a} ${op} ${b} = ${result}`;
    history.push(entry);

    updateHistory();
});

function updateHistory() {
    historyList.innerHTML = "";

    history.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    });
}

