window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = 1;
    });
    document.getElementById('year').textContent = new Date().getFullYear();
});