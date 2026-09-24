// Save this file as "script.js"

// Wait until the HTML document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    
    // Find the button using its ID
    const alertButton = document.getElementById("alertButton");

    // Listen for a click on the button
    alertButton.addEventListener("click", () => {
        alert("Hello! You clicked the interactive button.");
    });

});
