// Hide the loader after the page has fully loaded
window.addEventListener('load', function() {
    document.querySelector('.loader').style.display = 'none';
});

const toggleBtn = document.getElementById('toggle_btn');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
};

document.addEventListener("DOMContentLoaded", function() {
    const div = document.querySelector(".text");
    const text = "Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden Oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.";
  
    function textTypingEffect(element, text, i = 0) {
      if (i === 0) {
        element.textContent = "";
      }
      if (i < text.length) {
        element.textContent += text[i];
        setTimeout(() => textTypingEffect(element, text, i + 1), 10);
      }
    }
  
    textTypingEffect(div, text);
  });
  
