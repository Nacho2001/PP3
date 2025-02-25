import React, { useState } from 'react';
import AppRoutes from './routes/routes';
import AccessibilityButton from './components/AccessibilityButton';
import { AccessibilityProvider } from './context/AccessibilityContext';

function App() {
  return (
    <div className='app-container'>
      <AccessibilityProvider>
        <AppRoutes />
        <AccessibilityButton />
      </AccessibilityProvider>
    </div>
)};

export default App;
