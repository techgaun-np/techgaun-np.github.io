import { teamData } from "./teams-data.js";

export function renderTeam(containerId) {
  const teamContainer = document.getElementById(containerId);
  if (!teamContainer) return;

  teamData.forEach((member) => {
    const memberCard = `
      <div class="team-member">
        <img src="${member.image}" alt="${member.name}" class="team-img">
        <h3>${member.name}</h3>
        <p>${member.role}</p>
        <p>${member.description}</p>
        <div class="social-links">
          <a href="${member.socialLinks.reddit}" target="_blank">Reddit</a>
          <a href="${member.socialLinks.facebook}" target="_blank">Facebook</a>
          <a href="${member.socialLinks.github}" target="_blank">GitHub</a>
        </div>
      </div>
    `;
    teamContainer.innerHTML += memberCard;
  });
}
