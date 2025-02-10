document.addEventListener("DOMContentLoaded", function () {
  const teamContainer = document.querySelector(".team-container");

  if (teamContainer && window.teamData) {
    const teamHTML = `
    <div class="team-container-wrapper">
      <h2 class="team-heading">Meet Our Talented Team</h2>
      <p class="team-desc">Our team is a diverse group of experts who bring a wide range of skills, from creative design to technical development, strategic planning, and problem-solving. Together, we collaborate to turn ideas into innovative solutions that drive our success.</p>
      <div class="grid">
        ${window.teamData
          .map(
            (member) => `
              <div class="card">
                <img src="${member.image}" alt="${
              member.name
            }" class="team-img">
                <h3>${member.name}</h3>
                <p class="team-role">${member.role}</p>
                <p class="team-info">${member.description}</p>
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
            `
          )
          .join("")}
      </div>
    </div>
    `;
    teamContainer.innerHTML = teamHTML;
  }
});
