// Theme Switcher
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.createElement("button");
    themeToggle.textContent = "Toggle Theme";
    themeToggle.style.position = "fixed";
    themeToggle.style.bottom = "20px";
    themeToggle.style.right = "20px";
    themeToggle.style.padding = "10px 15px";
    themeToggle.style.background = "#f0a500";
    themeToggle.style.color = "#333";
    themeToggle.style.border = "none";
    themeToggle.style.borderRadius = "5px";
    themeToggle.style.cursor = "pointer";

    document.body.appendChild(themeToggle);

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });
});

// Dark Theme Styles
const style = document.createElement("style");
style.textContent = `
    .dark-theme {
        background-color: #121212;
        color: #f4f4f4;
    }
`;
document.head.appendChild(style);
