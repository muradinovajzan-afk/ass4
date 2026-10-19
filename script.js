document.addEventListener("DOMContentLoaded", () => {
    // --- Task 5: Display Current Date and Time ---
    function updateDateTime() {
        const banner = document.getElementById("datetime-banner");
        if (banner) {
            const now = new Date();
            const options = { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit',
                second: '2-digit'
            };
            banner.textContent = "Current Date & Time: " + now.toLocaleDateString('en-US', options);
        }
    }
    updateDateTime();
    setInterval(updateDateTime, 1000);

    // --- Task 4: Change Background Color with JavaScript ---
    const bgButton = document.getElementById("changeBgBtn");
    if (bgButton) {
        const colors = ["#f5f5f5", "#e3f2fd", "#fce4ec", "#e8f5e9", "#fff3e0", "#f3e5f5"];
        let colorIndex = 0;
        bgButton.addEventListener("click", () => {
            colorIndex = (colorIndex + 1) % colors.length;
            document.body.style.backgroundColor = colors[colorIndex];
        });
    }

    // --- Task 3: Popup Subscription Form ---
    const openPopupBtn = document.getElementById("openPopupBtn");
    const closePopupBtn = document.getElementById("closePopupBtn");
    const subscribeModal = document.getElementById("subscribeModal");
    const popupSubForm = document.getElementById("popupSubForm");

    if (openPopupBtn && subscribeModal) {
        openPopupBtn.addEventListener("click", (e) => {
            e.preventDefault();
            subscribeModal.style.display = "flex";
        });
    }

    if (closePopupBtn && subscribeModal) {
        closePopupBtn.addEventListener("click", () => {
            subscribeModal.style.display = "none";
        });
    }

    if (subscribeModal) {
        window.addEventListener("click", (e) => {
            if (e.target === subscribeModal) {
                subscribeModal.style.display = "none";
            }
        });
    }

    if (popupSubForm) {
        popupSubForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const emailInput = document.getElementById("popupEmail");
            if (emailInput.value.trim() !== "") {
                alert("Thank you for subscribing, " + emailInput.value + "!");
                subscribeModal.style.display = "none";
                popupSubForm.reset();
            }
        });
    }

    // --- Task 1: Form Validation ---
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            let isValid = true;

            const nameField = document.getElementById("name");
            const emailField = document.getElementById("email");
            const dateField = document.getElementById("date");
            const formAlert = document.getElementById("form-alert");

            // Simple validation checks
            if (!nameField.value.trim()) {
                nameField.classList.add("is-invalid");
                isValid = false;
            } else {
                nameField.classList.remove("is-invalid");
            }

            const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
            if (!emailField.value.trim() || !emailPattern.test(emailField.value)) {
                emailField.classList.add("is-invalid");
                isValid = false;
            } else {
                emailField.classList.remove("is-invalid");
            }

            if (!dateField.value) {
                dateField.classList.add("is-invalid");
                isValid = false;
            } else {
                dateField.classList.remove("is-invalid");
            }

            if (formAlert) {
                formAlert.classList.remove("d-none");
                if (isValid) {
                    formAlert.className = "alert alert-success";
                    formAlert.textContent = "Success! Your booking request has been validated and submitted.";
                    contactForm.reset();
                } else {
                    formAlert.className = "alert alert-danger";
                    formAlert.textContent = "Please correct the highlighted errors before submitting.";
                }
            }
        });
    }
});