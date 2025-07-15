//scroll to top
window.onscroll = function () {
  var scrollButton = document.getElementById("scroll-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};

function scrollToTop() {
  window.scroll({ top: 0, behavior: "smooth" });
}

//responsive navigation
document.addEventListener("click", function (e) {
  var navIcon = document.getElementById("nav-icon");
  var mainNav = document.getElementById("main-nav");

  if (navIcon.contains(e.target)) {
    toggleNav(mainNav);
  } else {
    closeNav(mainNav);
  }
});

function closeNav(element) {
  element.className = "main-nav";
}

function toggleNav(element) {
  if (element.className === "main-nav") {
    element.className += " responsive";
  } else {
    closeNav(element);
  }
}

// Initialize emailjs
(function () {
  emailjs.init({
    publicKey: "-j9iqbK7XwOzki-g6",
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  // Contact form submission section
  var contactForm = document.getElementById("contact-form");
  var successMessage = document.getElementById("success-message");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var submitButton = contactForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    emailjs.sendForm("service_008lxmj", "template_wiuzc5o", this).then(
      function () {
        contactForm.reset();
        // contactForm.style.display = 'none';
        successMessage.style.display = "block";

        setTimeout(function () {
          successMessage.style.display = "none";
          // contactForm.style.display = 'block';
          submitButton.disabled = false;
          submitButton.textContent = "Submit";
        }, 5000);
      },
      function (error) {
        // console.log('FAILED...', error);
        // alert('Failed to send the message. Please try again later.');
        submitButton.disabled = false;
        submitButton.textContent = "Submit";
      }
    );
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("initialModal");
  if (modal) {
    modal.style.display = "flex";
  }
});

function closeModal() {
  const modal = document.getElementById("initialModal");
  if (modal) {
    modal.style.display = "none";
  }
}

function closeBanner() {
  const banner = document.getElementById("announcementBanner");
  if (banner) {
    banner.style.display = "none";
  }
}

// Carousel functionality

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const nextButton = document.getElementById("next");
  const prevButton = document.getElementById("prev");

  let index = 1; // Start at the first actual slide (after clone)
  const totalSlides = slides.length;

  // Clone first and last slides
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);
  firstClone.id = "first-clone";
  lastClone.id = "last-clone";

  track.appendChild(firstClone);
  track.insertBefore(lastClone, track.firstChild);

  const allSlides = Array.from(track.children);

  // Set initial position
  track.style.transform = `translateX(-${index * 100}%)`;

  const moveToSlide = () => {
    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(-${index * 100}%)`;
  };

  nextButton.addEventListener("click", () => {
    if (index >= allSlides.length - 1) return;
    index++;
    moveToSlide();
  });

  prevButton.addEventListener("click", () => {
    if (index <= 0) return;
    index--;
    moveToSlide();
  });

  track.addEventListener("transitionend", () => {
    if (allSlides[index].id === "first-clone") {
      track.style.transition = "none";
      index = 1;
      track.style.transform = `translateX(-${index * 100}%)`;
    }
    if (allSlides[index].id === "last-clone") {
      track.style.transition = "none";
      index = allSlides.length - 2;
      track.style.transform = `translateX(-${index * 100}%)`;
    }
  });
});
