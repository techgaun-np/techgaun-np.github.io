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
                            <button class="apply-btn" onclick="openApplyModal('${job.title}', '${department.title}')">Apply Now</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        careersList.insertAdjacentHTML('beforeend', departmentHtml);
    });
}

// Add these new functions for modal handling
function openApplyModal(jobTitle, department) {
    const modal = document.getElementById('apply-modal');
    const jobTitleDisplay = document.getElementById('job-title-display');
    const jobTitleInput = document.getElementById('job-title-input');
    const departmentInput = document.getElementById('department-input');

    jobTitleDisplay.textContent = jobTitle;
    jobTitleInput.value = jobTitle;
    departmentInput.value = department;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

function closeModal() {
    const modal = document.getElementById('apply-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Add these validation functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Allows formats: +977-9812345678, 9812345678, 977-9812345678
    const phoneRegex = /^(\+977-?)?[0-9]{10}$/;
    return phoneRegex.test(phone.replace(/[\s-]/g, ''));
}

function isValidResumeUrl(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
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

    // Modal close button
    const closeBtn = document.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside
    window.addEventListener('click', function (event) {
        const modal = document.getElementById('apply-modal');
        if (event.target === modal) {
            closeModal();
        }
    });

    // Add input validation handlers
    const applicationForm = document.getElementById('job-application-form');
    if (applicationForm) {
        const emailInput = applicationForm.querySelector('input[name="from_email"]');
        const phoneInput = applicationForm.querySelector('input[name="from_phone"]');
        const resumeInput = applicationForm.querySelector('input[name="resume"]');

        // Email validation
        emailInput.addEventListener('input', function () {
            if (!isValidEmail(this.value)) {
                this.setCustomValidity('Please enter a valid email address');
                this.classList.add('invalid');
            } else {
                this.setCustomValidity('');
                this.classList.remove('invalid');
            }
        });

        // Phone validation
        phoneInput.addEventListener('input', function () {
            if (this.value && !isValidPhone(this.value)) {
                this.setCustomValidity('Please enter a valid phone number (e.g., +977-9812345678)');
                this.classList.add('invalid');
            } else {
                this.setCustomValidity('');
                this.classList.remove('invalid');
            }
        });

        // Resume URL validation
        resumeInput.addEventListener('input', function () {
            if (!isValidResumeUrl(this.value)) {
                this.setCustomValidity('Please enter a valid URL');
                this.classList.add('invalid');
            } else {
                this.setCustomValidity('');
                this.classList.remove('invalid');
            }
        });

        // Form submission
        applicationForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            const email = emailInput.value;
            const phone = phoneInput.value;
            const resumeUrl = resumeInput.value;

            // Validate all fields
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address');
                emailInput.focus();
                return;
            }

            if (phone && !isValidPhone(phone)) {
                alert('Please enter a valid phone number');
                phoneInput.focus();
                return;
            }

            if (!isValidResumeUrl(resumeUrl)) {
                alert('Please enter a valid URL');
                resumeInput.focus();
                return;
            }

            // Disable submit button and show loading state
            const submitButton = applicationForm.querySelector('button[type="submit"]');
            const successMessage = document.getElementById('application-success-message');
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';

            const SERVICE_ID = "service_008lxmj";
            const TEMPLATE_ID = "template_rodhwgv";

            try {
                // Create template parameters
                const templateParams = {
                    from_name: applicationForm.from_name.value,
                    from_email: email,
                    from_phone: phone,
                    message: applicationForm.message.value,
                    job_title: applicationForm.job_title.value,
                    department: applicationForm.department.value,
                    resume_link: resumeUrl
                };

                // Send email with application details
                await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);

                // Handle success
                applicationForm.reset();
                successMessage.style.display = 'block';
                submitButton.style.display = 'none';

                // Hide success message and close modal after 5 seconds
                setTimeout(function () {
                    successMessage.style.display = 'none';
                    submitButton.style.display = 'block';
                    submitButton.disabled = false;
                    submitButton.textContent = 'Submit Application';
                    closeModal();
                }, 5000);
            } catch (error) {
                console.error('Failed:', error);
                submitButton.disabled = false;
                submitButton.textContent = 'Submit Application';
                alert('Failed to send the application. Please try again or contact us directly.');
            }
        });
    }
}); 