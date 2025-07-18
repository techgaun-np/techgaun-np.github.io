document.addEventListener("DOMContentLoaded", function () {
  const scroller = document.querySelector(".image-scroller");
  const track = document.querySelector(".image-track");
  const images = document.querySelectorAll(".ramro-link-image");

  // Clone images for infinite loop (already done in HTML in this case)

  // Center detection
  function checkCenter() {
    const scrollerRect = scroller.getBoundingClientRect();
    const scrollerCenter = scrollerRect.left + scrollerRect.width / 2;

    images.forEach((img) => {
      const imgRect = img.getBoundingClientRect();
      const imgCenter = imgRect.left + imgRect.width / 2;

      // Check if image is within 50px of center
      if (Math.abs(imgCenter - scrollerCenter) < 200) {
        img.classList.add("center");
      } else {
        img.classList.remove("center");
      }
    });
  }

  // Check center position periodically
  setInterval(checkCenter, 100);

  // Pause animation on hover
  track.addEventListener("mouseenter", () => {
    track.style.animationPlayState = "paused";
  });

  track.addEventListener("mouseleave", () => {
    track.style.animationPlayState = "running";
  });
});
