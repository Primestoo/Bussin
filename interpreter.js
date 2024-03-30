// Function to execute Bussin code
function executeCode(code) {
    try {
        // Use eval to execute the Bussin code
        eval(code);
    } catch (error) {
        // Handle any errors that occur during execution
        console.error("Error executing Bussin code:", error);
        return "Error executing Bussin code: " + error;
    }
}

// Example usage: Execute Bussin code
var userCode = 'yeet("Yoo, Bussin is lit!")'; // Example Bussin code entered by the user
executeCode(userCode); // Execute the Bussin code
