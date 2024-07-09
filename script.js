document.addEventListener('DOMContentLoaded', function() {
    let lightMode = document.querySelector('.fa-sun');
    let darkMode = document.querySelector('.fa-moon');
    let theme = localStorage.getItem('theme') || 'light';
    let root = document.documentElement;
  
    if (!lightMode || !darkMode || !root) {
      console.error('Required elements not found.');
      return;
    }
  
    if (theme === "light") {
      applyTheme('light');
    } else {
      applyTheme('dark');
    }
  
    lightMode.addEventListener('click', function() {
      toggleMode("light");
    });
    
    darkMode.addEventListener('click', function() {
      toggleMode("dark");
    });
  
    function toggleMode(mode) {
      localStorage.setItem('theme', mode);
      applyTheme(mode);
    }
  
    function applyTheme(mode) {
      if (mode === "light") {
        lightMode.style.display = 'none';
        darkMode.style.display = 'inline-block';
        root.style.setProperty('--main', '#506EF8');
        root.style.setProperty('--secondary', '#0f1629');
        root.style.setProperty('--text', '#64748b');
        root.style.setProperty('--accent', '#FFFFFF');
        root.style.setProperty('--foreground', '#FFFFFF');
        root.style.setProperty('--background', '#F0F4F9');
      } else {
        lightMode.style.display = 'inline-block';
        darkMode.style.display = 'none';
        root.style.setProperty('--main', '#506EF8');
        root.style.setProperty('--secondary', '#FFFFFF');
        root.style.setProperty('--text', '#93a2b8');
        root.style.setProperty('--accent', '#FFFFFF');
        root.style.setProperty('--foreground', '#1d2739');
        root.style.setProperty('--background', '#0f1629');
      }
    }
  });
  