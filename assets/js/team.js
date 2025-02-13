document.addEventListener("DOMContentLoaded", function () {
  const teamContainer = document.querySelector(".team-container");

  if (teamContainer && window.teamData) {
    const teamHTML = `
      <div class="team-container-wrapper">
        <h2 class="group-heading">Meet Our Talented Team</h2>
        <p class="group-desc">Our team is a diverse group of experts who bring a wide range of skills, from creative design to technical development, strategic planning, and problem-solving. Together, we collaborate to turn ideas into innovative solutions that drive our success.</p>
        <div class="grid">
          ${window.teamData
            .map((member, index) => {
              let gridClass = "";
              if (index < 2) {
                gridClass = "grid-1";
              } else if (index < 5) {
                gridClass = "grid-2";
              } else if (index < 7) {
                gridClass = "grid-3";
              } else {
                gridClass = "grid-4";
              }
              return `
                <div class="card ${gridClass}" data-member-id="${index}">
                  <div class="card-inner">
                    <div class="default-content card-face">
                      <img src="${member.image}" alt="${
                member.name
              }" class="team-img">
                      <div class="team-content">
                        <h3 class="team-name">${member.name}</h3>
                        <p class="team-role">${member.role}</p>
                      </div>
                    </div>
                    <div class="alternate-content card-face">
                      <h3 class="team-name">${member.name}</h3>
                      <p class="team-role">${member.role}</p> 
                      <p class="team-description">${member.description}</p>
                      <div class="social-links">
                        ${
                          member.github
                            ? `<a href="${member.github}" target="_blank" class="github"></a>`
                            : ""
                        }
                        ${
                          member.linkedin
                            ? `<a href="${member.linkedin}" target="_blank" class="linkedin"></a>`
                            : ""
                        }
                      </div>
                    </div>
                  </div>
                  <div class="team-info-button">
                    <div class="button-dot button1 active"></div>
                    <div class="button-dot button2"></div>
                  </div>
                </div>
              `;
            })
            .join("")}
        </div>
      </div>
    `;

    teamContainer.innerHTML = teamHTML;

    const cards = document.querySelectorAll(".card");

    const observerOptions = {
      threshold: 0.01,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    }, observerOptions);

    cards.forEach((card) => observer.observe(card));

    cards.forEach((card) => {
      const button1 = card.querySelector(".button1");
      const button2 = card.querySelector(".button2");

      button1.addEventListener("click", () => {
        if (!card.classList.contains("flipped")) {
          console.log("flipping card by bt1");
          card.classList.add("flipped");
        }
        button1.classList.add("active");
        button2.classList.remove("active");
      });

      button2.addEventListener("click", () => {
        if (card.classList.contains("flipped")) {
          console.log("flipping card by bt2");
          card.classList.remove("flipped");
        }
        button2.classList.add("active");
        button1.classList.remove("active");
      });
    });
  }
});
