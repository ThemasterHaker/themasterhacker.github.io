// Function to load progress from local storage
function loadProgress() {
    const totalBitcoinElement = document.getElementById('total-bitcoin');
    const miningSpeedElement = document.getElementById('mining-speed');
    const bitcoinBalanceElement = document.getElementById('bitcoin-balance');

    // Load total Bitcoin mined, mining speed, and Bitcoin balance from local storage
    const totalBitcoin = parseFloat(localStorage.getItem('totalBitcoin')) || 0;
    const miningSpeed = parseInt(localStorage.getItem('miningSpeed')) || 1;
    const bitcoinBalance = parseFloat(localStorage.getItem('bitcoinBalance')) || 0;

    // Display total Bitcoin mined, mining speed, and Bitcoin balance on the page
    totalBitcoinElement.textContent = totalBitcoin.toFixed(2);
    miningSpeedElement.textContent = miningSpeed;
    bitcoinBalanceElement.textContent = bitcoinBalance.toFixed(2);
}

// Call the function to load progress when the page loads
loadProgress();
