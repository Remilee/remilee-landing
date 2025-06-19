window.addEventListener('DOMContentLoaded', () => {
    // 1. Анимации секций
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = 1;
    });

    // 2. Текущий год в футере
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // 3. Переключение темы
    const toggleButton = document.getElementById('themeToggle');
    const root = document.documentElement;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        root.setAttribute('data-theme', savedTheme);
        toggleButton.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    }

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            const currentTheme = root.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            root.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            toggleButton.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        });
    }
});
