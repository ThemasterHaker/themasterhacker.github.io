// Function to populate the scoreboard table
function populateScoreboard() {
    const scoreboardBody = document.getElementById('scoreboard-body');

    // Clear existing table rows
    scoreboardBody.innerHTML = '';

    // Retrieve user data from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Sort user data based on the amount of Bitcoin each user has
    users.sort((a, b) => b.bitcoin - a.bitcoin);

    // Populate table rows with user data
    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.username}</td>
            <td>${user.bitcoin}</td>
        `;
        scoreboardBody.appendChild(row);
    });
}

// Call the function to populate the scoreboard table when the page loads
populateScoreboard();
