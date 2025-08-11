// Language Selector Functionality
document.addEventListener('DOMContentLoaded', () => {
  const sel = document.getElementById('language-select');
  if (!sel) return;

  // 根据 pathname 高亮当前语言
  /* 1. 恢复上次选择（或回退到 Jekyll 默认） */
  const storedLang = localStorage.getItem('preferred-language') ||
                     (location.pathname.startsWith('/zh') ? 'zh' : 'en');
  sel.value = storedLang;
  
  
  sel.addEventListener('change', () => {
    // Store language preference
    localStorage.setItem('preferred-language', sel.value);
    
    // 移除现有的语言前缀，获取基础路径
    let basePath = location.pathname.replace(/^\/zh(\/|$)/, '/').replace(/^\/en(\/|$)/, '/');
    
    // 构建新路径
    let newPath;
    if (sel.value === 'en') {
      newPath = basePath;
    } else {
      newPath = '/zh' + (basePath === '/' ? '/' : basePath);
    }

    location.href = newPath + location.search + location.hash;
  });

  // Check and apply stored language preference on page load
  function applyStoredLanguagePreference() {
    const storedLang = localStorage.getItem('preferred-language');
    const currentPath = window.location.pathname;
    console.log("storedLang:", storedLang, "currentPath:", currentPath);
    if (storedLang) {
      if (storedLang === 'zh' && !currentPath.startsWith('/zh/')) {
        // User prefers Chinese but is on English page
        if (currentPath === '/' || currentPath === '/index.html') {
          window.location.href = '/zh/';
        } else {
          window.location.href = '/zh' + currentPath;
        }
      } else if (storedLang === 'en' && currentPath.startsWith('/zh/')) {
        // User prefers English but is on Chinese page
        const newPath = currentPath.replace('/zh', '') || '/';
        window.location.href = newPath;
      }
    }
  }

  // Apply stored preference on page load
  applyStoredLanguagePreference();
});


document.addEventListener('DOMContentLoaded', function() {
  const languageSelector = document.querySelector('.language-selector');
  const languageToggle = document.querySelector('.language-toggle');
  const languageMenu = document.querySelector('.language-menu');
  const languageLinks = document.querySelectorAll('.language-menu a');

  if (!languageSelector || !languageToggle || !languageMenu) {
    return; // Exit if elements don't exist
  }

  // Toggle language menu
  languageToggle.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    languageSelector.classList.toggle('active');
    languageMenu.classList.toggle('hidden');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!languageSelector.contains(e.target)) {
      languageSelector.classList.remove('active');
      languageMenu.classList.add('hidden');
    }
  });
});