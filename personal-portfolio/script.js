
document.addEventListener("DOMContentLoaded", () => {

    // 1. Automatically update the footer year
    const footer = document.querySelector("footer p");

    if (footer) {
        footer.textContent =
            `© ${new Date().getFullYear()} Ankit Dhakar. All rights reserved.`;
    }

    // 2. Contact form validation
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const formMessage = document.getElementById("formMessage");

            if (!name || !email || !message) {
                formMessage.textContent = "Please fill in all fields.";
                return;
            }

            // Validate name
            if (!/^[a-zA-Z]+(?:[ '-][a-zA-Z]+)*$/.test(name)) {
                formMessage.textContent =
                    "Please enter a valid name using letters only.";
                return;
            }

            // Validate email
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                formMessage.textContent = "Please enter a valid email.";
                return;
            }

            formMessage.textContent =
                `Thank you, ${name}! Your form is valid.`;

            contactForm.reset();
        });
    }

    // 3. Welcome message on project button click
    const projectButton = document.querySelector(".btn");

    if (projectButton) {
        projectButton.addEventListener("click", () => {
            console.log("Welcome to my portfolio!");
        });
    }

    // 4. Navigation click logging
    document.querySelectorAll(".navbar a").forEach((link) => {
        link.addEventListener("click", () => {
            console.log("Navigation:", link.textContent);
        });
    });

    // 5. Mobile menu toggle
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("show");

            menuToggle.textContent = isOpen ? "✕" : "☰";
            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );
        });

        // Close menu after clicking a navigation link
        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("show");
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );
            });
        });
    }

});
