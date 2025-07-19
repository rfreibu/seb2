(() => {
  // Select all gallery pages and dynamically determine total pages
  const galleryPages = document.querySelectorAll('.gallery-page');
  let currentPage = 1;
  const totalPages = galleryPages.length;

  // Function to display the active gallery page
  const showPage = (page) => {
    galleryPages.forEach((p, index) => {
      p.classList.toggle('active', (index + 1) === page);
    });
  };

  // Navigate to the next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
    }
  };

  // Navigate to the previous page
  const previousPage = () => {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    // Initialize gallery display
    showPage(currentPage);

    // Set up event listeners for navigation buttons
    document.getElementById('prevButton')?.addEventListener('click', previousPage);
    document.getElementById('nextButton')?.addEventListener('click', nextPage);

    // Modal functionality for image gallery
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content" role="dialog" aria-modal="true">
        <button class="modal-close" aria-label="Close modal">&times;</button>
        <img src="" alt="Full-size image">
      </div>
    `;
    document.body.appendChild(modal);
    const modalContent = modal.querySelector('.modal-content img');
    const modalClose = modal.querySelector('.modal-close');

    galleryItems.forEach(item => {
      item.addEventListener('click', (e) => {
        modal.style.display = 'flex';
        modalContent.src = e.target.src;
      });
    });

    modalClose.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });

    // Close the modal when the Escape key is pressed
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modal.style.display = 'none';
      }
    });
  });
})();
