import React, { createContext, useState, useEffect } from 'react';
import './accessibilityContext.css'

export const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
  // Leer de localStorage al inicializar
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [contrast, setContrast] = useState(() => {
    const storedContrast = localStorage.getItem('contrast');
    return storedContrast === 'high' || storedContrast === 'normal' ? storedContrast : 'normal';
  });
  const [fontSize, setFontSize] = useState(localStorage.getItem('fontSize') || 'normal');
  const [simplifiedNav, setSimplifiedNav] = useState(localStorage.getItem('simplifiedNav') === 'true');
  const [show, setShow] = useState(false);

  // Guardar en localStorage cuando cambian las preferencias
  useEffect(() => {
    if (contrast !== localStorage.getItem('contrast')) {
      localStorage.setItem('contrast', contrast);
    }
    localStorage.setItem('theme', theme);
    localStorage.setItem('fontSize', fontSize);
    localStorage.setItem('simplifiedNav', simplifiedNav);
    localStorage.setItem('show', show);
  }, [theme, contrast, fontSize, simplifiedNav, show]);

  useEffect(() => {
    document.body.classList.remove('dark-theme', 'light-theme');
  
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }, [theme]);

  useEffect(() => {
    document.body.classList.remove('high-contrast', 'normal-contrast');
    if (contrast === 'high') {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.add('normal-contrast');
    }
  })

  return (
    <AccessibilityContext.Provider
      value={{
        theme,
        setTheme,
        contrast,
        setContrast,
        fontSize,
        setFontSize,
        simplifiedNav,
        setSimplifiedNav,
        show,
        setShow,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};