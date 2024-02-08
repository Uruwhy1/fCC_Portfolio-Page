document.addEventListener("DOMContentLoaded", function () {
    // Get all links in the navbar
    const links = document.querySelectorAll(".nav-link");

    // Add click event listener to each link
    links.forEach(function (link) {
        link.addEventListener("click", function (event) {

            // Get the target section id from the link's href
            const sectionId = this.getAttribute("href").substring(1);

            // Remove 'active' class from all sections
            document.querySelectorAll(".main-div").forEach(section => {
                section.classList.remove('active');
            });

            // Remove 'active' class from all elements
            document.querySelectorAll('.yes-highlight').forEach(title => {
                title.classList.remove('active');
            });

            // Add 'active' class to the corresponding section
            const targetSection = document.getElementById(sectionId);
            targetSection.classList.add('active');

            // Add 'active' class to the highlightable elements.
            const titleElements = targetSection.querySelectorAll('.yes-highlight');
            titleElements.forEach(title => {
                title.classList.add('active');
            });
        });
    });
});
