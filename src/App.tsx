import React, { useState } from 'react';
import Navigation from './components/Navigation';
import IBANChecker from './components/IBANChecker';
import IBANStructure from './components/IBANStructure';
import { useTheme } from './hooks/useTheme';
import { IBAN_COUNTRIES } from './utils/ibanValidator';

function App() {
  const [activeTab, setActiveTab] = useState<'checker' | 'structure'>('checker');
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <Navigation 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
      
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        {activeTab === 'checker' ? <IBANChecker /> : <IBANStructure />}
      </main>
      
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-16 transition-colors duration-200">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-2 transition-colors duration-200">
              IBAN validation using advanced algorithms and comprehensive country data
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">
              Supporting <span className="font-semibold">{IBAN_COUNTRIES.length}</span> countries worldwide with real-time validation
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;