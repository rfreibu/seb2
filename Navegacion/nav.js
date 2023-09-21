
function loadNavbar() {
  var navbarContainer = document.getElementById('navbar-container');
  fetch('/Navegacion/navbar.html')
      .then(response => response.text())
      .then(content => {
          navbarContainer.innerHTML = content;

          const menuBtn = document.querySelector('.menu-btn');
          const items = document.querySelector('.items');
          let menuOpen = false;

          // Hamburger menu toggle
          if (menuBtn) {
              menuBtn.addEventListener('click', toggleMenu);
          }

          function toggleMenu() {
              if (!menuOpen) {
                  menuBtn.classList.add('open');
                  items.style.display = "flex";
                  menuOpen = true;
              } else {
                  menuBtn.classList.remove('open');
                  items.style.display = "none";
                  menuOpen = false;
              }
          }

          function checkWindowSize() {
              if (window.innerWidth > 768) {
                  items.style.display = "flex";
                  if (menuOpen) {
                      menuBtn.classList.remove('open');
                      menuOpen = false;
                  }
              } else if (!menuOpen) {
                  items.style.display = "none";
              }
          }

          // Initial check and event listener
          checkWindowSize();
          window.addEventListener('resize', checkWindowSize);

          // Dropdown toggle for mobile
          document.querySelectorAll('.navbar .dropdown').forEach(dropdown => {
              dropdown.addEventListener('click', event => {
                  if (window.innerWidth <= 768) {
                      event.preventDefault();
                      const currentDropdownMenu = dropdown.querySelector('.dropdown-menu');
                      currentDropdownMenu.classList.toggle('show');

                      // Close other dropdowns
                      document.querySelectorAll('.navbar .dropdown .dropdown-menu').forEach(innerDropdown => {
                          if (innerDropdown !== currentDropdownMenu) {
                              innerDropdown.classList.remove('show');
                          }
                      });
                  }
              });
          });
      });
}

// Call the loadNavbar function
loadNavbar();

// Fade-in effect on load
if (window.onload) {
  const currentOnLoad = window.onload;
  window.onload = function() {
      currentOnLoad();
      document.body.classList.add('fade-in');
  };
} else {
  window.onload = function() {
      document.body.classList.add('fade-in');
  };
}
