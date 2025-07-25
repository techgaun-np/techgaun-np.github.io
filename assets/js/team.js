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
              if (index < 10) {
                gridClass = "grid-2";
              } else if (index < 5) {
                gridClass = "grid-1";
              } else if (index < 8) {
                gridClass = "grid-2";
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
            <div class="card grid-2">
            <a href="/careers">
                  <div class="card-inner">
                    <div class="default-content card-face">
                                                              <img src="./assets/images/team/backimg.png" alt="Your Picture" class="your-img">

                      
                      <div class="team-content">
                      
                      </div>
                    </div>
                    <div class="alternate-content your-alternate-content card-face">
                      <img src="./assets/images/team/joinus.png" alt="Your Picture" class="your-img flipped-img">
                          <dotlottie-player
                            src="https://lottie.host/bc20c809-5385-43b6-94e4-46b1f098db36/He8mjoYkmm.lottie"
                            background="transparent"
                            speed="1"
                            style="width: 110px; height: 110px; position: absolute; top: -20px; left: 31%;"
                            loop
                            autoplay
                          ></dotlottie-player>

                    </div>
                          <h3 class="your-title join">Join Us</h3>

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
