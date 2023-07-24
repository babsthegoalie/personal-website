// The haiku to be displayed
const haiku = `seeing it anew,
solving problems makes my day,
design is logic.`;

// Function to split the haiku into lines and display them on the page
function displayHaiku() {
  // Split the haiku into lines using line breaks as the delimiter
  const lines = haiku.split('\n');

  // Get the container element to display the lines
  const container = document.getElementById('haikuContainer');

  // Loop through the lines and add them to the container
  lines.forEach(line => {
    const lineElement = document.createElement('p');
    lineElement.textContent = line;
    container.appendChild(lineElement);
  });
}

// Call the displayHaiku function when the page finishes loading
window.onload = displayHaiku;



// Get the current year
const currentYear = new Date().getFullYear();

// Text to be displayed before the current year
const beforeText = "© ";

// Text to be displayed after the current year
const afterText = " Barbara Kondracki";

// Concatenate the text and the current year
const displayText = beforeText + currentYear + afterText;

// Display the result on the web page
const outputDiv = document.getElementById("year");
textContent = displayText;
