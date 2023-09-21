document.addEventListener("DOMContentLoaded",function(){
    let yearBTns = document.querySelectorAll(".golf_yr_btn");
    let images=document.querySelectorAll(".year_images img");
    let modal = document.createElement("div");
    modal.className = "golf_modal"
})
document.addEventListener('DOMContentLoaded', function() {
    // Get all images within the year_images class and the modal element
    let images = document.querySelectorAll('.year_images img');
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

document.addEventListener("DOMContentLoaded", function() {
    // Get all the golf year buttons
    let yearButtons = document.querySelectorAll(".golf_yr_btn");
    yearButtons.forEach(function(btn) {
        btn.addEventListener("click", function() {
            let selectedYear = this.getAttribute("year");
            
            // Hide all images first
            let allImages = document.querySelectorAll(".year_images");
            allImages.forEach(function(imgDiv) {
                imgDiv.style.display = "none";
            });

            // Display only the images of the selected year
            let selectedImages = document.querySelector(`.year_images[year="${selectedYear}"]`);
            if (selectedImages) {
                selectedImages.style.display = "block";
            }
        });
    });
});
