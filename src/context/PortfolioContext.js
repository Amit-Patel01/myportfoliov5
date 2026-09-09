'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const PortfolioContext = createContext()

export const PortfolioProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchItems = useCallback(async () => {
    setLoading(true)
    try {
      const apiRes = await fetch('/api/portfolio')
      const data = await apiRes.json()
      if (!apiRes.ok || !data.success) {
        throw new Error(data.error || 'Unable to load portfolio items.')
      }
      setItems(data.items || [])
      setError(null)
    } catch (err) {
      console.error('MongoDB fetch error:', err)
      setItems([])
      setError(err.message)
    }
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
      if (res.ok && data.success && data.items) {
        setItems(data.items)
        return data.item
      }
      throw new Error(data.error || 'Unable to add item.')
    } catch (e) {
      console.error('Failed to add item:', e)
      throw e
    }
  }

  const updateItem = async (id, updates) => {
    try {
      const res = await fetch('/api/portfolio', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, ...updates }),
      })
      const data = await res.json()
      if (res.ok && data.success && data.items) {
        setItems(data.items)
        return data.item
      }
      throw new Error(data.error || 'Unable to update item.')
    } catch (e) {
      console.error('Failed to update item:', e)
      throw e
    }
  }

  const deleteItem = async (id) => {
    try {
      const res = await fetch(`/api/portfolio?id=${encodeURIComponent(id)}`, { method: 'DELETE' })
      const data = await res.json()
      if (res.ok && data.success && data.items) {
        setItems(data.items)
        return
      }
      throw new Error(data.error || 'Unable to delete item.')
    } catch (e) {
      console.error('Failed to delete item:', e)
      throw e
    }
  }

  const deleteAllItems = async () => {
    try {
      const res = await fetch('/api/portfolio?all=true', { method: 'DELETE' })
      const data = await res.json()
      if (res.ok && data.success && data.items) {
        setItems(data.items)
        return
      }
      throw new Error(data.error || 'Unable to delete items.')
    } catch (e) {
      console.error('Failed to delete all items:', e)
      throw e
    }
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
