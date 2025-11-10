document.addEventListener("DOMContentLoaded", () => {
  const minimizeBtn = document.getElementById("minimizeBtn");
  const bottomBanner = document.getElementById("bottomBanner");
  const miniBanner = document.getElementById("miniBanner");

  if (!minimizeBtn || !bottomBanner || !miniBanner) return;

  // Minimize banner
  minimizeBtn.addEventListener("click", () => {
    bottomBanner.style.transform = "translateY(100%)";
    bottomBanner.style.opacity = "0";
    setTimeout(() => {
      bottomBanner.style.display = "none";
      miniBanner.style.display = "flex";
    }, 500);
  });

  // Restore banner
  miniBanner.addEventListener("click", () => {
    miniBanner.style.display = "none";
    bottomBanner.style.display = "flex";
    setTimeout(() => {
      bottomBanner.style.transform = "translateY(0)";
      bottomBanner.style.opacity = "1";
    }, 50);
  });
});
