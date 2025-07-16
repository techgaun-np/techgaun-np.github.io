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
  const imageTrack = document.querySelector(".carousel-image-track");
  const textTagline = document.getElementById("text-tagline");
  const textTitle = document.getElementById("text-title");
  const textDesc = document.getElementById("text-description");
  const textLink = document.getElementById("text-link");
  const linkContainer = document.getElementById("text-link-container");
  const carouselText = document.querySelector(".carousel-text");

  const nextButton = document.getElementById("next");
  const prevButton = document.getElementById("prev");

  const slides = imageTrack.children;
  const totalSlides = slides.length;
  let index = 0;

  const caseStudies = [
    {
      tagline: "Dev Tools",
      title: "Online Set of Useful Tools for Developers",
      desc: "We have built a suite of online tools for developers to help them with their day-to-day activities. We have made these tools to be used by developers for developers, all in one place and free to use.",
      link: "https://devtools.techgaun.com",
      linkText: "Use Dev Tools",
    },
    {
      tagline: "Mobile App",
      title: "Multi-family Resident Experience",
      desc: "React Native mobile application for multi-family residential communities to improve the resident experience...",
      link: null,
      linkText: "",
    },
    {
      tagline: "Web App",
      title: "Crowdfunding Platform",
      desc: "Complex crowdfunding platform integrated with Stripe and support for complex crowdfunding requirements...",
      link: null,
      linkText: "",
    },
    {
      tagline: "Ancestree",
      title: "Genealogy as a Service",
      desc: "Ancestree is a modern multi-lingual genealogy software as a service currently on private beta...",
      link: "#contact",
      linkText: "Schedule Demo",
    },
    {
      tagline: "Open Source",
      title: "Build for Nepal",
      desc: "Build for Nepal is an initiative and effort to creating open datasets and build open source software for Nepal...",
      link: "https://github.com/build-for-nepal",
      linkText: "Visit Github",
    },
  ];

  function updateContent() {
    const data = caseStudies[index];

    carouselText.classList.add("fade-out");

    setTimeout(() => {
      textTagline.textContent = data.tagline;
      textTitle.textContent = data.title;
      textDesc.textContent = data.desc;

      if (data.link) {
        textLink.href = data.link;
        textLink.textContent = data.linkText;
        linkContainer.style.display = "block";
      } else {
        linkContainer.style.display = "none";
      }

      carouselText.classList.remove("fade-out");
    }, 300);
  }

  function moveSlide() {
    imageTrack.style.transform = `translateX(-${index * 100}%)`;
    updateContent();
  }

  nextButton.addEventListener("click", () => {
    index = (index + 1) % totalSlides;
    moveSlide();
  });

  prevButton.addEventListener("click", () => {
    index = (index - 1 + totalSlides) % totalSlides;
    moveSlide();
  });

  // Initial content
  updateContent();
});
