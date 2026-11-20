'use client'

import { useTheme } from '../context/ThemeContext'
import { Sun, Moon } from 'lucide-react'

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 sm:p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
      aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {darkMode ? (
        <Sun size={17} className="text-amber-400 transition-transform rotate-0 hover:rotate-45" />
      ) : (
        <Moon size={17} className="text-slate-700 transition-transform hover:-rotate-12" />
      )}
    </button>
  )
}

export default ThemeToggle
