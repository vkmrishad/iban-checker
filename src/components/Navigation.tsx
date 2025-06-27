import React from 'react';
import { CreditCard, Globe } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { Theme } from '../hooks/useTheme';

interface NavigationProps {
  activeTab: 'checker' | 'structure';
  onTabChange: (tab: 'checker' | 'structure') => void;
  theme: Theme;
  onThemeToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange, theme, onThemeToggle }) => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 dark:bg-blue-500 p-2 rounded-lg transition-colors duration-200">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-200">
                IBAN Tools
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <button
                onClick={() => onTabChange('checker')}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === 'checker'
                    ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <CreditCard className="h-4 w-4 mr-2" />
                Checker
              </button>
              <button
                onClick={() => onTabChange('structure')}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === 'structure'
                    ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <Globe className="h-4 w-4 mr-2" />
                Structure
              </button>
            </div>
            
            <div className="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>
            
            <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;