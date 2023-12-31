'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Cursor: React.FC<{ cursorVariant: string }> = ({ cursorVariant }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 1000 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      top: 0,
    },
    click: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      top: 0,
      height: 15,
      width: 15,
    },
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-[1000px] z-[9999] hidden h-5 w-5 rounded-full bg-slate-800 sm:hidden"
        variants={variants}
        animate={cursorVariant}
      ></motion.div>
    </>
  )
}

export default Cursor
