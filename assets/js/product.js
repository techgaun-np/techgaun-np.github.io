document.addEventListener("DOMContentLoaded", () => {
  function setupCarousel(trackId, dotsId) {
    const track = document.getElementById(trackId);
    const dotsContainer = document.getElementById(dotsId);
    const images = track.querySelectorAll(".ramro-link-image");
    const originalSlidesCount = images.length / 2;
    let index = 0;

    // Create dots
    for (let i = 0; i < originalSlidesCount; i++) {
      const dot = document.createElement("div");
      dot.classList.add("carousel-dot");
      dot.dataset.index = i;
      dotsContainer.appendChild(dot);
    }

    const dots = dotsContainer.querySelectorAll(".carousel-dot");
    dots[0].classList.add("active");

    // Scroll to slide
    function scrollToSlide(i) {
      const slideWidth = images[0].offsetWidth + 40;
      track.scrollTo({
        left: slideWidth * i,
        behavior: "smooth",
      });
    }

    // Update dots
    function updateDots(activeIndex) {
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === activeIndex);
      });
    }

    // Detect center image
    function detectCenterImage() {
      const trackRect = track.getBoundingClientRect();
      images.forEach((img) => {
        const imgRect = img.getBoundingClientRect();
        const center = Math.abs(
          imgRect.left +
            imgRect.width / 2 -
            (trackRect.left + trackRect.width / 2)
        );
        img.classList.toggle("center", center < imgRect.width / 2);
      });
    }

    // Dot click behavior
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        index = Number(dot.dataset.index);
        scrollToSlide(index);
        updateDots(index);
      });
    });

    // Auto scroll
    setInterval(() => {
      index++;
      if (index >= originalSlidesCount + 1) {
        track.scrollLeft = 0;
        index = 1;
      }
      scrollToSlide(index);
      updateDots(index % originalSlidesCount);
    }, 3000);

    track.addEventListener("scroll", detectCenterImage);
    detectCenterImage();
  }

  // Initialize both carousels
  setupCarousel("imageTrack", "carouselDots");
  setupCarousel("imageTrack2", "carouselDots2");
});
