document.addEventListener('DOMContentLoaded', function() {
  const lines = [
    'seeing things anew',
    'solving problems makes my day',
    'design is logic'
  ];

  const textContainer = document.getElementById('text-container');

  function addWordByWordAnimation(textElement, text, delay) {
    const words = text.split(' ');
    let wordIndex = 0;

    function showNextWord() {
      if (wordIndex < words.length) {
        textElement.textContent += words[wordIndex] + ' ';
        wordIndex++;
        setTimeout(showNextWord, delay);
      }
    }

    setTimeout(showNextWord, delay);
  }

  function showLinesOneByOne(lines, delay) {
    lines.forEach((line, index) => {
      const lineElement = document.getElementById(`line${index + 1}`);
      lineElement.classList.remove('hidden');
      setTimeout(() => {
        addWordByWordAnimation(lineElement, line, delay);
      }, delay * index); // Multiply delay by index to create increasing delays for each line
    });
  }

  // Desired delay between each line's animation (in milliseconds)
const delayBetweenLines = 5000; // 5 seconds

  const delayBetweenWords = 100; // Adjust the delay between words here (in milliseconds).
  showLinesOneByOne(lines, delayBetweenWords, delayBetweenLines);
});
