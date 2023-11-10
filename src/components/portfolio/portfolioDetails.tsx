'use Portfolio'
import { X } from 'lucide-react'
import Link from 'next/link'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Props {
  selectedPortfolio: IPortfolio
  setSelectedPortfolio: Dispatch<SetStateAction<IPortfolio | undefined>>
}
export default function PortfolioDetails({
  selectedPortfolio,
  setSelectedPortfolio,
}: Props) {
  const [isMuted, setIsMuted] = useState(true)

  const [isVideoPlayerMounted, setIsVideoPlayerMounted] = useState(false)

  useEffect(() => {
    setIsVideoPlayerMounted(true)
  }, [])

  return (
    <>
      <section className="fixed left-0 z-50 mx-auto  h-screen w-full overflow-auto bg-[#F6F6F6] px-4 pb-40 ">
        <div className="m-auto w-full max-w-[1000px] ">
          <div className="mb-8 mt-8 flex min-h-[32px] w-full justify-between py-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="w-2/2"
            >
              <h2 className="text-3xl sm:text-4xl">
                {selectedPortfolio?.name}
              </h2>
            </motion.div>
            <Link href={'/portfolio'}>
              <button
                type="button"
                className="p-2"
                onClick={() => setSelectedPortfolio(undefined)}
              >
                <X />
              </button>
            </Link>
          </div>

          <div className="h-[600px] w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 0.6 }}
              className="relative h-[600px]"
            >
              <Image
                priority
                fill
                style={{ objectFit: 'contain' }}
                alt="NextUI hero Image"
                src={selectedPortfolio.image}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
