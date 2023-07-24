const haikuLines = [
    "An old silent pond...",
    "A frog jumps into the pond—",
    "Splash! Silence again."
];

const haikuContainer = document.getElementById('haiku');
const lineDelay = 2000; // Delay between displaying each line in milliseconds

function displayHaikuLine(index) {
    if (index >= haikuLines.length) {
        return; // Haiku is complete
    }

    haikuContainer.textContent = haikuLines[index];
    setTimeout(() => displayHaikuLine(index + 1), lineDelay);
}

displayHaikuLine(0); // Start displaying the haiku from the first line

In this example, we have an array haikuLines containing the three lines of the haiku. The JavaScript code will iterate through the lines and display them one by one with a delay of 2 seconds (2000 milliseconds) between each line. The lines will be displayed inside the <div> element with the id "haiku" in the HTML file.

When you open the index.html file in your web browser, you will see the haiku being displayed line by line on the page.
