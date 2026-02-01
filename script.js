// SOLE SOURCE - JavaScript

// Menu Button Functionality
const menuBtn = document.getElementById('menuBtn');

// Event listener untuk menu button
menuBtn.addEventListener('click', function() {
    console.log('Menu button clicked!');
    // Fungsi menu akan ditambahkan nanti sesuai kebutuhan
    alert('Menu button diklik! Fungsi akan ditambahkan nanti.');
});

// Search Functionality (Optional)
const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const searchQuery = searchInput.value;
        console.log('Search query:', searchQuery);
        // Fungsi search akan ditambahkan nanti
        alert(`Mencari: ${searchQuery}`);
    }
});

// Smooth scroll functionality (jika diperlukan nanti)
document.addEventListener('DOMContentLoaded', function() {
    console.log('SOLE SOURCE website loaded successfully!');
});
