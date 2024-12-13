function showContent(n, contents, dots = null) {
    var index = n > contents.length ? 1 : n < 1 ? contents.length : n;
    contents.forEach((content, i) => {
        content.style.display = i + 1 === index ? "block" : "none";
    });
    if (dots) {
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index - 1].classList.add("active");
    }
    return index;
}
let currentPage = 1;
const totalPages = 5;

function showPage(page) {
    const allPages = document.querySelectorAll('.gallery-page');
    allPages.forEach((p, index) => {
        p.style.display = (index + 1 === page) ? 'grid' : 'none';
    });
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

document.addEventListener('DOMContentLoaded', () => showPage(currentPage));

// Select all gallery items
const galleryItems = document.querySelectorAll('.gallery-item img');
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

// Create modal content
modal.innerHTML = `
  <div class="modal-content">
    <button class="modal-close">&times;</button>
    <img src="" alt="Full-size image">
  </div>
`;

// Select modal elements
const modalContent = modal.querySelector('.modal-content img');
const modalClose = modal.querySelector('.modal-close');

// Open modal on image click
galleryItems.forEach(item => {
  item.addEventListener('click', (e) => {
    modal.style.display = 'flex';
    modalContent.src = e.target.src; // Set the clicked image source to the modal image
  });
});

// Close modal on close button click
modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside the content
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
