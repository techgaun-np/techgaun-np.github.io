document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".tab-links li a").forEach((tabLink) => {
    tabLink.addEventListener("click", function (e) {
      const target = this.getAttribute("href");

      document.querySelectorAll(".tab-links li").forEach((li) => {
        li.classList.remove("active");
      });

      this.parentElement.classList.add("active");

      document.querySelectorAll(".tab-item").forEach((item) => {
        item.classList.remove("active");
      });

      document.querySelector(target).classList.add("active");
    });
  });

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  };

  const tabObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;

        document.querySelectorAll(".tab-links li").forEach((li) => {
          li.classList.remove("active");
        });

        const matchingTab = document.querySelector(
          `.tab-links li a[href="#${id}"]`
        );

        if (matchingTab) {
          matchingTab.parentElement.classList.add("active");
        }
      }
    });
  }, observerOptions);

  document.querySelectorAll(".tab-item").forEach((section) => {
    tabObserver.observe(section);
  });

  gsap.registerPlugin(ScrollTrigger);

  const serviceData = [
    {
      title: "AI Pipelines",
      description:
        "At Techgaun, we specialize in architecting and optimizing AI pipelines that are not just functional but transformative. Whether you're looking to launch an LLM-powered application, refine your model’s performance, or overhaul your prompting strategies, we offer full-spectrum expertise grounded in real-world deployments.",
      img: "assets/images/services/ai-pipelines.png",
      icons: [
        {
          id: "1",
          title: "Build with LLMs",
          img: "assets/images/services/llms.svg",
          description:
            "We harness cutting-edge Large Language Models (LLMs) to construct robust AI solutions that align with your business needs. Our team specializes in integrating these advanced models to enhance automation, improve decision-making, and drive innovation across various industries.",
        },
        {
          id: "2",
          img: "assets/images/services/setting.svg",
          title: "Tune Your Prompts",
          description: `Unlock the full potential of AI models with Techgaun's prompt-tuning services. We guide you in refining the input prompts to optimize output accuracy and relevance, ensuring your AI solutions deliver precise and actionable results that meet your objectives.`,
        },
        {
          id: "3",
          title: "Fine-Tune Models",
          img: "assets/images/services/star.svg",
          description: `Customize AI models to fit your unique requirements with our fine-tuning services. We adjust pre-existing models, adding layers of specificity and precision, so they perform optimally in your specific use-case scenarios, whether it's enhancing user experience or streamlining operations.`,
        },
      ],
    },
    {
      title: "Web Application Development",
      description:
        "We build powerful, scalable web applications tailored to your business logic and user needs. Our team partners closely with you to understand the problem space, select the most effective technologies, and deliver secure, high-performance solutions that grow with your users. From idea to deployment—we don’t just code, we collaborate.",
      img: "assets/images/services/web-dev.png",
      icons: [
        {
          id: "1",
          title: "Understand & Align",
          img: "assets/images/services/round-star.svg",
          description:
            "At Techgaun, we begin our web application development process by thoroughly understanding your business goals and aligning our strategies to meet them. We engage in comprehensive consultations to ensure that our solutions are tailored to support your vision and drive your success.",
        },
        {
          id: "2",
          title: "Choose the Right Stack",
          img: "assets/images/services/llms.svg",
          description:
            "Selecting the appropriate technology stack is crucial for the success of your web application. Our experts assess your project requirements and advise on the best-fit technologies, ensuring scalability, performance, and a seamless user experience.",
        },
        {
          id: "3",
          title: "Build & Deliver",
          img: "assets/images/services/setting.svg",
          description:
            "With a focus on quality and efficiency, Techgaun takes your web application from conception to completion. Our experienced developers build robust, secure, and scalable applications, keeping you informed throughout the development process to deliver a product that exceeds expectations.",
        },
      ],
    },
    {
      title: "Mobile Application Development",
      description:
        "At Techgaun, we specialize in architecting and optimizing mobile applications that are not just functional but transformative. Whether you're looking to launch a new app, refine your existing mobile experience, or overhaul your app's architecture, we offer full-spectrum expertise grounded in real-world deployments.",
      img: "assets/images/services/mobile-dev.png",
      icons: [
        {
          id: "1",
          title: "Cross-Platform",
          img: "assets/images/services/tree.svg",
          description:
            " Techgaun helps you embark on a new cloud journey by building scalable, secure, and efficient cloud environments from the ground up. We tailor cloud solutions to your specific needs, ensuring a strong foundation for future growth and innovation.",
        },
        {
          id: "2",
          title: "Go Native",
          img: "assets/images/services/setting.svg",
          description:
            "Planning for scale is essential for long-term success. Our experts design cloud architectures that seamlessly accommodate your expanding data and user demands, ensuring reliability, performance, and cost-efficiency as your business grows.",
        },
        {
          id: "3",
          title: "Design for Users",
          img: "assets/images/services/colorful.svg",
          description:
            "Streamline your cloud operations through Infrastructure as Code (IaC). Techgaun automates deployment, configuration, and management processes, reducing manual effort, minimizing errors, and enabling rapid, consistent, and repeatable infrastructure updates.",
        },
      ],
    },
    {
      title: "Cloud Strategy",
      description:
        "We help you architect and implement robust cloud environments across AWS, Azure, and GCP. Our team supports everything from network segmentation to application-level abstraction, using tools like Terraform and cloud-native IaC platforms. Whether you're modernizing or starting from scratch, we bring precision, scale, and strategy to your cloud.",
      img: "assets/images/services/cloud.png",
      icons: [
        {
          id: "1",
          title: "Start Fresh",
          img: "assets/images/services/cloud-icon.svg",
          description:
            " Techgaun helps you embark on a new cloud journey by building scalable, secure, and efficient cloud environments from the ground up. We tailor cloud solutions to your specific needs, ensuring a strong foundation for future growth and innovation.",
        },
        {
          id: "2",
          title: "Architect for Scale",
          img: "assets/images/services/llms.svg",
          description:
            " Planning for scale is essential for long-term success. Our experts design cloud architectures that seamlessly accommodate your expanding data and user demands, ensuring reliability, performance, and cost-efficiency as your business grows.",
        },
        {
          id: "3",
          title: "Automate with IaC",
          img: "assets/images/services/setting.svg",
          description:
            "Streamline your cloud operations through Infrastructure as Code (IaC). Techgaun automates deployment, configuration, and management processes, reducing manual effort, minimizing errors, and enabling rapid, consistent, and repeatable infrastructure updates.",
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
          id: "1",
          title: "Assess & Strategize",
          img: "assets/images/services/search.svg",
          description:
            "Techgaun begins with a comprehensive assessment of your existing applications to identify gaps and opportunities. We then develop a tailored modernization strategy that aligns with your business goals and sets the stage for future growth.",
        },
        {
          id: "2",
          title: "Modularize & Modernize",
          img: "assets/images/services/note.svg",
          description:
            " We break down monolithic applications into modular components, incorporating modern technologies and architectures. This approach enhances flexibility, agility, and maintainability, making your applications more adaptable to evolving needs.",
        },
        {
          id: "3",
          title: "Upgrade & Scale",
          img: "assets/images/services/chart.svg",
          description:
            "Techgaun ensures your applications are upgraded with the latest frameworks, tools, and security protocols. We enable scalable solutions that support increased workload and user demands, helping your business stay competitive and innovative.",
        },
      ],
    },
    {
      title: "Architecture and Security Review",
      description:
        "At Techgaun, we specialize in architecting and optimizing AI pipelines that are not just functional but transformative. Whether you're looking to launch an LLM-powered application, refine your model’s performance, or overhaul your prompting strategies, we offer full-spectrum expertise grounded in real-world deployments.",
      img: "assets/images/services/architecture.png",
      icons: [
        {
          id: "1",
          img: "assets/images/services/search.svg",
          title: "Assess Blueprint",
          description:
            "Techgaun conducts a thorough evaluation of your existing architecture and security policies to identify vulnerabilities and areas for improvement. This foundational assessment ensures your infrastructure is aligned with best practices.",
        },
        {
          id: "2",
          img: "assets/images/services/llms.svg",
          title: "Harden the Stack",
          description:
            "We reinforce your technology stack by implementing robust security measures, removing weaknesses, and establishing strong defense mechanisms. Our goal is to safeguard your systems against threats and ensure compliance with industry standards.",
        },
        {
          id: "3",
          img: "assets/images/services/shield.svg",
          title: "Deliver",
          description:
            " After comprehensive analysis and enhancements, Techgaun provides a detailed report and actionable recommendations, delivering a secure, resilient, and optimized architecture ready to support your business operations effectively.",
        },
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
    let iconCarouselInterval;
    let currentActiveDescIndex = 0;

    const buildHTML = () => `
      <div class="carousel-transition-wrapper">
        <div class="services-grid ${isMobile ? "mobile-carousel" : ""}">
          <img class="service-scroll-img" src="${newService.img}" alt="${
      newService.title
    }">
          <div class="service-scroll-content">
            <h2 class="service-scroll-title">${newService.title}</h2>
            <p class="service-scroll-description">${newService.description}</p>
            <div class="service-hero-icons-container">
              <div class="service-hero-icons">
                ${newService.icons
                  .map(
                    (icon, i) => `
                    <div class="service-hero-icon-wrapper" data-index="${i}">
                      <img src="${icon.img}" class="service-hero-icon" alt="icon">
                      <p class="service-hero-icon-desc">${icon.title}</p>
                    </div>
                  `
                  )
                  .join("")}
              </div>
              <div class="service-hero-description-container">
                ${newService.icons
                  .map(
                    (icon, i) => `
                    <p class="service-hero-icon-description ${
                      i === 0 ? "active" : ""
                    }" data-index="${i}">${icon.description}</p>
                  `
                  )
                  .join("")}
              </div>
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

    const bindIconInteractions = () => {
      const iconWrappers = document.querySelectorAll(
        ".service-hero-icon-wrapper"
      );
      const descriptions = document.querySelectorAll(
        ".service-hero-icon-description"
      );

      if (!iconWrappers.length) return;

      if (iconCarouselInterval) clearInterval(iconCarouselInterval);

      iconCarouselInterval = setInterval(() => {
        currentActiveDescIndex =
          (currentActiveDescIndex + 1) % descriptions.length;
        updateActiveDescription();
      }, 4000);

      const updateActiveDescription = () => {
        descriptions.forEach((desc) => {
          desc.classList.remove("active");
          if (parseInt(desc.dataset.index) === currentActiveDescIndex) {
            desc.classList.add("active");
          }
        });

        iconWrappers.forEach((wrapper) => {
          wrapper.classList.remove("active");
          if (parseInt(wrapper.dataset.index) === currentActiveDescIndex) {
            wrapper.classList.add("active");
          }
        });
      };

      iconWrappers.forEach((wrapper) => {
        wrapper.addEventListener("mouseenter", () => {
          currentActiveDescIndex = parseInt(wrapper.dataset.index);
          updateActiveDescription();
          resetAutoRotation();
        });
      });

      const resetAutoRotation = () => {
        clearInterval(iconCarouselInterval);
        iconCarouselInterval = setInterval(() => {
          currentActiveDescIndex =
            (currentActiveDescIndex + 1) % descriptions.length;
          updateActiveDescription();
        }, 4000);
      };

      updateActiveDescription();
    };

    const insertAndAnimate = () => {
      serviceContent.innerHTML = buildHTML();
      gsap.fromTo(
        ".carousel-transition-wrapper",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          onComplete: bindIconInteractions,
        }
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
