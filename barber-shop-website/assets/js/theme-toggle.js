document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const icon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;

    // Check local storage or preference
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (icon) icon.className = 'fas fa-sun';
    } else {
        if (icon) icon.className = 'fas fa-moon';
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');

            let theme = 'light';
            if (document.body.classList.contains('dark-mode')) {
                theme = 'dark';
                if (icon) icon.className = 'fas fa-sun';
            } else {
                if (icon) icon.className = 'fas fa-moon';
            }

            localStorage.setItem('theme', theme);
        });
    }
});
