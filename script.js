document.addEventListener("DOMContentLoaded", function() {
    var imageContainer = document.getElementById("imageContainer");
    var imageWrappers = document.querySelectorAll(".image-wrapper");

    // Loop through each image wrapper
    imageWrappers.forEach(function(wrapper) {
        // Add click event listener to each image wrapper
        wrapper.addEventListener("click", function() {
            // Calculate the scroll left position of the clicked image
            var scrollLeftPos = wrapper.offsetLeft - (imageContainer.offsetWidth / 2) + (wrapper.offsetWidth / 2);
            // Scroll the image container horizontally to the calculated position
            imageContainer.scrollTo({
                left: scrollLeftPos,
                behavior: 'smooth'
            });

            // Add arrow-cursor class to the clicked image wrapper
            wrapper.classList.add("arrow-cursor");

            // Remove the arrow-cursor class after a short delay (500 milliseconds)
            setTimeout(function() {
                wrapper.classList.remove("arrow-cursor");
            }, 500);
        });
    });
});
