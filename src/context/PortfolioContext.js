'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import portfolioData from '../data/portfolio.json'

const PortfolioContext = createContext()
const STORAGE_KEY = 'ap_portfolio_local_content'
const LOCAL_ASSET_TYPES = {
  certificates: 'certificate',
  videos: 'video',
}

const titleFromFilename = (name) => name
  .replace(/\.[^/.]+$/, '')
  .replace(/[-_]+/g, ' ')
  .replace(/\b\w/g, letter => letter.toUpperCase())

const readSavedContent = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
    return {
      items: Array.isArray(saved.items) ? saved.items : [],
      deletedIds: Array.isArray(saved.deletedIds) ? saved.deletedIds : [],
    }
  } catch {
    return { items: [], deletedIds: [] }
  }
}

export const PortfolioProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchItems = useCallback(async () => {
    setLoading(true)
    try {
      const saved = readSavedContent()
      const responses = await Promise.all(
        Object.keys(LOCAL_ASSET_TYPES).map(async folder => {
          const response = await fetch(`/api/uploads?folder=${folder}`)
          const data = await response.json()
          if (!response.ok) throw new Error(data.error || `Unable to read ${folder}.`)
          return data.files.map(file => ({ ...file, type: LOCAL_ASSET_TYPES[folder] }))
        })
      )

      const savedById = new Map(saved.items.map(item => [item.id, item]))
      const savedByLink = new Map(saved.items.map(item => [item.link, item]))
      const deleted = new Set(saved.deletedIds)
      const staticItems = (portfolioData.items || [])
        .filter(item => item.type !== 'certificate' && item.type !== 'video')
        .filter(item => !deleted.has(item.id))
        .map(item => savedById.get(item.id) || item)

      const uploadedItems = responses.flat().map(file => {
        const generated = {
          id: `local_${file.type}_${file.path}`,
          type: file.type,
          title: titleFromFilename(file.name),
          description: '',
          image: file.type === 'certificate' && /\.(jpe?g|png|webp|gif|avif)$/i.test(file.name) ? file.path : '',
          link: file.path,
          tags: [],
          issuer: '',
          date: '',
        }
        return savedById.get(generated.id) || savedByLink.get(file.path) || generated
      }).filter(item => !deleted.has(item.id))

      const displayedIds = new Set([...staticItems, ...uploadedItems].map(item => item.id))
      const savedExtras = saved.items.filter(item =>
        !displayedIds.has(item.id) &&
        (item.type !== 'certificate' && item.type !== 'video')
      )

      setItems([...savedExtras, ...uploadedItems, ...staticItems])
      setError(null)
    } catch (err) {
      console.error('Local upload fetch error:', err)
      const saved = readSavedContent()
      const staticItems = (portfolioData.items || []).filter(item =>
        item.type !== 'certificate' && item.type !== 'video' && !saved.deletedIds.includes(item.id)
      )
      setItems([...saved.items, ...staticItems])
      setError(err.message)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchItems()
  }, [fetchItems])

  const saveContent = (nextItems, deletedIds = readSavedContent().deletedIds) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: nextItems, deletedIds }))
    setItems(nextItems)
  }

  const addItem = async (item) => {
    const newItem = { ...item, id: item.id || `local_item_${Date.now()}` }
    saveContent([newItem, ...items])
    return newItem
  }

  const updateItem = async (id, updates) => {
    const nextItems = items.map(item => (item.id === id || item._id === id) ? { ...item, ...updates, id } : item)
    saveContent(nextItems)
    return nextItems.find(item => item.id === id)
  }

  const deleteItem = async (id) => {
    const { deletedIds } = readSavedContent()
    saveContent(items.filter(item => item.id !== id && item._id !== id), [...new Set([...deletedIds, id])])
  }

  const deleteAllItems = async () => {
    saveContent([], items.map(item => item.id))
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
