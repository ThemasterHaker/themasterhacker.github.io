// Function to mine Bitcoin
function mine() {
    totalBitcoin += miningSpeed;
    updateTotalBitcoin();
    saveProgress();
}

// Function to update the total Bitcoin mined on the page
function updateTotalBitcoin() {
    const totalBitcoinElement = document.getElementById('total-bitcoin');
    totalBitcoinElement.textContent = totalBitcoin;
}

// Function to update the mining speed on the page
function updateMiningSpeed(speed) {
    const miningSpeedElement = document.getElementById('mining-speed');
    miningSpeedElement.textContent = speed;
}

// Function to update the mining speed based on purchased items
function updateMiningSpeedFromItems() {
    // Placeholder function to update mining speed based on purchased items
    // For demonstration purposes, let's just increase mining speed by 1 for each item purchased
    miningSpeed += 1;
    updateMiningSpeed(miningSpeed);
}

// Function to save progress to local storage
function saveProgress() {
    localStorage.setItem('totalBitcoin', totalBitcoin);
    localStorage.setItem('miningSpeed', miningSpeed);
}

// Function to load progress from local storage
function loadProgress() {
    totalBitcoin = parseInt(localStorage.getItem('totalBitcoin')) || 0;
    miningSpeed = parseInt(localStorage.getItem('miningSpeed')) || 1;
    updateTotalBitcoin();
    updateMiningSpeed(miningSpeed);
}

// Call the function to load progress when the page loads
loadProgress();
