'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import portfolioData from '../data/portfolio.json'

const PortfolioContext = createContext()

export const PortfolioProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchItems = useCallback(async () => {
    try {
      const apiRes = await fetch('/api/portfolio')
      if (apiRes.ok) {
        const data = await apiRes.json()
        if (data.items && data.items.length > 0) {
          setItems(data.items)
          setError(null)
          setLoading(false)
          return
        }
      }
    } catch (err) {
      console.warn("API fetch error, fallback to static:", err)
    }

    setItems(portfolioData.items || [])
    setError(null)
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchItems()
  }, [fetchItems])

  const addItem = async (item) => {
    try {
      const res = await fetch('/api/portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      })
      const data = await res.json()
      if (res.ok && data.items) {
        setItems(data.items)
        return data.item
      }
    } catch (e) {
      console.error('Failed to add item:', e)
    }
    const newItem = { ...item, id: 'item_' + Date.now() }
    setItems(prev => [newItem, ...prev])
    return newItem
  }

  const updateItem = async (id, updates) => {
    try {
      const res = await fetch('/api/portfolio', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, ...updates }),
      })
      const data = await res.json()
      if (res.ok && data.items) {
        setItems(data.items)
        return data.item
      }
    } catch (e) {
      console.error('Failed to update item:', e)
    }
    setItems(prev => prev.map(i => (i.id === id || i._id === id) ? { ...i, ...updates } : i))
    return { id, ...updates }
  }

  const deleteItem = async (id) => {
    try {
      const res = await fetch(`/api/portfolio?id=${encodeURIComponent(id)}`, { method: 'DELETE' })
      const data = await res.json()
      if (res.ok && data.items) {
        setItems(data.items)
        return
      }
    } catch (e) {
      console.error('Failed to delete item:', e)
    }
    setItems(prev => prev.filter(i => i.id !== id && i._id !== id))
  }

  const deleteAllItems = async () => {
    try {
      const res = await fetch('/api/portfolio?all=true', { method: 'DELETE' })
      const data = await res.json()
      if (res.ok && data.items) {
        setItems(data.items)
        return
      }
    } catch (e) {
      console.error('Failed to delete all items:', e)
    }
    setItems([])
  }

  return (
    <PortfolioContext.Provider
      value={{
        items,
        loading,
        error,
        addItem,
        updateItem,
        deleteItem,
        deleteAllItems,
        refetch: fetchItems,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}

export const usePortfolio = () => {
  const context = useContext(PortfolioContext)
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider')
  }
  return context
}
