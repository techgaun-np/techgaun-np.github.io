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
      desc: "We have built a suite of online tools for developers to help them with their day-to-day activities. We have made these tools to be used by developers for developers, all in one place and free to use.",
      link: "https://devtools.techgaun.com",
      linkText: "Use Dev Tools",
    },
    {
      tagline: "Mobile App",
      title: "Multi-family Resident Experience",
      title1: "Multi-family Resident Experience",
      desc: "React Native mobile application for multi-family residential communities to improve the resident experience by providing a seamless way to report maintenance issues, pay rent, and communicate with the property management team.",
      link: "#contact",
      linkText: "",
    },
    {
      tagline: "Web App",
      title: "Crowdfunding Platform",
      title1: "Crowdfunding Platform",
      desc: "Complex crowdfunding platform integrated with Stripe and support for complex crowdfunding requirements with features like subscription, rewards, and tiers and lifecycle management throughout the campaign.",
      link: "#contact",
      linkText: "",
    },
    {
      tagline: "Ancestree",
      title: "Genealogy as a Service",
      title1: "Genealogy as a Service",
      desc: "Ancestree is a modern multi-lingual genealogy software as a service currently on private beta, proudly built by our engineering team. Schedule a demo with our team to explore the features for your family tree.",
      link: "#contact",
      linkText: "Schedule Demo",
    },
    {
      tagline: "Open Source",
      title: "Build for Nepal",
      title1: "Build for Nepal",
      desc: "Build for Nepal is an initiative and effort to creating open datasets and build open source softwares for Nepal. Techgaun Nepal acts as a facilitator but its really the community that gives the life to this open source initiative.",
      link: "https://github.com/build-for-nepal",
      linkText: "Visit Github",
    },
    {
      tagline: "RamroLink",
      title: "Techgaun Nepal",
      title1: "Techgaun Nepal",
      desc: "RamroLink is a platform built to empower creators, influencers, and individuals with powerful, customizable link- in-bio tools. It's more than just a landing page—it's your digital identity, organized beautifully.",
      link: "https://ramro.link",
      linkText: "Visit RamroLink",
    },
  ];

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
    imageTrack.style.transition = "transform 0.5s ease-in-out";
    imageTrack.style.transform = `translateX(-${index * 100}%)`;
    updateContent();

    imageTrack.addEventListener("transitionend", handleLoop, { once: true });
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

  nextButton.addEventListener("click", () => {
    index++;
    moveSlide();
  });

  prevButton.addEventListener("click", () => {
    index--;
    moveSlide();
  });

  // Set initial position to middle copy
  imageTrack.style.transition = "none";
  imageTrack.style.transform = `translateX(-${index * 100}%)`;
  updateContent();
});
