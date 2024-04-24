function login(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform basic validation
    if (username.trim() === '' || password.trim() === '') {
        alert("Please fill in all fields.");
        return;
    }

    // For demonstration, let's assume the correct username and password
    var correctUsername = "exampleUser";
    var correctPassword = "examplePassword";

    // Check if the entered username and password are correct
    if (username === correctUsername && password === correctPassword) {
        // Redirect to the dashboard page
        window.location.href = "dashboard.html";
    } else {
        alert("Incorrect username or password. Please try again.");
    }
}
