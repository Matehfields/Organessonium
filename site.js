'use strict';

const SITE_THEME_KEY = 'organessonium.site.theme';

function applySiteTheme(theme) {
    const safeTheme = theme === 'light' ? 'light' : 'dark';
    document.documentElement.dataset.theme = safeTheme;
    document.querySelectorAll('[data-site-theme]').forEach(button => {
        const active = button.dataset.siteTheme === safeTheme;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
}

function initSite() {
    if (typeof initIcons === 'function') initIcons();
    let savedTheme = 'dark';
    try {
        savedTheme = localStorage.getItem(SITE_THEME_KEY) || 'dark';
    } catch (_) {}
    applySiteTheme(savedTheme);

    document.querySelectorAll('[data-site-theme]').forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.dataset.siteTheme;
            applySiteTheme(theme);
            try { localStorage.setItem(SITE_THEME_KEY, theme); } catch (_) {}
        });
    });
}

document.addEventListener('DOMContentLoaded', initSite);
