document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const serviceData = [
    {
      title: "AI Pipelines",
      description:
        "At Techgaun, we specialize in architecting and optimizing AI pipelines that are not just functional but transformative. Whether you're looking to launch an LLM-powered application, refine your model’s performance, or overhaul your prompting strategies, we offer full-spectrum expertise grounded in real-world deployments.",
      img: "assets/images/services/ai-pipelines.png",
      icons: [
        { img: "assets/images/services/llms.svg", desc: "Build with LLMs" },
        {
          img: "assets/images/services/setting.svg",
          desc: "Tune Your Prompts",
        },
        { img: "assets/images/services/star.svg", desc: "Fine-Tune Models" },
      ],
    },
    {
      title: "Web Application Development",
      description:
        "We build powerful, scalable web applications tailored to your business logic and user needs. Our team partners closely with you to understand the problem space, select the most effective technologies, and deliver secure, high-performance solutions that grow with your users. From idea to deployment—we don’t just code, we collaborate.",
      img: "assets/images/services/web-dev.png",
      icons: [
        {
          img: "assets/images/services/round-star.svg",
          desc: "Understand & Align",
        },
        {
          img: "assets/images/services/llms.svg",
          desc: "Choose the Right Stack",
        },
        { img: "assets/images/services/setting.svg", desc: "Build & Deliver" },
      ],
    },
    {
      title: "Mobile Application Development",
      description:
        "At Techgaun, we specialize in architecting and optimizing mobile applications that are not just functional but transformative. Whether you're looking to launch a new app, refine your existing mobile experience, or overhaul your app's architecture, we offer full-spectrum expertise grounded in real-world deployments.",
      img: "assets/images/services/mobile-dev.png",
      icons: [
        { img: "assets/images/services/tree.svg", desc: "Cross-Platform" },
        { img: "assets/images/services/setting.svg", desc: "Go Native" },
        {
          img: "assets/images/services/colorful.svg",
          desc: "Design for Users",
        },
      ],
    },
    {
      title: "Cloud Strategy",
      description:
        "We help you architect and implement robust cloud environments across AWS, Azure, and GCP. Our team supports everything from network segmentation to application-level abstraction, using tools like Terraform and cloud-native IaC platforms. Whether you're modernizing or starting from scratch, we bring precision, scale, and strategy to your cloud.",
      img: "assets/images/services/cloud.png",
      icons: [
        { img: "assets/images/services/cloud-icon.svg", desc: "Start Fresh" },
        { img: "assets/images/services/llms.svg", desc: "Architect for Scale" },
        {
          img: "assets/images/services/setting.svg",
          desc: "Automate with IaC",
        },
      ],
    },
    {
      title: "App Modernization",
      description:
        "We help transform legacy systems into modern, scalable applications. Whether it’s breaking down monoliths, updating outdated architectures, or re-platforming entire stacks—our approach is tailored, pragmatic, and proven. No silver bullets—just expert strategy built around your unique tech, team, and timeline.",
      img: "assets/images/services/app-modernization.png",
      icons: [
        {
          img: "assets/images/services/search.svg",
          desc: "Assess & Strategize",
        },
        {
          img: "assets/images/services/note.svg",
          desc: "Modularize & Modernize",
        },
        { img: "assets/images/services/chart.svg", desc: "Upgrade & Scale" },
      ],
    },
    {
      title: "Architecture and Security Review",
      description:
        "At Techgaun, we specialize in architecting and optimizing AI pipelines that are not just functional but transformative. Whether you're looking to launch an LLM-powered application, refine your model’s performance, or overhaul your prompting strategies, we offer full-spectrum expertise grounded in real-world deployments.",
      img: "assets/images/services/architecture.png",
      icons: [
        { img: "assets/images/services/search.svg", desc: "Assess Blueprint" },
        { img: "assets/images/services/llms.svg", desc: "Harden the Stack" },
        { img: "assets/images/services/shield.svg", desc: "Deliver" },
      ],
    },
  ];

  const serviceContent = document.querySelector(".service-content");
  let currentIndex = 0;
  const isMobile = window.matchMedia("(max-width: 1024px)").matches;

  function renderService(index) {
    if (isMobile && serviceContent.children.length > 0) {
      const oldContent = serviceContent.children[0];
      gsap.to(oldContent, {
        opacity: 0,
        y: -20,
        duration: 0.8,
        onComplete: () => {
          renderNewContent(index);
        },
      });
    } else {
      renderNewContent(index);
    }
  }

  function renderNewContent(index) {
    const newService = serviceData[index];
    const wrapper = document.querySelector(".carousel-transition-wrapper");

    const buildHTML = () => `
      <div class="carousel-transition-wrapper">
        <div class="services-grid ${isMobile ? "mobile-carousel" : ""}">
          <img class="service-scroll-img" src="${newService.img}" alt="${
      newService.title
    }">
          <div class="service-scroll-content">
            <h2 class="service-scroll-title">${newService.title}</h2>
            <p class="service-scroll-description">${newService.description}</p>
            <div class="service-hero-icons">
              ${newService.icons
                .map(
                  (icon, i) => `
                  <div class="service-hero-icon-wrapper">
                    <img src="${icon.img}" class="service-hero-icon" alt="icon">
                    <p class="service-hero-icon-desc">${icon.desc}</p>
                  </div>
                  ${
                    i !== newService.icons.length - 1
                      ? '<p class="rotate-icon">↓</p>'
                      : ""
                  }
                `
                )
                .join("")}
            </div>
          </div>
          ${
            isMobile
              ? `
            <div class="carousel-controls">
              <button class="carousel-prev">←</button>
              <div class="carousel-indicators">
                ${serviceData
                  .map(
                    (_, i) =>
                      `<span class="indicator ${
                        i === index ? "active" : ""
                      }" data-index="${i}"></span>`
                  )
                  .join("")}
              </div>
              <button class="carousel-next">→</button>
            </div>
          `
              : ""
          }
        </div>
      </div>
    `;

    const insertAndAnimate = () => {
      serviceContent.innerHTML = buildHTML();
      gsap.fromTo(
        ".carousel-transition-wrapper",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4 }
      );
      if (isMobile) bindCarouselControls();
    };

    if (wrapper) {
      gsap.to(wrapper, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        onComplete: insertAndAnimate,
      });
    } else {
      insertAndAnimate();
    }
  }

  function bindCarouselControls() {
    document.querySelector(".carousel-prev")?.addEventListener("click", () => {
      currentIndex =
        (currentIndex - 1 + serviceData.length) % serviceData.length;
      renderService(currentIndex);
    });

    document.querySelector(".carousel-next")?.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % serviceData.length;
      renderService(currentIndex);
    });

    document.querySelectorAll(".indicator").forEach((indicator) => {
      indicator.addEventListener("click", () => {
        currentIndex = parseInt(indicator.dataset.index);
        renderService(currentIndex);
      });
    });
  }

  // Initial render
  renderService(0);

  if (!isMobile) {
    ScrollTrigger.create({
      trigger: ".service-scroll-wrapper",
      start: "top top",
      end: `+=${window.innerHeight * serviceData.length}`,
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        const index = Math.min(
          serviceData.length - 1,
          Math.floor(self.progress * serviceData.length)
        );
        if (index !== currentIndex) {
          currentIndex = index;
          renderService(currentIndex);
        }
      },
    });
  }

  // Morph SVG path animation (optional part)
  const path = document.getElementById("morphPath");
  if (path) {
    const shapes = [
      "M100,20 C130,20 170,60 170,100 C170,140 130,180 100,180 C70,180 30,140 30,100 C30,60 70,20 100,20Z",
      "M100,25 C135,25 175,70 160,110 C155,155 120,185 100,175 C70,170 30,140 35,100 C40,55 65,25 100,25Z",
      "M100,30 C140,20 170,60 165,100 C160,150 120,180 90,170 C60,160 25,130 30,90 C40,50 60,30 100,30Z",
    ];

    let i = 0;
    setInterval(() => {
      path.setAttribute("d", shapes[i % shapes.length]);
      i++;
    }, 2500);
  }
});
