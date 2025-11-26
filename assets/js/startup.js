document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".accordion-item");
  const displayImage = document.getElementById("displayImage");

  const imageMap = {
    img1: "./assets/images/startup/post.png",
    img2: "./assets/images/startup/mobile-stack.png",
    img3: "./assets/images/startup/group-discussion.png",
    img4: "./assets/images/startup/man-with-puzzle.png",
    img5: "./assets/images/startup/group-discussion.png",
  };

  items.forEach((item) => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {
      items.forEach((acc) => acc.classList.remove("active"));
      item.classList.add("active");

      const imgKey = item.getAttribute("data-image");
      displayImage.src = imageMap[imgKey];
    });
  });
});
