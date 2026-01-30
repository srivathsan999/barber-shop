document.addEventListener('DOMContentLoaded', () => {
    const themeToggles = document.querySelectorAll('#theme-toggle, .theme-toggle-btn');

    // Check local storage or preference
    const currentTheme = localStorage.getItem('theme');

    const updateIcons = (isDark) => {
        themeToggles.forEach(toggle => {
            const icon = toggle.querySelector('i');
            if (icon) {
                icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
            }
        });
    };

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        updateIcons(true);
    } else {
        updateIcons(false);
    }

    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.toggle('dark-mode');

            const isDark = document.body.classList.contains('dark-mode');
            const theme = isDark ? 'dark' : 'light';

            updateIcons(isDark);
            localStorage.setItem('theme', theme);
        });
    });
});
