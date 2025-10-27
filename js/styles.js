// === TOKENS DE TEMA ===
const themeTokens = {
  light: {
    '--background': '0 0% 98%',
    '--foreground': '210 25% 15%',
    '--border': '210 10% 88%',
    '--primary': '210 27% 33%',
    '--primary-foreground': '0 0% 98%',
    '--accent': '192 73% 50%',
    '--accent-foreground': '0 0% 98%',
    '--muted': '210 10% 94%',
    '--muted-foreground': '210 15% 45%',
    '--input': '210 15% 75%',
    '--ring': '192 73% 50%',
  },
  dark: {
    '--background': '210 25% 12%',
    '--foreground': '0 0% 98%',
    '--border': '210 15% 22%',
    '--primary': '210 27% 33%',
    '--primary-foreground': '0 0% 98%',
    '--accent': '192 80% 60%',
    '--accent-foreground': '210 25% 12%',
    '--muted': '210 16% 20%',
    '--muted-foreground': '210 10% 70%',
    '--input': '210 15% 35%',
    '--ring': '192 80% 60%',
  },
}

// === APLICAÇÃO DE TEMA ===
function applyTheme(mode = 'light') {
  const root = document.documentElement
  const tokens = themeTokens[mode]
  for (const key in tokens) {
    root.style.setProperty(key, tokens[key])
  }
  root.classList.remove('light', 'dark')
  root.classList.add(mode)
  localStorage.setItem('theme', mode)
}

// === TOGGLE DE TEMA ===
function toggleTheme() {
  const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  const next = current === 'light' ? 'dark' : 'light'
  applyTheme(next)
}

// === INICIALIZAÇÃO ===
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('theme') || 'light'
  applyTheme(saved)

  const toggleBtn = document.querySelector('[data-theme-toggle]')
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleTheme)
  }
})
