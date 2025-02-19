document.addEventListener("DOMContentLoaded", function () {
  const teamContainer = document.querySelector(".team-container");

  if (teamContainer && window.teamData) {
    // Sorting teamData alphabetically by name
    window.teamData.sort((a, b) => a.name.localeCompare(b.name));

    const teamHTML = `
      <div class="team-container-wrapper">
        <h2 class="group-heading">Get to know us</h2>
        <p class="group-desc">We are a passionate team of diverse experts dedicated to crafting exceptional software solutions. We collaboratively transform innovative ideas into impactful solutions. We believe in the power of teamwork and creativity, and we're driven by a shared commitment to excellence, ensuring that every product we build reflects our enthusiasm for what we do.</p>
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
            <div class="card grid-5">
            <a href="/careers">
                  <div class="card-inner">
                    <div class="default-content card-face">
                      <img src="./assets/images/team/you.svg" alt="Your Picture" class="your-img">
                      <div class="team-content">
                        <h3 class="your-title">Join Us Now</h3>
                      </div>
                    </div>
                    <div class="alternate-content your-alternate-content card-face">
                      <h3 class="team-name">Click to join us</h3>
                      <p class="team-description">Be a part of something big</p>
                      
                    </div>
                    
                  </div>
                  </a>
                </div>
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
        card.classList.remove("flipped-back");
        button1.classList.add("active");
        button2.classList.remove("active");
      });

      button2.addEventListener("click", () => {
        if (card.classList.contains("flipped")) {
          console.log("flipping card by bt2");
          card.classList.remove("flipped");
        }
        card.classList.add("flipped-back");
        button2.classList.add("active");
        button1.classList.remove("active");
      });
    });
  }
});
