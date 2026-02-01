// SOLE SOURCE - JavaScript

// ============================================
// SIDEBAR FUNCTIONALITY
// ============================================

const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const closeSidebarBtn = document.getElementById('closeSidebar');
const body = document.body;

// Function to open sidebar
function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    body.classList.add('sidebar-open');
}

// Function to close sidebar
function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('sidebar-open');
}

// Event listener untuk menu button (buka sidebar)
menuBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    openSidebar();
});

// Event listener untuk close button (tutup sidebar)
closeSidebarBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    closeSidebar();
});

// Event listener untuk overlay (tutup sidebar ketika klik di luar)
overlay.addEventListener('click', function() {
    closeSidebar();
});

// Prevent sidebar click from closing
sidebar.addEventListener('click', function(e) {
    e.stopPropagation();
});

// ============================================
// SEARCH FUNCTIONALITY
// ============================================

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

// ============================================
// INITIALIZATION
// ============================================

// Smooth scroll functionality (jika diperlukan nanti)
document.addEventListener('DOMContentLoaded', function() {
    console.log('SOLE SOURCE website loaded successfully!');
});
