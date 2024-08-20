// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display'); // Get the display element
    const buttons = document.querySelectorAll('button'); // Get all buttons
    let currentInput = ''; // Stores the current input
    let operator = ''; // Stores the selected operator

    // Function to update the display
    function updateDisplay(value) {
        display.innerText = value;
    }

    // Function to handle button clicks
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            let buttonText = this.innerText; // Get the text of the clicked button
            if(buttonText=== 'x') buttonText = '*';
            if (buttonText === 'RESET') {
                currentInput = ''; // Clear the input
                updateDisplay('0'); // Reset display to 0
            } else if (buttonText === '=') {
                try {
                    currentInput = eval(currentInput); // Evaluate the expression
                    updateDisplay(currentInput); // Display the result
                } catch {
                    updateDisplay('Error'); // If there's an error, display 'Error'
                }
            } else if (buttonText === 'DEL') {
                currentInput = currentInput.slice(0, -1); // Remove the last character
                updateDisplay(currentInput || '0'); // Update display or show 0 if empty
            } else {
                currentInput += buttonText; // Add the button's text to the input
                updateDisplay(currentInput); // Update the display
            }
        });
    });
});
