let games = [];
let cpus = [];
let gpus = [];

async function loadData() {

    games = await fetch("data/games.json")
    .then(r => r.json());

    cpus = await fetch("data/cpus.json")
    .then(r => r.json());

    gpus = await fetch("data/gpus.json")
    .then(r => r.json());

    fillGames();
    fillCPUs();
    fillGPUs();
}

function fillGames() {

    const select =
    document.getElementById("game");

    games.forEach(game => {

        select.innerHTML += `
        <option value="${game.name}">
            ${game.name}
        </option>`;
    });
}

function fillCPUs() {

    const select =
    document.getElementById("cpu");

    cpus.forEach(cpu => {

        select.innerHTML += `
        <option value="${cpu.score}">
            ${cpu.name}
        </option>`;
    });
}

function fillGPUs() {

    const select =
    document.getElementById("gpu");

    gpus.forEach(gpu => {

        select.innerHTML += `
        <option value="${gpu.score}">
            ${gpu.name}
        </option>`;
    });
}

function checkGame() {

    document.getElementById("result")
    .innerHTML =
    "✅ الفحص يعمل بنجاح";
}

loadData();
