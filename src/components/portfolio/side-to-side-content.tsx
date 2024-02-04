'use client'

import { useCallback, useEffect, useState } from 'react'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Loader2 } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

import { Skeleton } from '@/components/ui/skeleton'

import { motion } from 'framer-motion'

import { PhotoSlider } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

import { portfolioData } from './data'

export default function SideToSideContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const photoNumber = searchParams.get('image')

  const [isLoading, setIsLoading] = useState(false)

  const [visible, setVisible] = useState(false)
  const [index, setIndex] = useState(-1)

  const handleClient = useCallback(() => {
    photoNumber && setVisible(true)
    setIndex(Number(photoNumber))
  }, [photoNumber])

  useEffect(() => {
    handleClient()
  }, [handleClient])

  return (
    <>
      <div className="pb-6">
        <div className="mx-auto max-w-screen-xl px-4 pt-28 md:px-4 lg:pt-36">
          <div className="flex w-full flex-col items-center gap-8  md:grid-cols-3 lg:grid lg:gap-12">
            <div className="col-span-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:gap-16">
              {portfolioData
                ?.map((data, key) => (
                  <>
                    <motion.div
                      onClick={() => {
                        setIndex(key)
                        setVisible(true)
                        router.push(`${pathname}?image=${key}`)
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      className="flex h-[432px] w-full cursor-pointer items-center justify-center overflow-hidden"
                    >
                      <Avatar className="h-full w-full overflow-hidden rounded-none duration-1000 ease-out">
                        <AvatarImage
                          className="object-contain"
                          src={data.image}
                          alt={`store profile picture`}
                          suppressHydrationWarning
                        />
                        <AvatarFallback
                          className="rounded-none"
                          suppressHydrationWarning
                        >
                          <Skeleton className="h-full w-full rounded-none bg-gray-200 " />
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                  </>
                ))
                .slice(0, 2)}
            </div>

            <div className="col-span-3 grid w-full items-center gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-2">
              {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  {portfolioData
                    ?.map((data, key) => (
                      <>
                        <motion.div
                          onClick={() => {
                            setIndex(key)
                            setVisible(true)
                            router.push(`${pathname}?image=${key}`)
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6 }}
                          className="flex h-[400px] w-full cursor-pointer items-center justify-center overflow-hidden"
                        >
                          <Avatar className="h-full w-full overflow-hidden rounded-none bg-transparent duration-1000 ease-out">
                            <AvatarImage
                              className="object-contain object-center"
                              src={data.image}
                              alt={`store profile picture`}
                              suppressHydrationWarning
                            />
                            <AvatarFallback suppressHydrationWarning>
                              <Skeleton className="h-full w-full rounded-none bg-gray-200 " />
                            </AvatarFallback>
                          </Avatar>
                        </motion.div>
                      </>
                    ))
                    .slice(2, 19)}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <PhotoSlider
        images={portfolioData.map((item) => ({
          src: item.image,
          key: item.slug,
        }))}
        visible={visible}
        onClose={() => {
          router.replace(`${pathname}`)
          setVisible(false)
        }}
        afterClose={() => {
          setVisible(false)
          setIndex(-1)
        }}
        loop
        index={index}
        onIndexChange={setIndex}
      />
    </>
  )
}
