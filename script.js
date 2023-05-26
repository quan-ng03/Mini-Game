const games = document.querySelectorAll('.game');

homeFunction();

function homeFunction() {
  games.forEach((game) => game.addEventListener('click', startGame));
}

function startGame() {
  const gameNums = this.getAttribute('gameNum');
  if (gameNums == 1) {
    document.body.style.cursor = 'wait';
    setTimeout(function () {
      window.location.href = './ttt.html';
    }, 3000);
    document.body.style.cursor = 'wait';
    window.onload = function () {
      document.body.style.cursor = 'default';
    };
  } else if (gameNums == 2) {
    document.body.style.cursor = 'wait';
    setTimeout(function () {
      window.location.href = './ttt.html';
    }, 3000);
    document.body.style.cursor = 'wait';
    window.onload = function () {
      document.body.style.cursor = 'default';
    };
  }
}
