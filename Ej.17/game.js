const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Score"),
};
const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Score"),
};

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#maxPoints");
let winningScore;
let isGameOver = false;

window.addEventListener("load", function () {
  winningScore = parseInt(winningScoreSelect.value);
  isGameOver = false;
});

p1.button.addEventListener("click", function () {
  updateScores(p1, p2);
});

p2.button.addEventListener("click", function () {
  updateScores(p2, p1);
});

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;

    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("won");
      opponent.display.classList.add("lost");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);
function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("won", "lost");
    p.button.disabled = false;
  }
}

/*Calificación
	20-Al presionar los botones de los jugadores aumenta el contador.
	20-Se termina el juego al llegar a las rondas seleccionadas.
	20-Al ganar se agregan las clases a los jugadores y se bloquean los botones
	20-Al reiniciar se cambian los textos y se habilitan los botones
	20-Si se cambian las rondas se reinicia el juego y el puntaje necesario para ganar
*/
