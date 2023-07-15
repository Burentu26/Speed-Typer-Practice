document.addEventListener('DOMContentLoaded', function () {
  var quote = document.getElementById('quote');
  var input = document.getElementById('input');
  var feedback = document.getElementById('feedback');
  var startButton = document.getElementById('startButton');
  var timer = document.getElementById('timer');

  var wordList = [,
    'ipsum',
    'dolor',
    'sit',
    'amet',
    'consectetur',
    'adipiscing',
    'elit',
    // Add more words here
  ];

  startButton.addEventListener('click', startGame);

  function startGame() {
    input.value = '';
    input.focus();
    feedback.textContent = '';
    startButton.removeEventListener('click', startGame);
    input.addEventListener('input', checkInput);

    var paragraph = generateParagraph();
    quote.textContent = paragraph;

    var startTime = Date.now();

    var timerInterval = setInterval(function () {
      var elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      timer.textContent = elapsedTime + 's';
    }, 1000);

    function checkInput() {
      var typedText = input.value;
      var originalText = paragraph;

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

  function generateParagraph() {
    var paragraph = '';
    for (var i = 0; i < 30; i++) { // Change the number to determine the paragraph length
      var randomIndex = Math.floor(Math.random() * wordList.length);
      var word = wordList[randomIndex];
      paragraph += word + ' ';
    }
    return paragraph.trim();
  }
});
