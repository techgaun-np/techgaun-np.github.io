function toggleDepartment(departmentId) {
    const department = document.getElementById(departmentId);
    const icon = department.previousElementSibling.querySelector('.toggle-icon');

    // Toggle the active class
    department.classList.toggle('active');

    // Update the icon
    icon.textContent = department.classList.contains('active') ? '−' : '+';
}

function populateCareers() {
    const careersList = document.getElementById('careers-list');

    window.careerData.forEach((department, index) => {
        const departmentHtml = `
            <div class="department">
                <div class="department-header" onclick="toggleDepartment('${department.id}')">
                    <h2>${department.title}</h2>
                    <span class="toggle-icon">${index === 0 ? '−' : '+'}</span>
                </div>
                <div class="job-listings ${index === 0 ? 'active' : ''}" id="${department.id}">
                    ${department.jobs.map(job => `
                        <div class="job-card">
                            <h3>${job.title}</h3>
                            <p class="location">📍 ${job.location}</p>
                            <p class="experience">${job.experience}</p>
                            <div class="job-description">
                                <h4>Job Description:</h4>
                                <ul>
                                    ${job.description.map(item => `<li>${item}</li>`).join('')}
                                </ul>
                                <h4>Requirements:</h4>
                                <ul>
                                    ${job.requirements.map(item => `<li>${item}</li>`).join('')}
                                </ul>
                            </div>
                            <button class="apply-btn">Apply Now</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        careersList.insertAdjacentHTML('beforeend', departmentHtml);
    });
}

// Initialize careers section when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    const careersList = document.getElementById('careers-list');

    // Initialize careers section if it exists
    if (careersList && window.careerData) {
        populateCareers();
        // Set the first department (engineering) as active by default
        const firstDepartment = careersList.querySelector('.department:first-child .job-listings');
        if (firstDepartment) {
            firstDepartment.classList.add('active');
            firstDepartment.previousElementSibling.querySelector('.toggle-icon').textContent = '−';
        }
    }
}); 