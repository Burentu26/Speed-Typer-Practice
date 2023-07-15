document.addEventListener('DOMContentLoaded', function () {
  var quote = document.getElementById('quote');
  var input = document.getElementById('input');
  var feedback = document.getElementById('feedback');
  var startButton = document.getElementById('startButton');
  var timer = document.getElementById('timer');

  startButton.addEventListener('click', startGame);

  function startGame() {
    input.value = '';
    input.focus();
    feedback.textContent = '';
    startButton.removeEventListener('click', startGame);
    input.addEventListener('input', checkInput);

    var startTime = Date.now();

    var timerInterval = setInterval(function () {
      var elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      timer.textContent = elapsedTime + 's';
    }, 1000);

    function checkInput() {
      var typedText = input.value;
      var originalText = quote.textContent;

      if (typedText === originalText) {
        feedback.textContent = 'Congratulations! You typed it correctly.';
        input.removeEventListener('input', checkInput);
        clearInterval(timerInterval);
        startButton.addEventListener('click', startGame);
      } else {
        if (typedText === originalText.substring(0, typedText.length)) {
          feedback.textContent = 'Keep going!';
        } else {
          feedback.textContent = 'Oops! Make sure to type it correctly.';
        }
      }
    }
  }
});
