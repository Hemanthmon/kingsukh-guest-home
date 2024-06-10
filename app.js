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
  const navBar = document.querySelector('.nav_bar');
// for drop down menu
  if (toggleBtn && dropDownMenu) {
      toggleBtn.onclick = function () {
          dropDownMenu.classList.toggle('open');
      };
  }
  let fadeOutTimeout;

  // Function to check if the user is in the home section
  function isInHomeSection() {
    const homeSection = document.getElementById('home');
    const homeSectionTop = homeSection.getBoundingClientRect().top;
    const homeSectionBottom = homeSection.getBoundingClientRect().bottom;
    return homeSectionTop <= 0 && homeSectionBottom >= 0;
  }

  // Function to reset the fade out timer
  function resetFadeOutTimer() {
    // Clear any existing timer
    clearTimeout(fadeOutTimeout);

    // Remove the fade-out class to make sure the nav bar is visible
    navBar.classList.remove('fade-out');

    // Set a new timer to add the fade-out class after 4 seconds if not in home section
    fadeOutTimeout = setTimeout(() => {
      if (!isInHomeSection()) {
        navBar.classList.add('fade-out');
      }
    }, 4000);
  }

  // Add event listeners to reset the timer on user activity
  window.addEventListener('mousemove', resetFadeOutTimer);
  window.addEventListener('keypress', resetFadeOutTimer);
  window.addEventListener('scroll', resetFadeOutTimer);

  // Initialize the fade out timer when the page loads
  resetFadeOutTimer();
  function isInHomeSection() {
    const homeSection = document.getElementById('home');
    const homeSectionTop = homeSection.getBoundingClientRect().top;
    const homeSectionBottom = homeSection.getBoundingClientRect().bottom;
    return homeSectionTop <= 0 && homeSectionBottom >= 0;
  }


  window.addEventListener('scroll', function() {
    const homeSection = document.getElementById('home');
    if (!homeSection) return;
    const homeSectionBottom = homeSection.getBoundingClientRect().bottom;

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

// for about Us paragraph animation
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
