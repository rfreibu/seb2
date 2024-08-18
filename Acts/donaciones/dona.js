document.addEventListener('DOMContentLoaded', function() {
    // Handle image modal
    let images = document.querySelectorAll('.donaciones-images img');
    let modal = document.createElement('div');
    modal.className = 'modal';
    let modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modal.appendChild(modalContent);
    let closeButton = document.createElement('span');
    closeButton.innerHTML = "&times;";
    closeButton.className = "close-button";
    modal.appendChild(closeButton);
    closeButton.addEventListener('click', function(event) {
        modal.style.display = 'none';
        event.stopPropagation();
    });
    document.body.appendChild(modal);
    images.forEach(img => {
        img.addEventListener('click', function() {
            let modalImage = new Image();
            modalImage.src = img.src;
            modalContent.innerHTML = '';  // Clear any existing content
            modalContent.appendChild(modalImage);
            modal.style.display = 'block';
        });
    });
    modal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Handle section toggle
    const headers = document.querySelectorAll('.toggle-header');
    headers.forEach(header => {
        header.addEventListener('click', function() {
            const year = this.getAttribute('data-year');
            const content = document.getElementById(`section-${year}`);
            if (content.style.display === "none" || !content.style.display) {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });
});
