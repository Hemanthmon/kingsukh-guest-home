// Hide the loader after the page has fully loaded
window.addEventListener('load', function() {
    document.querySelector('.loader').style.display = 'none';
});

// Toggle dropdown menu visibility
const toggleBtn = document.getElementById('toggle_btn');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
};
