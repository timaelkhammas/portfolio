document.addEventListener("DOMContentLoaded", function() {
    var imageContainer = document.getElementById("imageContainer");
    var imageWrappers = document.querySelectorAll(".image-wrapper");

    // Loop through each image wrapper
    imageWrappers.forEach(function(wrapper) {
        // Add mouseenter event listener to each image wrapper
        wrapper.addEventListener("mouseenter", function() {
            // Add arrow-cursor class to the image wrapper when mouse enters
            wrapper.classList.add("arrow-cursor");
        });

        // Add mouseleave event listener to each image wrapper
        wrapper.addEventListener("mouseleave", function() {
            // Remove the arrow-cursor class when mouse leaves
            wrapper.classList.remove("arrow-cursor");
        });

        // Add click event listener to each image wrapper
        wrapper.addEventListener("click", function() {
            // Calculate the scroll position of the clicked image
            var scrollLeftPos = wrapper.offsetLeft - (imageContainer.offsetWidth / 2) + (wrapper.offsetWidth / 2);
            
            // Check if the clicked image is to the left or right of the current scroll position
            var direction = scrollLeftPos > imageContainer.scrollLeft ? 1 : -1;
            
            // Calculate the distance to scroll based on the direction
            var scrollDistance = direction * Math.min(Math.abs(scrollLeftPos - imageContainer.scrollLeft), imageContainer.offsetWidth / 2);
            
            // Scroll the image container horizontally
            imageContainer.scrollTo({
                left: imageContainer.scrollLeft + scrollDistance,
                behavior: 'smooth'
            });

            // Add direction class to the image wrapper
            wrapper.classList.toggle("left-scroll", direction === -1);
        });
    });
});
