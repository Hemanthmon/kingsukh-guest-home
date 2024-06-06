
const toggleBtn = document.getElementById('toggle_btn')
const dropDownMenu  = document.querySelector('.dropdown_menu')
 
toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
}