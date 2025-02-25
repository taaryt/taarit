document.addEventListener("DOMContentLoaded", () => {
    // Mode sombre
    const toggleBtn = document.getElementById("dark-mode-toggle");
    const body = document.body;

    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            body.classList.toggle("dark-mode");
            localStorage.setItem("darkMode", body.classList.contains("dark-mode") ? "enabled" : "disabled");
        });
    }

    // Défilement fluide
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Galerie d'images interactive
    document.querySelectorAll('.interet img').forEach(img => {
        img.addEventListener('click', function () {
            const modal = document.createElement("div");
            modal.classList.add("modal");
            modal.innerHTML = `<div class="modal-content"><img src="${this.src}" alt="Image"><span class="close">&times;</span></div>`;
            document.body.appendChild(modal);

            modal.querySelector(".close").addEventListener("click", () => modal.remove());
            modal.addEventListener("click", (e) => { if (e.target === modal) modal.remove(); });
        });
    });

    // Effet d'écriture dynamique
    const text = "Bienvenue sur mon site ! Passionné par l'informatique et le développement.";
    let index = 0;
    function typeWriter() {
        if (index < text.length) {
            document.getElementById("intro-text").textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }
    if (document.getElementById("intro-text")) {
        typeWriter();
    }
});
