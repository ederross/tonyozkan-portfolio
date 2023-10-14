'use client'
import fitty from 'fitty'
import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    fitty('#tony')
  }, [])

  return (
    <div className="mx-auto mt-16 flex w-full items-center justify-center overflow-hidden bg-green-500 ">
      <h2
        id={'tony'}
        className="break-keep text-center font-extralight tracking-tighter"
      >
        Tony Özkan
      </h2>
    </div>
  )
}
