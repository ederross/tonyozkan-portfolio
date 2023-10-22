/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Image from 'next/image'

import { useCallback, useEffect, useState } from 'react'
import { clientWorks } from './data'

import ClientDetails from './ClientDetails'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useAnimate, usePresence, motion } from 'framer-motion'

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
            <Link key={key} href={`?client=${data.slug}`}>
              <div className="relative min-h-[400px] cursor-pointer overflow-hidden bg-slate-50">
                {data.videoCover ? (
                  <>
                    <div
                      className="max-h-[400px] overflow-hidden"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {!isCoverHovered ? (
                        <>
                          <motion.div
                            transition={{
                              ease: 'easeInOut',
                              delay: 3,
                            }}
                          >
                            <Image
                              loading="eager"
                              fill
                              style={{ objectFit: 'contain' }}
                              className="duration-1000 ease-out hover:scale-125"
                              alt="NextUI hero Image"
                              src={
                                'https://ucedede2fec3df8677d00851efca.previews.dropboxusercontent.com/p/thumb/ACGBr6iN0Cq3WorZgeDkUycpeOyPzigluQ6m3RpcnVipRd1p5VmY6T1jxPaxA8BIH4lrhj2yvYc2tSKIkPvPwrojUl_ieiRtgMhy_DZqInQGGQR5zLPHph_00PJ19S0WKVpddB2TbLUGlr7bslctfRtuXEq4a_e26ptvU2oEU7mbIm7rlD_kSnuUJSI7Kj45tWWrf0Q494lf48-r3S7Q8-NcESDnX4Hh7BtPsuYS9Bs7fGGJJwlBgC8aMBldOhxnNmcWmVYQadZhac8UQiMVDbL7ppaKaHUQ27_P6qhBO-ZOv16kmePD639tLsauCLaFx_EINy813aey0ZKDQhvjUhRRhHgDBngJ9tmnXmiYm8bmz_AtL1JvrjiSr63UZiIvi3Pn0EMqKr75LFmer_PK4Vl38l9Lr2EeCj4Ia71LLtzyBQ/p.jpeg'
                              }
                            />
                          </motion.div>
                        </>
                      ) : (
                        <motion.video
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1, scale: 4 }}
                          style={{ width: '100%', height: '400px' }}
                          autoPlay
                          muted
                          controls={false}
                        >
                          <source src={data.videoCover} type="video/mp4" />
                        </motion.video>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <Image
                        loading="eager"
                        fill
                        style={{ objectFit: 'contain' }}
                        className="duration-1000 ease-out hover:scale-125"
                        alt="NextUI hero Image"
                        src={data.cover}
                      />
                    </div>
                  </>
                )}
              </div>
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
