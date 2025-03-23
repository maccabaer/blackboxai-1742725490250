// Main JavaScript for Fashion App

// Function to handle the navigation menu toggle on mobile
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Event listener for menu toggle
document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);

// Function to load products dynamically (to be implemented)
function loadProducts() {
    // Fetch products from products.json and display them
}

// Call loadProducts on page load
document.addEventListener('DOMContentLoaded', loadProducts);