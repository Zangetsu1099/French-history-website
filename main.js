// -------------------------------------------
// INFINITE DUPLICATION FOR SMOOTH TIMELINE
// -------------------------------------------

const track = document.getElementById("sliderTrack");

// Get original slides
const slides = [...track.children];

// Prevent double duplication
if (!track.dataset.cloned) {
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        track.appendChild(clone);
    });
    track.dataset.cloned = "true";
}

// -------------------------------------------
// OPTIONAL: Pause slider on hover
// -------------------------------------------

track.addEventListener("mouseenter", () => {
    track.style.animationPlayState = "paused";
});

track.addEventListener("mouseleave", () => {
    track.style.animationPlayState = "running";
});

