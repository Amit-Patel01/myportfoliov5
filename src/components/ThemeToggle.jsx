'use client';

import { useTheme } from '../context/ThemeContext'
import { Sun, Moon } from 'lucide-react'

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme()

  return (
    <button 
      onClick={toggleTheme}
      className="p-3 rounded-2xl glass hover:scale-105 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-400" />}
    </button>
  )
}

export default ThemeToggle
