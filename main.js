// // Get references to elements
const search = document.querySelector('.search-box');
const searchIcon = document.querySelector('#search-icon');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('header');

// Toggle search box visibility when search icon is clicked
searchIcon.onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active'); // Hide navbar if it's open
};

// Toggle navbar visibility when menu icon is clicked
menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active'); // Hide search box if it's open
};

// Close search box and navbar on scroll
window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
};

// Add shadow effect to header on scroll
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

// Add event listener for search input
document.querySelector('.search-box input').addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    // Implement search logic here
    console.log(`Searching for: ${query}`);
    // Example: Filter products, articles, etc.
});
