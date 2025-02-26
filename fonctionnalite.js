// Mode sombre
const toggleDarkMode = document.createElement("button");
toggleDarkMode.innerText = "🌙";
toggleDarkMode.id = "dark-mode-toggle";
toggleDarkMode.style.position = "fixed";
toggleDarkMode.style.bottom = "20px";
toggleDarkMode.style.right = "20px";
toggleDarkMode.style.padding = "10px";
toggleDarkMode.style.borderRadius = "50%";
document.body.appendChild(toggleDarkMode);

const applyDarkMode = (enabled) => {
    document.body.classList.toggle("dark-mode", enabled);
    localStorage.setItem("darkMode", enabled);
    toggleDarkMode.innerText = enabled ? "☀️" : "🌙";
};

toggleDarkMode.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-mode");
    applyDarkMode(!isDark);
});

// Vérifier le mode sombre sauvegardé
if (localStorage.getItem("darkMode") === "true") {
    applyDarkMode(true);
}




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
