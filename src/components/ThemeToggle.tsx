'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  try {
    const { theme, toggleTheme } = useTheme();
    
    return (
      <button
        onClick={toggleTheme}
        className="relative p-2 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        <div className="relative w-5 h-5">
          {/* Sun Icon */}
          <Sun
            size={20}
            className={`absolute inset-0 text-gray-600 dark:text-gray-400 transition-all duration-300 ${
              theme === 'light'
                ? 'opacity-100 rotate-0 scale-100'
                : 'opacity-0 rotate-90 scale-0'
            }`}
          />
          
          {/* Moon Icon */}
          <Moon
            size={20}
            className={`absolute inset-0 text-gray-600 dark:text-gray-400 transition-all duration-300 ${
              theme === 'dark'
                ? 'opacity-100 rotate-0 scale-100'
                : 'opacity-0 -rotate-90 scale-0'
            }`}
          />
        </div>
      </button>
    );
  } catch (error) {
    // Fallback for SSR or when outside ThemeProvider
    return (
      <button
        className="relative p-2 rounded-full transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        aria-label="Toggle theme"
      >
        <div className="relative w-5 h-5">
          <Sun
            size={20}
            className="absolute inset-0 text-gray-600 transition-all duration-300 opacity-100"
          />
        </div>
      </button>
    );
  }
}
