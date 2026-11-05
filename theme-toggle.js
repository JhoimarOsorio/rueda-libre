(() => {
    const root = document.documentElement;
    const storageKey = "rueda-nocturna-theme";
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    let savedTheme;

    try {
        savedTheme = localStorage.getItem(storageKey);
    } catch {
        savedTheme = null;
    }

    const applyTheme = (isDark) => {
        root.classList.toggle("dark", isDark);
        document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
            button.setAttribute("aria-pressed", String(isDark));
            button.setAttribute("aria-label", isDark ? "Activar modo claro" : "Activar modo oscuro");
            const label = button.querySelector("[data-theme-label]");
            if (label) label.textContent = isDark ? "Claro" : "Oscuro";
        });
    };

    applyTheme(savedTheme ? savedTheme === "dark" : systemTheme.matches);

    const synchronizeButtons = () => {
        document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
            const isDark = root.classList.contains("dark");
            button.setAttribute("aria-pressed", String(isDark));
            button.setAttribute("aria-label", isDark ? "Activar modo claro" : "Activar modo oscuro");
            const label = button.querySelector("[data-theme-label]");
            if (label) label.textContent = isDark ? "Claro" : "Oscuro";
        });
    };

    document.addEventListener("click", (event) => {
        const button = event.target.closest("[data-theme-toggle]");
        if (!button) return;

        const isDark = !root.classList.contains("dark");
        applyTheme(isDark);
        try {
            localStorage.setItem(storageKey, isDark ? "dark" : "light");
        } catch {
            // The selected theme remains active for this page even if storage is unavailable.
        }
    });

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", synchronizeButtons, { once: true });
    } else {
        synchronizeButtons();
    }

    systemTheme.addEventListener("change", (event) => {
        let storedTheme;
        try {
            storedTheme = localStorage.getItem(storageKey);
        } catch {
            storedTheme = "dark";
        }
        if (!storedTheme) applyTheme(event.matches);
    });
})();
