'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) {
      const isDark = JSON.parse(saved)
      setDarkMode(isDark)
      if (isDark) {
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
        document.documentElement.dataset.theme = 'dark'
      } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
        document.documentElement.dataset.theme = 'light'
      }
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      document.documentElement.dataset.theme = 'light'
      localStorage.setItem('darkMode', JSON.stringify(false))
    }
  }, [])

  const toggleTheme = () => {
    setDarkMode(prev => {
      const newMode = !prev
      localStorage.setItem('darkMode', JSON.stringify(newMode))
      if (newMode) {
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
        document.documentElement.dataset.theme = 'dark'
      } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
        document.documentElement.dataset.theme = 'light'
      }
      return newMode
    })
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
