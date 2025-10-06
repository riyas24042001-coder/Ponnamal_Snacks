// Toggle selection of a product card
function toggleSelection(card) {
    card.classList.toggle("selected");

    // Show/hide flavor options if they exist
    const flavorsDiv = card.querySelector(".flavors");
    if(flavorsDiv) {
        flavorsDiv.style.display = card.classList.contains("selected") ? "block" : "none";
    }
}

// Show all selected products and their flavors
function showSelection() {
    const selectedCards = document.querySelectorAll(".product-card.selected");
    const selected = [];
    
    selectedCards.forEach(card => {
        const productName = card.querySelector("p").textContent;
        const flavorSelect = card.querySelector("select");
        if(flavorSelect) {
            selected.push(`${productName} (${flavorSelect.value})`);
        } else {
            selected.push(productName);
        }
    });

    const output = document.getElementById("selectedProducts");
    if(selected.length > 0) {
        output.textContent = "You selected: " + selected.join(", ");
    } else {
        output.textContent = "No snacks selected.";
    }
}
