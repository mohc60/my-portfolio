// Toggle the page theme and save the selected mode for later.
const body = document.body;
const themeToggle = document.getElementById('theme-toggle');

function updateThemeButton() {
  const isDark = body.dataset.theme === 'dark';
  themeToggle.textContent = isDark ? 'Light mode' : 'Dark mode';
  themeToggle.setAttribute(
    'aria-label',
    isDark ? 'Switch to light mode' : 'Switch to dark mode'
  );
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.dataset.theme = 'dark';
} else {
  body.dataset.theme = 'light';
}

updateThemeButton();

// Button click switches the theme and stores the choice.
themeToggle.addEventListener('click', () => {
  const nextTheme = body.dataset.theme === 'dark' ? 'light' : 'dark';
  body.dataset.theme = nextTheme;
  localStorage.setItem('theme', nextTheme);
  updateThemeButton();
});
