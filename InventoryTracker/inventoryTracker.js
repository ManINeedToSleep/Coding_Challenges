// Sample Warframe Inventory Data
let inventory = [
    { id: 'ferrite', name: 'Ferrite', quantity: 5000 },
    { id: 'polymer', name: 'Polymer Bundle', quantity: 200 },
    { id: 'orokin', name: 'Orokin Cell', quantity: 15 },
    { id: 'neural', name: 'Neural Sensors', quantity: 50 },
    { id: 'nano', name: 'Nano Spores', quantity: 1000 },
    { id: 'chroma', name: 'Chroma Prime Blueprint', quantity: 1 },
    { id: 'forma', name: 'Forma Blueprint', quantity: 5 },
    { id: 'exilus', name: 'Exilus Adapter', quantity: 3 },
    { id: 'steel', name: 'Steel Essence', quantity: 50 },
    { id: 'azoth', name: 'Azoth', quantity: 25 },
    { id: 'control', name: 'Control Module', quantity: 10 },
    { id: 'mutagen', name: 'Mutagen Mass', quantity: 30 },
];

// Pseudo Code: Create an inventory array with resources, each having an id, name, and quantity.

// Requirements for crafting various items
const craftingRequirements = {
    Forma: {
        ferrite: 1000,
        polymer: 50,
        orokin: 1,
    },
    ChromaPrime: {
        ferrite: 2000,
        polymer: 100,
        orokin: 5,
        neural: 3,
    },
    ExilusAdapter: {
        ferrite: 1000,
        polymer: 10,
        nano: 20,
    },
    PrimedWeapon: {
        ferrite: 3000,
        polymer: 200,
        orokin: 10,
        neural: 5,
        azoth: 10,
    },
    BansheePrime: {
        ferrite: 2500,
        polymer: 120,
        orokin: 6,
        neural: 4,
        control: 2,
    },
    RubicoPrime: {
        ferrite: 3000,
        polymer: 150,
        orokin: 8,
        azoth: 5,
        mutagen: 10,
    },
};

// Pseudo Code: Define an object to hold the crafting requirements for each item, listing the needed resources.

// Function to display available resources
function displayResources() {
    const resourceList = document.getElementById('resource-list');
    resourceList.innerHTML = '';
    inventory.forEach(resource => {
        const listItem = document.createElement('li');
        listItem.textContent = `${resource.name}: ${resource.quantity}`;
        resourceList.appendChild(listItem);
    });
}

// Pseudo Code: Define a function to update the displayed list of resources, clearing the existing list and adding each resource's name and quantity.

// Function to check if item can be crafted
function canCraftItem(item) {
    const requirements = craftingRequirements[item];
    if (!requirements) return false;

    for (let resourceId in requirements) {
        const requiredQuantity = requirements[resourceId];
        const resource = inventory.find(res => res.id === resourceId);
        if (!resource || resource.quantity < requiredQuantity) {
            return false;
        }
    }
    return true;
}

// Pseudo Code: Define a function to determine if an item can be crafted based on the inventory quantities, returning true or false accordingly.

// Function to update the craft button status
function updateCraftButton() {
    const craftButtons = document.querySelectorAll('.craft-button');
    craftButtons.forEach(button => {
        const itemName = button.getAttribute('data-item');
        button.disabled = !canCraftItem(itemName);
    });
}

// Pseudo Code: Define a function to enable or disable the craft buttons based on whether the required resources are available for each item.

// Function to craft an item
function craftItem(item) {
    if (canCraftItem(item)) {
        const requirements = craftingRequirements[item];
        inventory = inventory.map(resource => {
            if (requirements[resource.id]) {
                return {
                    ...resource,
                    quantity: resource.quantity - requirements[resource.id]
                };
            }
            return resource;
        });

        document.getElementById('message').textContent = `Crafted ${item} successfully!`;
        displayResources();
        updateCraftButton();
    } else {
        document.getElementById('message').textContent = `Insufficient resources to craft ${item}.`;
    }
}

// Pseudo Code: Define a function to deduct the required resources from the inventory when crafting an item, updating the displayed resources and message.

// Function to generate item cards dynamically
function generateItemCards() {
    const craftSection = document.getElementById('craft-section');
    for (let item in craftingRequirements) {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
            <h3>${item}</h3>
            <p>Required:</p>
            <ul>
                ${Object.entries(craftingRequirements[item])
                    .map(([id, quantity]) => `<li>${id.charAt(0).toUpperCase() + id.slice(1)}: ${quantity}</li>`)
                    .join('')}
            </ul>
            <button class="craft-button" data-item="${item}" onclick="craftItem('${item}')">Craft ${item}</button>
        `;
        craftSection.appendChild(card);
    }
}

// Pseudo Code: Define a function to dynamically create and display item cards for each craftable item, listing the required resources.

// Initialize display
displayResources();
generateItemCards();
updateCraftButton();

// Pseudo Code: Call the display function to show resources, generate item cards, and update button statuses when the script is first run.
