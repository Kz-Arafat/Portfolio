 // =========================
        // FORM VALIDATION
        // =========================

        const form = document.querySelector("form");

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const message = document.querySelector("#message").value.trim();

            if (name === "") {
                alert("Please enter your name.");
                return;
            }

            if (email === "") {
                alert("Please enter your email.");
                return;
            }

            if (message === "") {
                alert("Please write a message.");
                return;
            }

            alert("Message sent successfully!");

            form.reset();
        });


        // =========================
        // SCROLL REVEAL
        // =========================

        const sections = document.querySelectorAll("main section, main table, main form");

        sections.forEach(function (section) {
            section.classList.add("reveal");
        });


        function revealSections() {

            sections.forEach(function (section) {

                const position = section.getBoundingClientRect().top;

                if (position < window.innerHeight - 100) {
                    section.classList.add("show");
                }

            });

        }

        window.addEventListener("scroll", revealSections);

        revealSections();