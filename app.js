window.addEventListener('load', function() {
  const loader = document.querySelector('.loader');
  if (loader) {
      loader.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('toggle_btn');
  const dropDownMenu = document.querySelector('.dropdown_menu');
  const bookNowButton = document.querySelector('.nav-book-now');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav_bar ul li a');
  const div = document.querySelector(".text");

  if (toggleBtn && dropDownMenu) {
      toggleBtn.onclick = function () {
          dropDownMenu.classList.toggle('open');
      };
  }
  window.addEventListener('scroll', function() {
    const homeSection = document.getElementById('home');
    if (!homeSection) return;
    const homeSectionBottom = homeSection.getBoundingClientRect().bottom;

    // Show/hide "Book Now" button based on scroll position


    // Highlight the nav link of the section currently in view
    let currentSection = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('active');
      }
    });
  });


  const text = "Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden Oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.";
  
  if (div) {
      textTypingEffect(div, text);
  }

  function textTypingEffect(element, text, i = 0) {
      if (i === 0) {
          element.textContent = "";
      }
      if (i < text.length) {
          element.textContent += text[i];
          setTimeout(() => textTypingEffect(element, text, i + 1), 10);
      }
  }
});
