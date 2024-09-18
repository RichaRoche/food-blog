// Get elements
const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

// Toggle sidebar when hamburger icon is clicked
menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// Close sidebar when the "Close Menu" link is clicked
closeBtn.addEventListener('click', (e) => {
    e.preventDefault();  // Prevents the link from following any default href action
    sidebar.classList.remove('open');  // Removes the 'open' class to close the sidebar
});
