/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useCallback, useEffect, useState } from 'react'
import { clientWorks } from './data'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Skeleton } from '../ui/skeleton'
import ClientDetails from './ClientDetails'

export default function Grid3Images() {
  const searchParams = useSearchParams()
  const clientName = searchParams.get('client')

  // video control
  const [isVideoLoading, setVideoIsLoading] = useState(true)

  const handleLoadedData = () => {
    setVideoIsLoading(false)
  }

  const handleCanPlay = () => {
    setVideoIsLoading(false)
  }

  const handleWaiting = () => {
    setVideoIsLoading(true)
  }

  const [isCoverHovered, setIsCoverHovered] = useState(false)

  const [selectedClientURL, setSelectedClientURL] = useState<IClientWork>()
  const [hoveredSlug, setHoveredSlug] = useState('')

  useEffect(() => {
    if (clientName) {
      if (selectedClientURL) {
        document.body.classList.add('overflow-y-hidden')
      }
    } else {
      document.body.classList.remove('overflow-y-hidden')
    }
  }, [clientName, selectedClientURL])

  const handleMouseEnter = (slug: string) => {
    setHoveredSlug(slug)
    setIsCoverHovered(true)
  }
  const handleMouseLeave = (slug: string) => {
    setIsCoverHovered(false)
    setHoveredSlug('')
  }

  const handleClient = useCallback(() => {
    const clientURL = clientWorks.find((data) => data.slug === clientName)
    setSelectedClientURL(clientURL)
  }, [clientName])

  useEffect(() => {
    handleClient()
  }, [handleClient])

  return (
    <>
      <div className="px-4">
        <div className="my-8 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
          {clientWorks.map((data, key) => (
            <Link
              key={key}
              href={`?client=${data.slug}`}
              onMouseEnter={() => handleMouseEnter(data.slug)}
              onMouseLeave={() => handleMouseLeave(data.slug)}
              className="group flex max-h-[600px] cursor-pointer flex-col items-start justify-center gap-1 overflow-hidden bg-slate-100"
            >
              {data.slug === hoveredSlug ? (
                <div
                  className={cn(
                    'hidden h-full w-full items-center justify-center overflow-hidden',
                    isCoverHovered && 'flex',
                  )}
                >
                  {isVideoLoading && data.videoCover && (
                    <Skeleton className="h-[500px] w-full bg-gray-200 " />
                  )}

                  {data.videoCover ? (
                    <div className="h-[500px] overflow-hidden">
                      <motion.video
                        transition={{ duration: 1000 }}
                        className={cn(
                          'overflow-hidden',
                          isVideoLoading ? 'w-0' : 'w-full',
                        )}
                        autoPlay
                        loop
                        muted
                        onLoadedData={handleLoadedData}
                        preload={'metadata'}
                        onCanPlay={handleCanPlay}
                        onWaiting={handleWaiting}
                        controls={false}
                      >
                        <source src={data.videoCover} type="video/mp4" />
                        Your browser does not support the video tag.
                      </motion.video>
                    </div>
                  ) : (
                    <motion.div
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      className="flex h-[500px] w-full items-center justify-center "
                    >
                      <Avatar className="h-full w-full overflow-hidden rounded-none duration-1000 ease-out hover:scale-[1.2]">
                        <AvatarImage
                          className="object-cover"
                          src={data.cover}
                          alt={`store profile picture`}
                          suppressHydrationWarning
                        />
                        <AvatarFallback suppressHydrationWarning>
                          <Skeleton className="h-full w-full rounded-none bg-gray-200 " />
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                  )}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="flex h-[500px] w-full items-center justify-center "
                >
                  <Avatar className=" h-full w-full overflow-hidden rounded-none duration-1000 ease-out hover:scale-[1.1]">
                    <AvatarImage
                      className="object-cover"
                      src={data.cover}
                      alt={`store profile picture`}
                      suppressHydrationWarning
                    />
                    <AvatarFallback suppressHydrationWarning>
                      <Skeleton className="h-full w-full rounded-none bg-gray-200 " />
                    </AvatarFallback>
                  </Avatar>
                </motion.div>
              )}
              <span>{data.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {selectedClientURL && (
        <ClientDetails
          selectedClient={selectedClientURL as IClientWork}
          setSelectedClient={setSelectedClientURL}
        />
      )}
    </>
  )
}
