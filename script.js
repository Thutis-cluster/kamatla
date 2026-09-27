/* =========================================
   BUILDCORE CONSTRUCTION
   JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");
    const quoteForm = document.getElementById("quoteForm");
    const formMessage = document.getElementById("formMessage");


    /* =====================================
       MOBILE MENU
    ===================================== */

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navMenu.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    /* =====================================
       CLOSE MENU AFTER CLICKING LINK
    ===================================== */

    document.querySelectorAll(".nav-menu a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });


    /* =====================================
       CLOSE MENU WHEN SCROLLING
    ===================================== */

    window.addEventListener("scroll", () => {

        if (navMenu.classList.contains("active")) {

            navMenu.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    /* =====================================
       QUOTE FORM
    ===================================== */

    quoteForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const service =
            document.getElementById("service").value;

        const message =
            document.getElementById("message").value.trim();


        if (
            !name ||
            !phone ||
            !email ||
            !service ||
            !message
        ) {

            formMessage.textContent =
                "Please complete all fields.";

            formMessage.style.color = "#d62828";

            return;
        }


        formMessage.textContent =
            "Thank you! Your enquiry has been received.";

        formMessage.style.color = "#218739";


        quoteForm.reset();

    });


    /* =====================================
       REVEAL ANIMATION
    ===================================== */

    const revealElements =
        document.querySelectorAll(
            ".service-card, .project-card, .process-step, .trust-item"
        );


    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";

                        revealObserver.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        revealObserver.observe(element);

    });

});
