/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Image from 'next/image'

import { useCallback, useEffect, useState } from 'react'
import { clientWorks } from './data'

import ClientDetails from './ClientDetails'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function Grid3Images() {
  const searchParams = useSearchParams()
  const clientName = searchParams.get('client')

  const [isCoverHovered, setIsCoverHovered] = useState(false)

  const [selectedClientURL, setSelectedClientURL] = useState<IClientWork>()

  useEffect(() => {
    if (clientName) {
      if (selectedClientURL) {
        document.body.classList.add('overflow-y-hidden')
      } else {
        document.body.classList.remove('overflow-y-hidden')
      }
    }
  }, [clientName, selectedClientURL])

  const handleMouseEnter = () => {
    setIsCoverHovered(true)
  }

  const handleMouseLeave = () => {
    setIsCoverHovered(false)
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
        <div className="col-span-2 my-24 grid gap-16 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-8">
          {clientWorks.map((data, key) => (
            <>
              <Link href={`?client=${data.slug}`}>
                <div
                  key={key}
                  className="relative min-h-[400px] cursor-pointer overflow-hidden bg-slate-50"
                >
                  {data.videoCover ? (
                    <>
                      <div
                        className="max-h-[400px] overflow-hidden"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        {!isCoverHovered && (
                          <Image
                            loading="eager"
                            fill
                            style={{ objectFit: 'contain' }}
                            className="duration-300 ease-out hover:scale-125"
                            alt="NextUI hero Image"
                            src={data.cover}
                          />
                        )}
                        {isCoverHovered && (
                          <video
                            style={{ width: '100%', height: '400px', scale: 3 }}
                            autoPlay
                            muted
                            controls={false}
                          >
                            <source src={data.videoCover} type="video/mp4" />
                          </video>
                        )}
                      </div>
                    </>
                  ) : (
                    <Image
                      loading="eager"
                      fill
                      style={{ objectFit: 'contain' }}
                      className="duration-300 ease-out hover:scale-125"
                      alt="NextUI hero Image"
                      src={data.cover}
                    />
                  )}
                </div>
              </Link>
            </>
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
