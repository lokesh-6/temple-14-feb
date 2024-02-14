document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".li");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.forEach(function (navLink) {
                navLink.classList.remove("active");
            });
            this.classList.add("active");
        });
    });
});
