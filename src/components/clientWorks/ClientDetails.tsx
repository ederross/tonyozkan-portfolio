'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import Link from 'next/link'

import { Loader2, Volume2, VolumeX, X } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

import { motion } from 'framer-motion'

import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import { Skeleton } from '../ui/skeleton'

interface Client {
  name: string
  images: string[]
  cover: string
  videoCover?: string
  videos?: string[]
}

interface Props {
  selectedClient: Client
  setSelectedClient: Dispatch<SetStateAction<IClientWork | undefined>>
}

export default function ClientDetails({
  selectedClient,
  setSelectedClient,
}: Props) {
  const [isMuted, setIsMuted] = useState(true)

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

  return (
    <>
      <section className="fixed left-0 z-50 mx-auto  h-screen w-full overflow-auto bg-[#F6F6F6] px-4 pb-40 ">
        <div className="m-auto w-full max-w-[1000px]">
          <div className="mt-8 flex min-h-[32px] w-full justify-between  py-4">
            <div className="w-1/2">
              <h2 className="text-3xl sm:text-4xl">{selectedClient?.name}</h2>
            </div>
            <Link href={'/client-works'}>
              <button
                type="button"
                className="p-2"
                onClick={() => setSelectedClient(undefined)}
              >
                <X />
              </button>
            </Link>
          </div>
          {selectedClient.videos?.length === 1 && (
            <div className="m-auto mt-20 flex w-full max-w-[1000px] flex-col items-center space-y-6 overflow-hidden">
              {isVideoLoading && (
                <>
                  <Skeleton className="h-[500px] w-full bg-gray-200" />
                </>
              )}
              <motion.video
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="h-[200px] bg-transparent sm:h-[500px]"
                style={{ width: '100%' }}
                autoPlay
                loop
                muted={isMuted}
                onLoadedData={handleLoadedData}
                onCanPlay={handleCanPlay}
                onWaiting={handleWaiting}
                controls={false}
              >
                <source src={selectedClient.videos[0]} type="video/mp4" />
              </motion.video>

              <div
                onClick={() => setIsMuted(!isMuted)}
                className="hidden h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border bg-slate-50 lg:flex"
              >
                {isMuted ? (
                  <VolumeX size={20} className="text-slate-500" />
                ) : (
                  <Volume2 size={20} className="text-slate-500" />
                )}
              </div>
            </div>
          )}
          <PhotoProvider>
            <div className="col-span-2 mt-8 grid gap-16 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-8">
              {selectedClient?.images.map((data, key) => (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 10 }}
                  transition={{ ease: 'easeInOut', duration: 0.6 }}
                  key={key + Math.random()}
                  className="relative  h-[500px] cursor-pointer sm:h-[300px]"
                >
                  <PhotoView key={key} src={data}>
                    <Avatar className="h-full w-full rounded-lg">
                      <AvatarImage
                        className="bg-slate-50 object-contain"
                        src={data}
                        alt={`store profile picture`}
                        suppressHydrationWarning
                      />
                      <AvatarFallback suppressHydrationWarning>
                        <Skeleton className="h-full w-full rounded-none bg-gray-200 " />
                      </AvatarFallback>
                    </Avatar>
                  </PhotoView>
                </motion.div>
              ))}
            </div>
          </PhotoProvider>
        </div>
      </section>
    </>
  )
}
