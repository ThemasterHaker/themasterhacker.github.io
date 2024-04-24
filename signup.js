// Function to check if a username already exists
function usernameExists(username) {
    return registeredUsernames.includes(username);
}

function signup(event) {
    event.preventDefault(); // Prevent form submission
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform basic validation
    if (email.trim() === '' || username.trim() === '' || password.trim() === '') {
        alert("Please fill in all fields.");
        return;
    }

    // Check if the username already exists
    if (usernameExists(username)) {
        alert("Username already exists. Please choose a different one.");
        return;
    }

    // For demonstration, just log the email, username, and password
    console.log("Email:", email);
    console.log("Username:", username);
    console.log("Password:", password);

    // Save the username to local storage
    saveUsername(username);

    // Here you can perform AJAX request to send the data to the server
    // and handle the response accordingly
}

// Function to save a username to local storage
function saveUsername(username) {
    // Retrieve existing usernames from local storage
    var existingUsernames = JSON.parse(localStorage.getItem("registeredUsernames")) || [];

    // Add the new username to the array
    existingUsernames.push(username);

    // Save the updated array back to local storage
    localStorage.setItem("registeredUsernames", JSON.stringify(existingUsernames));
}

// Function to retrieve registered usernames from local storage
function getRegisteredUsernames() {
    return JSON.parse(localStorage.getItem("registeredUsernames")) || [];
}

// Load registered usernames from local storage when the page loads
var registeredUsernames = getRegisteredUsernames();
