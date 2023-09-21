
document.addEventListener("DOMContentLoaded", function() {
    // Initially hide all gallery sections
    document.querySelectorAll(".gallery-section").forEach(section => section.classList.remove("active"));

    // Get all the year buttons
    let yearButtons = document.querySelectorAll(".year-btn");

    yearButtons.forEach(function(btn) {
        btn.addEventListener("click", function() {
            let selectedYear = this.getAttribute("data-year");
            
            // Remove 'active' class from all gallery sections
            let allSections = document.querySelectorAll(".gallery-section");
            allSections.forEach(function(section) {
                section.classList.remove("active");
            });

            // Add 'active' class to the selected gallery section
            let selectedSection = document.querySelector(`.gallery-section[data-year="${selectedYear}"]`);
            if (selectedSection) {
                selectedSection.classList.add("active");
            }
        });
    });
});
