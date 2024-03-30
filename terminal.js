// Function to handle the "Run Code" button click event
function runCode() {
    // Clear previous output
    var terminalOutput = document.getElementById("terminal-output");
    terminalOutput.innerHTML = "";

    // Get the code entered by the user from the textarea
    var code = document.getElementById("code-input").value;
    
    // Execute the code using the Bussin interpreter or compiler
    // Assuming executeCode function is defined in interpreter.js
    var output = executeCode(code);

    // Display the output in the terminal
    var outputParagraph = document.createElement("p");
    outputParagraph.textContent = output;
    terminalOutput.appendChild(outputParagraph);
}
