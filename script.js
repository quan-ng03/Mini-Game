const games = document.querySelectorAll('.game');

homeFunction();

function homeFunction() {
  games.forEach((game) => game.addEventListener('click', startGame));
}

function startGame() {
  const gameNums = this.getAttribute('gameNum');
  if (gameNums == 1) {
    setTimeout(function () {
      window.location.href = './ttt.html';
    }, 3000);
  } else if (gameNums == 2) {
    setTimeout(function () {
      window.location.href = './rps.html';
    }, 3000);
  }
}
