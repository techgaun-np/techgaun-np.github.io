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
  const textTitle1 = document.getElementById("text-title-1");

  const textDesc = document.getElementById("text-description");
  const textLink = document.getElementById("text-link");
  const linkContainer = document.getElementById("text-link-container");
  const carouselText = document.querySelector(".carousel-text");

  const nextButton = document.getElementById("next");
  const prevButton = document.getElementById("prev");

  const originalSlides = [...imageTrack.children];
  const originalLength = originalSlides.length;

  // Clone slides 2 times (total 3x)
  for (let i = 0; i < 2; i++) {
    originalSlides.forEach((slide) => {
      const clone = slide.cloneNode(true);
      imageTrack.appendChild(clone);
    });
  }

  const slides = imageTrack.children;
  const totalSlides = slides.length;
  let index = originalLength; // Start from the middle copy

  const caseStudies = [
    {
      tagline: "Dev Tools",
      title: "Online Set of Useful Tools for Developers",
      title1: "Online Set of Useful Tools for Developers",
      desc: "We've built a comprehensive suite of online tools tailored specifically to meet the everyday needs of developers. Whether you're debugging, formatting code, converting data, or working with APIs, our platform offers a seamless, all-in-one experience designed to boost productivity and reduce friction. Created by developers for developers, these tools are completely free to use—so you can focus on building, not searching..",

      link: "https://devtools.techgaun.com",
      linkText: "Use Dev Tools",
    },
    {
      tagline: "Mobile App",
      title: "Multi-family Resident Experience",
      title1: "Multi-family Resident Experience",
      desc: "React Native mobile application designed specifically for multi-family residential communities, enhancing the day-to-day living experience for residents. The app offers an intuitive platform where users can easily report maintenance issues, make rent payments, and stay connected with the property management team—all from the convenience of their phone. By streamlining communication and essential services, it empowers both residents and management to operate more efficiently and harmoniously.",
      link: "#contact",
      linkText: "",
    },
    {
      tagline: "Web App",
      title: "Crowdfunding Platform",
      title1: "Crowdfunding Platform",
      desc: "A robust and scalable crowdfunding platform engineered to handle complex campaign structures and funding models. Integrated seamlessly with Stripe, it supports advanced features such as recurring subscriptions, reward-based tiers, flexible contribution options, and full lifecycle management—from campaign creation to post-funding fulfillment. Designed for both creators and backers, the platform ensures transparency, control, and a smooth end-to-end crowdfunding experience.",
      link: "#contact",
      linkText: "",
    },
    {
      tagline: "Ancestree",
      title: "Genealogy as a Service",
      title1: "Genealogy as a Service",
      desc: "Ancestree is a modern, multi-lingual genealogy Software-as-a-Service (SaaS) platform, thoughtfully crafted by our engineering team and currently in private beta. It empowers users to build, explore, and preserve their family histories with an intuitive interface and robust data relationships. Schedule a personalized demo with our team to discover how Ancestree can bring your family tree to life across generations and languages.",
      link: "#contact",
      linkText: "Schedule Demo",
    },
    {
      tagline: "Open Source",
      title: "Build for Nepal",
      title1: "Build for Nepal",
      desc: "Build for Nepal is an initiative dedicated to creating open datasets and developing open-source software tailored to Nepal’s unique challenges and opportunities. While Techgaun Nepal serves as a facilitator, it’s the vibrant, driven community that truly breathes life into this grassroots movement. Together, we aim to foster transparency, innovation, and collective ownership in Nepal’s digital transformation.",
      link: "https://github.com/build-for-nepal",
      linkText: "Visit Github",
    },
    {
      tagline: "RamroLink",
      title: "Made for Creators",
      title1: "Made for Creators",
      desc: "A dynamic platform designed to empower creators, influencers, and individuals with powerful, fully customizable link-in-bio tools. More than just a landing page, it serves as a centralized hub for your content, brand, and presence—crafted to reflect your identity and drive engagement. With elegant design and seamless user experience, RamroLink transforms your bio link into a powerful expression of who you are.",
      link: "https://ramro.link",
      linkText: "Visit RamroLink",
    },
  ];

  let isAnimating = false; // Track animation state
  let autoScrollInterval;

  function updateContent() {
    const data = caseStudies[index % originalLength];
    carouselText.classList.add("fade-out");

    setTimeout(() => {
      textTagline.textContent = data.tagline;
      textDesc.textContent = data.desc;
      textTitle.textContent = data.title;
      textTitle1.textContent = data.title1;

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
    if (isAnimating) return; // Prevent overlapping animations
    isAnimating = true;

    imageTrack.style.transition = "transform 0.5s ease-in-out";
    imageTrack.style.transform = `translateX(-${index * 100}%)`;
    updateContent();

    imageTrack.addEventListener(
      "transitionend",
      () => {
        isAnimating = false;
        handleLoop();
      },
      { once: true }
    );
  }

  function handleLoop() {
    imageTrack.style.transition = "none";

    // If we move past the last copy, reset to middle copy
    if (index >= totalSlides - originalLength) {
      index = originalLength;
      imageTrack.style.transform = `translateX(-${index * 100}%)`;
    }

    // If we move before the first copy, reset to middle copy at end
    if (index < originalLength) {
      index = totalSlides - 2 * originalLength;
      imageTrack.style.transform = `translateX(-${index * 100}%)`;
    }
  }

  // Auto-scroll functionality
  function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
      if (!isAnimating) {
        index++;
        moveSlide();
      }
    }, 8000); // 8 seconds
  }

  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }

  // Modified button handlers
  nextButton.addEventListener("click", () => {
    if (isAnimating) return;
    stopAutoScroll();
    index++;
    moveSlide();
    setTimeout(startAutoScroll, 30000); // Restart after full interval
  });

  prevButton.addEventListener("click", () => {
    if (isAnimating) return;
    stopAutoScroll();
    index--;
    moveSlide();
    setTimeout(startAutoScroll, 30000); // Restart after full interval
  });

  // Pause on hover
  const carousel = document.querySelector(".carousel");
  if (carousel) {
    carousel.addEventListener("mouseenter", stopAutoScroll);
    carousel.addEventListener("mouseleave", startAutoScroll);
  }

  // Initialize
  imageTrack.style.transition = "none";
  imageTrack.style.transform = `translateX(-${index * 100}%)`;
  updateContent();
  startAutoScroll();
});

// Dropdown functionality for both dropdowns in systematic way

document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = [
    {
      toggleId: "dropdownToggle1",
      menuId: "dropdownMenu1",
      iconId: "dropdownIcon1",
    },
    {
      toggleId: "dropdownToggle2",
      menuId: "dropdownMenu2",
      iconId: "dropdownIcon2",
    },
    // Add more dropdowns here if needed
  ];

  dropdowns.forEach(({ toggleId, menuId, iconId }) => {
    const toggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);
    const icon = document.getElementById(iconId);

    toggle.addEventListener("click", function (e) {
      e.stopPropagation();

      // Close all dropdowns first
      dropdowns.forEach(({ menuId: mid, iconId: iid }) => {
        const otherMenu = document.getElementById(mid);
        const otherIcon = document.getElementById(iid);

        if (otherMenu && otherMenu !== menu) {
          otherMenu.style.display = "none";
        }
        if (otherIcon && otherIcon !== icon) {
          otherIcon.style.transform = "rotate(0deg)";
        }
      });

      // Toggle current dropdown
      const isOpen = menu.style.display === "block";
      menu.style.display = isOpen ? "none" : "block";
      icon.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
    });
  });

  // Close all when clicking outside
  document.addEventListener("click", function () {
    dropdowns.forEach(({ menuId, iconId }) => {
      const menu = document.getElementById(menuId);
      const icon = document.getElementById(iconId);
      if (menu) menu.style.display = "none";
      if (icon) icon.style.transform = "rotate(0deg)";
    });
  });
});
