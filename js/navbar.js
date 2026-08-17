function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    const button = document.querySelector('.toggle');

    // Check if the window width is 767px or less
    if (window.innerWidth <= 767) {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'flex';
            button.innerHTML = '<i class="fas fa-xmark"></i>'; // Show 'close' icon
        } else {
            menu.style.display = 'none';
            button.innerHTML = '<i class="fas fa-bars"></i>'; // Show 'menu' icon
        }
    }
}

// Attach the toggleMenu function to the button click
document.querySelector('.toggle').addEventListener('click', toggleMenu);
