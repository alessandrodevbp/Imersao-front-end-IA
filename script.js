// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verifica se há preferência salva no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateToggleIcon(savedTheme);
}

// Função para alternar tema
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        updateToggleIcon('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
        updateToggleIcon('light-mode');
    }
});

// Função para atualizar ícone do botão
function updateToggleIcon(theme) {
    if (theme === 'light-mode') {
        themeToggle.textContent = '☀️';
        themeToggle.setAttribute('aria-label', 'Alternar para modo escuro');
    } else {
        themeToggle.textContent = '🌙';
        themeToggle.setAttribute('aria-label', 'Alternar para modo claro');
    }
}