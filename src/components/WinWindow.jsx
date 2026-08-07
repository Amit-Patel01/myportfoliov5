'use client'

import { useState, useRef } from 'react'
import { Minus, Square, Copy, X } from 'lucide-react'

const WinWindow = ({
  id,
  title,
  icon: Icon,
  isOpen,
  isMinimized,
  isMaximized,
  zIndex,
  initialPos = { x: 40, y: 40 },
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  children,
}) => {
  const [position, setPosition] = useState(initialPos)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartRef = useRef({ x: 0, y: 0 })
  const initialPosRef = useRef(initialPos)

  if (!isOpen || isMinimized) return null

  const handleMouseDown = (e) => {
    if (isMaximized) return
    onFocus()
    setIsDragging(true)
    dragStartRef.current = { x: e.clientX, y: e.clientY }
    initialPosRef.current = { ...position }

    const handleMouseMove = (moveEvent) => {
      const dx = moveEvent.clientX - dragStartRef.current.x
      const dy = moveEvent.clientY - dragStartRef.current.y
      setPosition({
        x: Math.max(0, initialPosRef.current.x + dx),
        y: Math.max(0, initialPosRef.current.y + dy),
      })
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
  }

  return (
    <div
      onClick={onFocus}
      style={{
        zIndex,
        top: isMaximized ? 0 : `${position.y}px`,
        left: isMaximized ? 0 : `${position.x}px`,
      }}
      className={`fixed flex flex-col overflow-hidden rounded-xl border border-white/20 bg-[#141926]/90 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] ${
        isDragging ? 'select-none opacity-95 transition-none' : 'transition-all duration-150'
      } ${
        isMaximized
          ? 'w-full h-[calc(100vh-48px)] rounded-none border-none'
          : 'w-[90vw] sm:w-[800px] h-[550px] max-h-[80vh]'
      }`}
    >
      {/* Windows 11 Title Bar */}
      <div
        onMouseDown={handleMouseDown}
        className="h-10 px-4 bg-[#0e1320] border-b border-white/10 flex items-center justify-between cursor-move shrink-0"
      >
        <div className="flex items-center gap-2.5">
          {Icon && <Icon size={16} className="text-cyan-400" />}
          <span className="text-xs font-semibold text-slate-200 tracking-wide font-sans">
            {title}
          </span>
        </div>

        {/* Windows 11 Control Buttons */}
        <div className="flex items-center">
          <button
            onClick={(e) => { e.stopPropagation(); onMinimize(id) }}
            className="w-11 h-10 flex items-center justify-center text-slate-300 hover:bg-white/10 transition-colors"
            title="Minimize"
          >
            <Minus size={14} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onMaximize(id) }}
            className="w-11 h-10 flex items-center justify-center text-slate-300 hover:bg-white/10 transition-colors"
            title={isMaximized ? "Restore Down" : "Maximize"}
          >
            {isMaximized ? <Copy size={13} /> : <Square size={13} />}
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onClose(id) }}
            className="w-11 h-10 flex items-center justify-center text-slate-300 hover:bg-red-600 hover:text-white transition-colors"
            title="Close"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Window Body Content */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 text-slate-100 selection:bg-cyan-500/30">
        {children}
      </div>
    </div>
  )
}

export default WinWindow
