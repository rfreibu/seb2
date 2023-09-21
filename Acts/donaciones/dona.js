
document.addEventListener('DOMContentLoaded', function() {
    // Get all images and the modal element
    let images = document.querySelectorAll('.donaciones-images img');
    let modal = document.createElement('div');
    modal.className = 'modal';

    // Create the modal content container
    let modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modal.appendChild(modalContent);

    // Create the close button and add it to the modal
    let closeButton = document.createElement('span');
    closeButton.innerHTML = "&times;";
    closeButton.className = "close-button";
    modal.appendChild(closeButton);

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', function(event) {
        modal.style.display = 'none';
        event.stopPropagation();
    });

    // Add the modal to the body
    document.body.appendChild(modal);

    // Add event listener to each image
    images.forEach(img => {
        img.addEventListener('click', function() {
            let modalImage = new Image();
            modalImage.src = img.src;
            modalContent.innerHTML = '';  // Clear any existing content
            modalContent.appendChild(modalImage);
            modal.style.display = 'block';
        });
    });

    // Close the modal when clicked anywhere
    modal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
});
