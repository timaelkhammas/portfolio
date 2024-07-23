let slideIndex = 0;
shuffleSlides();
showSlides();

function shuffleSlides() {
    const slideshowContainer = document.querySelector('.slideshow-container');
    const slides = Array.from(document.getElementsByClassName('mySlides'));

    // Shuffle slides array
    for (let i = slides.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [slides[i], slides[j]] = [slides[j], slides[i]];
    }

    // Append shuffled slides back to the container
    slides.forEach(slide => slideshowContainer.appendChild(slide));
}

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 1000); // Change image every 3 seconds
}

function plusSlides(n) {
    slideIndex += n - 1;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides();
}
