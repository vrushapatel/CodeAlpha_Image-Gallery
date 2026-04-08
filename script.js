let currentIndex = 0;
const images = document.querySelectorAll(".gallery img");

function openLightbox(index) {
  currentIndex = index;
  document.getElementById("lightbox").style.display = "flex";
  showImage();
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function showImage() {
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function changeSlide(step) {
  currentIndex += step;

  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;

  showImage();
}

/* Filter Function */
function filterImages(category) {
  images.forEach(img => {
    if (category === "all" || img.classList.contains(category)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}