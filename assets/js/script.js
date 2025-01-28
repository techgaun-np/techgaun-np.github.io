//scroll to top
window.onscroll = function () {
    var scrollButton = document.getElementById('scroll-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
};

function scrollToTop() {
    window.scroll({ top: 0, behavior: 'smooth' })
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

// Initialize emailjs
(function () {
    emailjs.init({
        publicKey: "-j9iqbK7XwOzki-g6",
    });
})();

document.addEventListener("DOMContentLoaded", function () {
    // Contact form submission section
    var contactForm = document.getElementById('contact-form');
    var successMessage = document.getElementById('success-message');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        var submitButton = contactForm.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        emailjs.sendForm('service_008lxmj', 'template_wiuzc5o', this)
            .then(function () {
                contactForm.reset();
                // contactForm.style.display = 'none';
                successMessage.style.display = 'block';

                setTimeout(function () {
                    successMessage.style.display = 'none';
                    // contactForm.style.display = 'block';
                    submitButton.disabled = false;
                    submitButton.textContent = 'Submit';
                }, 5000);
            }, function (error) {
                // console.log('FAILED...', error);
                // alert('Failed to send the message. Please try again later.');
                submitButton.disabled = false;
                submitButton.textContent = 'Submit';
            });
    });
});