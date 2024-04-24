// Initial Bitcoin amount
let bitcoinAmount = 0;

// Product data (name, description, and cost)
const products = [
    { name: "Bitcoin Miner", description: "Increases mining speed by 10%", cost: 10 },
    { name: "GPU Mining Rig", description: "Increases mining speed by 20%", cost: 20 },
    { name: "ASIC Miner", description: "Increases mining speed by 30%", cost: 30 },
    { name: "Mining Farm", description: "Increases mining speed by 40%", cost: 40 },
    { name: "Quantum Computer", description: "Increases mining speed by 50%", cost: 50 },
    { name: "Cloud Mining Contract", description: "Increases mining speed by 15%", cost: 15 },
    { name: "Solar-Powered Miner", description: "Increases mining speed by 25%", cost: 25 },
    { name: "Water-Cooled Miner", description: "Increases mining speed by 35%", cost: 35 },
    { name: "AI Mining Assistant", description: "Increases mining speed by 45%", cost: 45 },
    { name: "Supercomputer Cluster", description: "Increases mining speed by 55%", cost: 55 },
    { name: "FPGA Miner", description: "Increases mining speed by 12%", cost: 12 },
    { name: "Mining Pool Share", description: "Increases mining speed by 22%", cost: 22 },
    { name: "Quantum Entanglement Miner", description: "Increases mining speed by 32%", cost: 32 },
    { name: "Hydroelectric Miner", description: "Increases mining speed by 42%", cost: 42 },
    { name: "AI-Optimized Miner", description: "Increases mining speed by 52%", cost: 52 },
    { name: "Diamond-Tipped Pickaxe", description: "Increases mining speed by 18%", cost: 18 },
    { name: "Rocket-Powered Miner", description: "Increases mining speed by 28%", cost: 28 },
    { name: "Liquid Nitrogen Cooling System", description: "Increases mining speed by 38%", cost: 38 },
    { name: "Quantum Tunneling Miner", description: "Increases mining speed by 48%", cost: 48 },
    { name: "AI-Powered Cooling System", description: "Increases mining speed by 58%", cost: 58 },
    { name: "Energy-Efficient Miner", description: "Increases mining speed by 14%", cost: 14 },
    { name: "Deep Learning Algorithm Miner", description: "Increases mining speed by 24%", cost: 24 },
    { name: "Geothermal Miner", description: "Increases mining speed by 34%", cost: 34 },
    { name: "Quantum Encryption Miner", description: "Increases mining speed by 44%", cost: 44 },
    { name: "AI-Based Optimization Software", description: "Increases mining speed by 54%", cost: 54 },
    { name: "Renewable Energy Credits", description: "Increases mining speed by 20%", cost: 20 },
    { name: "Neural Network-Assisted Miner", description: "Increases mining speed by 30%", cost: 30 },
    { name: "Wind-Powered Miner", description: "Increases mining speed by 40%", cost: 40 },
    { name: "Quantum-Secure Blockchain Protocol", description: "Increases mining speed by 50%", cost: 50 },
    // Add more products here...
];

// Function to generate product items dynamically
function generateProductItems() {
    const productList = document.getElementById('product-list');

    products.forEach((product, index) => {
        const itemHTML = `
            <div class="product" id="item${index + 1}" data-cost="${product.cost}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>Cost: ${product.cost} Bitcoin</p>
                <button onclick="buyItem('item${index + 1}')">Buy</button>
            </div>
        `;
        productList.insertAdjacentHTML('beforeend', itemHTML);
    });
}

// Function to buy an item
function buyItem(itemId) {
    const item = document.getElementById(itemId);
    const cost = parseInt(item.getAttribute('data-cost'));

    // Check if the user has enough Bitcoin to buy the item
    if (bitcoinAmount >= cost) {
        // Deduct the cost from the Bitcoin amount
        bitcoinAmount -= cost;

        // Update the mining speed (for demonstration, just log the message)
        console.log(`You bought ${item.querySelector('h2').textContent}. Mining speed increased!`);

        // Update the Bitcoin amount display (for demonstration, just log the message)
        console.log(`Bitcoin amount: ${bitcoinAmount}`);

        // You can add code here to update the mining speed and Bitcoin amount in your game
    } else {
        console.log("Not enough Bitcoin to buy this item.");
    }
}

// Call the function to generate product items when the page loads
generateProductItems();
