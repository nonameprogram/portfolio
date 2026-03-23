'use client'

import React, { useEffect, useRef, useState } from 'react'

export type LogoItem = {
  id?: string
  logo: string | React.ReactNode
  name?: string
}

export type LogoColumnType = {
  id?: string
  images: LogoItem[]
}

export type LogoTickerProps = {
  title?: React.ReactNode
  columns: LogoColumnType[]
  interval?: number
  className?: string
}

const EXIT_MS = 300     // duration of slide animation
const WAVE_MS = 100     // stagger between columns

// ─── Single column — reacts to the external `tick` prop ─────────────────────
const LogoColumn: React.FC<{
  images: LogoItem[]
  colIndex: number
  tick: number          // increments every cycle, driven by parent interval
}> = ({ images, colIndex, tick }) => {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [phase, setPhase] = useState<'idle' | 'exit' | 'reset'>('idle')

  // Track which tick we have already handled
  const lastTickRef = useRef(-1)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const rafRef = useRef(0)

  useEffect(() => {
    if (images.length <= 1) return
    if (tick === lastTickRef.current) return   // same tick, ignore

    lastTickRef.current = tick

    // Clear any leftover timers from previous cycle
    if (timerRef.current) clearTimeout(timerRef.current)
    cancelAnimationFrame(rafRef.current)

    // Stagger: delay this column by colIndex × WAVE_MS
    timerRef.current = setTimeout(() => {
      // 1. Trigger exit animation
      setPhase('exit')

      // 2. After exit completes: advance index, snap reset (no transition)
      timerRef.current = setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % images.length)
        setPhase('reset')

        // 3. Two rAF = one paint: re-enable transitions, go idle
        rafRef.current = requestAnimationFrame(() => {
          rafRef.current = requestAnimationFrame(() => {
            setPhase('idle')
          })
        })
      }, EXIT_MS)
    }, colIndex * WAVE_MS)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      cancelAnimationFrame(rafRef.current)
    }
  }, [tick, images.length, colIndex])

  const nextIdx = (currentIdx + 1) % images.length
  const noTransition = phase === 'reset'

  const base: React.CSSProperties = {
    transition: noTransition ? 'none' : `transform ${EXIT_MS}ms ease-in-out, opacity ${EXIT_MS - 50}ms ease-in-out`,
  }

  const currentStyle: React.CSSProperties = {
    ...base,
    transform: phase === 'exit' ? 'translateY(-110%)' : 'translateY(0)',
    opacity: phase === 'exit' ? 0 : 1,
  }
  const nextStyle: React.CSSProperties = {
    ...base,
    transform: phase === 'exit' ? 'translateY(0)' : 'translateY(110%)',
    opacity: phase === 'exit' ? 1 : 0,
  }

  const currentLogo = images[currentIdx]?.logo
  const nextLogo = images.length > 1 ? images[nextIdx]?.logo : null

  return (
    <div className="flex-1 min-w-0 h-20 relative overflow-hidden flex justify-center">
      <div className="absolute inset-0 flex items-center justify-center px-5" style={currentStyle}>
        {currentLogo && (
          typeof currentLogo === 'string' ? (
            <img
              src={currentLogo}
              alt={images[currentIdx]?.name || ''}
              className="max-w-full max-h-8 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-[opacity,filter] duration-300"
              draggable={false}
            />
          ) : (
            currentLogo
          )
        )}
      </div>

      {nextLogo && (
        <div className="absolute inset-0 flex items-center justify-center px-5" style={nextStyle}>
          {typeof nextLogo === 'string' ? (
            <img
              src={nextLogo}
              alt={images[nextIdx]?.name || ''}
              className="max-w-full max-h-8 object-contain grayscale opacity-60"
              draggable={false}
            />
          ) : (
            nextLogo
          )}
        </div>
      )}
    </div>
  )
}

// ─── Parent — single interval, all columns share the same tick ───────────────
export const LogoTicker: React.FC<LogoTickerProps> = ({
  title,
  columns,
  interval = 2500,
  className,
}) => {
  const cycleMs = Math.max(interval ?? 2500, EXIT_MS + (columns?.length || 0) * WAVE_MS + 200)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), cycleMs)
    return () => clearInterval(id)
  }, [cycleMs])

  if (!columns || columns.length === 0) return null

  return (
    <div className={`container py-12 md:py-20 ${className || ''}`}>
      {title && (
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8 font-medium">
          {title}
        </p>
      )}

      <div className="flex items-center">
        {columns.map((col, i) => (
          <LogoColumn key={col.id || i} images={col.images || []} colIndex={i} tick={tick} />
        ))}
      </div>
    </div>
  )
}
