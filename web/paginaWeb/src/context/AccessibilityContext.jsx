// contexts/AccessibilityContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
  // Leer de localStorage al inicializar
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [contrast, setContrast] = useState(localStorage.getItem('contrast') || 'normal');
  const [fontSize, setFontSize] = useState(localStorage.getItem('fontSize') || 'normal');
  const [simplifiedNav, setSimplifiedNav] = useState(localStorage.getItem('simplifiedNav') === 'true');
  const [show, setShow] = useState(false);

  // Guardar en localStorage cuando cambian las preferencias
  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('contrast', contrast);
    localStorage.setItem('fontSize', fontSize);
    localStorage.setItem('simplifiedNav', simplifiedNav);
    localStorage.setItem('show', show);
  }, [theme, contrast, fontSize, simplifiedNav, show]);

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