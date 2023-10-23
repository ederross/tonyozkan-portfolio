'use client'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import { Music2, Volume2, VolumeX, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

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

  return (
    <>
      <section className="fixed left-0 z-50 mx-auto  h-screen w-full overflow-auto bg-white px-4 pb-40 ">
        <div className="m-auto w-full max-w-[1000px] ">
          <div className="mt-8 flex min-h-[32px] w-full justify-between py-4">
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
          {selectedClient.videoCover && (
            <div className="m-auto mt-20 flex w-full max-w-[1000px] flex-col items-center space-y-6 overflow-hidden">
              <motion.video
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                style={{ width: '100%', height: 600 }}
                autoPlay
                loop
                muted={isMuted}
                controls={false}
              >
                <source src={selectedClient.videoCover} type="video/mp4" />
              </motion.video>
              <div
                onClick={() => setIsMuted(!isMuted)}
                className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border bg-slate-50"
              >
                {isMuted ? (
                  <VolumeX size={20} className="text-slate-500" />
                ) : (
                  <Volume2 size={20} className="text-slate-500" />
                )}
              </div>
            </div>
          )}
          <div className="col-span-2 grid gap-16 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-8">
            {selectedClient?.images.map((data, key) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 10 }}
                transition={{ ease: 'easeInOut', duration: 2 }}
                key={key + Math.random()}
                className="relative h-[600px]"
              >
                <Image
                  fill
                  style={{ objectFit: 'contain' }}
                  alt="NextUI hero Image"
                  src={data}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
