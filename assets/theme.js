(function () {
  var root = document.documentElement;
  var storageKey = "theme";

  function getSavedTheme() {
    try {
      return localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(storageKey, theme);
    } catch (error) {
      return;
    }
  }

  function prefersDark() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }

  function applyTheme(theme) {
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
  }

  function syncButton(button) {
    var isDark = root.classList.contains("dark");
    button.setAttribute("aria-pressed", isDark ? "true" : "false");
    button.setAttribute(
      "title",
      isDark ? "Switch to light mode" : "Switch to dark mode"
    );
  }

  var savedTheme = getSavedTheme();
  applyTheme(savedTheme || (prefersDark() ? "dark" : "light"));

  function bindThemeToggles() {
    var buttons = document.querySelectorAll("[data-theme-toggle], #theme-toggle");
    buttons.forEach(function (button) {
      syncButton(button);
      button.addEventListener("click", function () {
        var nextTheme = root.classList.contains("dark") ? "light" : "dark";
        applyTheme(nextTheme);
        saveTheme(nextTheme);
        buttons.forEach(syncButton);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindThemeToggles);
  } else {
    bindThemeToggles();
  }
})();
